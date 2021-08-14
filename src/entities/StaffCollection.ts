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
    const totalCostWaiters = this.totalOccupationStaff('waiter') * this.salary('waiter');
    const totalCostCookers = this.totalOccupationStaff('cooker') * this.salary('cooker');
    const totalCostManagers = this.totalOccupationStaff('manager') * this.salary('manager');
    const totalCostCleanings = this.totalOccupationStaff('cleaning') * this.salary('cleaning');
    const totalCostValets = this.totalOccupationStaff('valet') * this.salary('valet');

    return (
      totalCostWaiters + totalCostCookers + totalCostManagers + totalCostCleanings + totalCostValets
    );
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
