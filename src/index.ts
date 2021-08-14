import express, { Application, Request, Response } from 'express';

import { totalCostTemplate } from './views/totalCost';
import { employeesTemplate } from './views/employees';
import { StaffRepository } from './repositories/staffRepository';
import { StaffCollection } from './entities/StaffCollection';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staffRepository = new StaffRepository('staff.json');

app.get('/cost/total', async (req: Request, res: Response): Promise<Response> => {
  const staff = new StaffCollection([]);

  return res.send(totalCostTemplate(staff));
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
