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
