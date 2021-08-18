import { TotalCostResponse } from './TotalCost';
import { StaffCollection } from '../entities/StaffCollection';

export function employeesTemplate() {
  const staff = new StaffCollection([]);
  return new TotalCostResponse(staff);
}
