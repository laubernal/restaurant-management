import { EmployeeResponse } from './EmployeeReponse';
import { Metadata } from './Metadata';

export class OperationsStaffResponse {
  constructor(public employees: EmployeeResponse[], public metadata: Metadata) {}
}
