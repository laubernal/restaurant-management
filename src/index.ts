import express, { Application, Request, Response } from 'express';

import { TotalCostResponse } from './responses/TotalCost';
import { employeesTemplate } from './responses/employees';
import { StaffRepository } from './repositories/staffRepository';
import { StaffCollection } from './entities/StaffCollection';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staffRepository = new StaffRepository();

app.get('/cost/total', async (req: Request, res: Response): Promise<Response> => {
  const staff = new StaffCollection([]);

  return res.send(new TotalCostResponse(staff).toJson());
});

app.get('/operations/staff/', async (req: Request, res: Response): Promise<Response> => {
  return res.send(employeesTemplate);
});

try {
  app.listen(port, (): void => {
    console.log(`Connected sucssefully on port ${port}`);
  });
} catch (error) {
  console.error(`Error ocurred: ${error.message}`);
}
