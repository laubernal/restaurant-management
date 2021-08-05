import express, { Application, Request, Response } from 'express';

import { totalCostTemplate } from './views/totalCost';
import { StaffRepository } from './repositories/staffRepository';
import { Staff } from './entities/Staff';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/cost/total', async (req: Request, res: Response): Promise<Response> => {
  const staff = new Staff(8, 'Adri', 'Waiter');
  // console.log(`Número total personal: ${StaffRepository.totalStaff()}`);
  console.log(`Número total personal: ${staff.totalStaff()}`);

  return res.send(totalCostTemplate());
});

try {
  app.listen(port, (): void => {
    console.log(`Connected sucssefully on port ${port}`);
  });
} catch (error) {
  console.error(`Error ocurred: ${error.message}`);
}
