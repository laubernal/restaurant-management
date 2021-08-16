import { STAFF_TYPES } from '../constants';
import { StaffCollection } from '../entities/StaffCollection';
import { Metadata, StaffMetadata } from './metadata';

export class TotalCostResponse {
  constructor(private staff: StaffCollection) {}

  private buildMetadata(): Metadata {
    const staffMetadata = STAFF_TYPES.map((staffType: string) => {
      return new StaffMetadata(
        this.staff.totalOccupationStaff(staffType),
        `${this.staff.salary(staffType)} $/h`,
        staffType
      );
    });
    return new Metadata(this.staff.totalStaff(), staffMetadata);
  }

  private buildTotalCost() {
    return {
      total: this.staff.totalCost(),
      currency: '$',
    };
  }

  public toJson() {
    return {
      metadata: this.buildMetadata().toJson(),
      totalCost: this.buildTotalCost(),
    };
  }
}
