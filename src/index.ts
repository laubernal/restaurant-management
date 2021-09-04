import express, { Application, Request, Response } from 'express';

import { TotalCostResponse } from './responses/TotalCost';
import { OperationsStaffResponse } from './responses/OperationsStaffResponse';
import { StaffRepository } from './repositories/staffRepository';
import { StaffCollection } from './entities/StaffCollection';
import { EmployeeResponse } from './responses/EmployeeReponse';
import { Metadata, StaffMetadata } from './responses/Metadata';
import { Staff } from './entities/Staff';
import { IEmployee } from './interfaces/IEmployee';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staffRepository = new StaffRepository();

app.get('/cost/total', async (req: Request, res: Response): Promise<Response> => {
  const staff = new StaffCollection([]);

  return res.send(new TotalCostResponse(staff).toJson());
});

app.get(
  '/operations/staff/:numEmployees',
  async (req: Request, res: Response): Promise<Response> => {
    const numEmployees = parseInt(req.params.numEmployees);

    const staffCollection = staffRepository.getEmployeesByNum(numEmployees);

    const employeeResponses = staffCollection.staffList.map(staff => {
      return new EmployeeResponse(staff.fullName, staff.occupation, staff.phone, staff.iban);
    });

    return res.send(
      new OperationsStaffResponse(employeeResponses, Metadata.build(staffCollection))
    );
  }
);

const staff = staffRepository.getOneBy('firstName', 'adri');

app.post('/operations/staff/new', (req: Request, res: Response): void => {
  const employee = new Staff(
    1001,
    'Laura',
    'Bernal',
    'laurabernal@gmail.com',
    'Female',
    '146-627-8492',
    'SI80 2811 7564 3986 237',
    'manager',
    20
  );

  // staffRepository.createEmployee(employee);
  staffRepository.update(1001, employee);
});

try {
  app.listen(port, (): void => {
    console.log(`Connected sucssefully on port ${port}`);
  });
} catch (error) {
  console.error(`Error ocurred: ${error.message}`);
}
