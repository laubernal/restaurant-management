import { totalCostTemplate } from './totalCost';
import { StaffCollection } from '../entities/StaffCollection';

export function employeesTemplate() {
  const staff = new StaffCollection([]);
  return totalCostTemplate(staff);
}
