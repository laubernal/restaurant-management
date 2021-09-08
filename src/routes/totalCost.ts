import express, { Request, Response, Router } from 'express';

import { StaffCollection } from '../entities/StaffCollection';
import { TotalCostResponse } from '../responses/TotalCost';

const router: Router = express.Router();

router.get('/cost/total', async (req: Request, res: Response): Promise<Response> => {
  const staff = new StaffCollection([]);

  return res.send(new TotalCostResponse(staff).toJson());
});

export { router as totalCost };
