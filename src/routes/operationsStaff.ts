import express, { Request, Response, Router } from 'express';

import { Staff } from '../entities/Staff';
import { StaffRepository } from '../repositories/staffRepository';
import { EmployeeResponse } from '../responses/EmployeeReponse';
import { Metadata } from '../responses/Metadata';
import { OperationsStaffResponse } from '../responses/OperationsStaffResponse';

const router: Router = express.Router();

const staffRepository = new StaffRepository();

router.get(
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

router.post('/operations/staff/new', (req: Request, res: Response): void => {
  const { id, firstName, lastName, email, gender, phone, iban, occupation, salary } = req.body;
  console.log(`Employee with id: ${id} and name: ${firstName} ${lastName}`);

  const employee = new Staff(
    id,
    firstName,
    lastName,
    email,
    gender,
    phone,
    iban,
    occupation,
    salary
  );

  staffRepository.create(employee);
  //   staffRepository.update(1001, employee);
});

export { router as operationsStaff };
