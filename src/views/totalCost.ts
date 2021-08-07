import { StaffCollection } from '../entities/StaffCollection';

export function totalCostTemplate(staff: StaffCollection) {
  return {
    metadata: {
      totalStaff: staff.totalStaff(),
      waiter: {
        total: staff.totalOccupationStaff('waiter'),
        wage: `${staff.salary('waiter')} $/h`,
      },
      cookers: {
        total: staff.totalOccupationStaff('cooker'),
        wage: `${staff.salary('cooker')} $/h`,
      },
      managers: {
        total: staff.totalOccupationStaff('manager'),
        wage: `${staff.salary('manager')} $/h`,
      },
      cleanings: {
        total: staff.totalOccupationStaff('cleaning'),
        wage: `${staff.salary('cleaning')} $/h`,
      },
      valets: {
        total: staff.totalOccupationStaff('valet'),
        wage: `${staff.salary('valet')} $/h`,
      },
    },
    totalCost: {
      total: 500,
      currency: '$',
    },
  };
}
