import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';

import { EMPLOYEES } from '../constants';

export class StaffRepository extends JsonFileReader {
  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum(number: number): any[] {
    let acc = 0;
    const employees: any[] = [];

    this.data.forEach((employee: any) => {
      if (acc < number) {
        acc++;
        employees.push({
          id: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
          occupation: employee.occupation,
          phone: employee.phone,
        });
      }
    });

    console.log(employees);
    return employees;
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, '')),
