import { STAFF_TYPES } from '../constants';
import { Staff } from './Staff';

export class StaffCollection {
  constructor(protected staffList: Staff[]) {}

  public totalStaff(): number {
    return this.staffList.length;
  }

  public totalOccupationStaff(occupation: string): number {
    return this.staffList.reduce((total: number, staff: Staff) => {
      if (staff.occupation === occupation) {
        return total + 1;
      }
      return total;
    }, 0);
  }

  public salary(occupation: string): number {
    const staff = this.staffList.find((staff: Staff) => {
      if (staff.occupation === occupation) {
        return staff;
      }
    });

    if (!staff) {
      return 0;
    }
    return staff.salary;
  }

  public totalCost(): number {
    return STAFF_TYPES.reduce((totalCost: number, staffType: string) => {
      return totalCost + this.totalOccupationStaff(staffType) * this.salary(staffType);
    }, 0);
  }
}

// StaffCollection:
//     Staff: [
//         {
//             salary:
//             name:
//             occupation:
//         }
//     ]
// }
