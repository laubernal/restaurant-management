import { StaffCollection } from '../entities/StaffCollection';
import { Metadata } from './Metadata';

export class TotalCostResponse {
  constructor(private staff: StaffCollection) {}

  private buildTotalCost() {
    return {
      total: this.staff.totalCost(),
      currency: '$',
    };
  }

  public toJson() {
    return {
      metadata: Metadata.build(this.staff).toJson(),
      totalCost: this.buildTotalCost(),
    };
  }
}
