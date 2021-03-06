import { STAFF_TYPES } from '../constants';
import { StaffCollection } from '../entities/StaffCollection';

export class Metadata {
  constructor(private totalStaff: number, private staff: StaffMetadata[]) {}

  public toJson() {
    return this.staff.reduce((accumulator: object, staff: StaffMetadata) => {
      if (!Object.keys(accumulator).length) {
        return {
          totalStaff: this.totalStaff,
        };
      }
      return {
        ...accumulator,
        ...staff.toJson(),
      };
    }, {});
  }

  public static build(staffCollection: StaffCollection): Metadata {
    const staffMetadata = STAFF_TYPES.map((staffType: string) => {
      return new StaffMetadata(
        staffCollection.totalOccupationStaff(staffType),
        `${staffCollection.salary(staffType)} $/h`,
        staffType
      );
    });
    return new Metadata(staffCollection.totalStaff(), staffMetadata);
  }
}

export class StaffMetadata {
  constructor(private total: number, private wage: string, private type: string) {}

  public toJson() {
    return {
      [this.type]: {
        total: this.total,
        wage: this.wage,
      },
    };
  }
}

// metadata: {
//     totalStaff: staff.totalStaff(),
//     waiters: {
//       total: staff.totalOccupationStaff('waiter'),
//       wage: `${staff.salary('waiter')} $/h`,
//     },
//     cookers: {
//       total: staff.totalOccupationStaff('cooker'),
//       wage: `${staff.salary('cooker')} $/h`,
//     },
//     managers: {
//       total: staff.totalOccupationStaff('manager'),
//       wage: `${staff.salary('manager')} $/h`,
//     },
//     cleanings: {
//       total: staff.totalOccupationStaff('cleaning'),
//       wage: `${staff.salary('cleaning')} $/h`,
//     },
//     valets: {
//       total: staff.totalOccupationStaff('valet'),
//       wage: `${staff.salary('valet')} $/h`,
//     },
//   }
