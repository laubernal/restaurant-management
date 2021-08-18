import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';

import { EMPLOYEES } from '../constants';

export class StaffRepository extends JsonFileReader {
  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum() {}
}
