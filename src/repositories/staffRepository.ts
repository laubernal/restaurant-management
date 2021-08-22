import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';

import { EMPLOYEES } from '../constants';

export class StaffRepository extends JsonFileReader {
  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum(num: number): any[] {
    let acc = 0;
    const employees: any[] = [];

    this.data.forEach((employee: any) => {
      if (acc < num) {
        acc++;
        employees.push({
          name: employee.first_name + employee.last_name,
          occupation: employee.occupation,
          phone: employee.phone,
        });
      }
    });

    console.log(employees);
    return employees;

    // console.log(this.data[0]);
  }
}
