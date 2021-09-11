import express, { Application } from 'express';

import { operationsProviders } from './routes/operationsProviders';
import { operationsStaff } from './routes/operationsStaff';
import { totalCost } from './routes/totalCost';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(operationsStaff);
app.use(totalCost);
app.use(operationsProviders);

try {
  app.listen(port, (): void => {
    console.log(`Connected sucssefully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error ocurred: ${error.message}`);
}
