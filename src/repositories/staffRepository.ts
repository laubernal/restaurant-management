import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';
import { Staff } from '../entities/Staff';

import { EMPLOYEES } from '../constants';

export interface IEmployee {
  // [index: string]: number | string;
  id?: number;
  firstName: string;
  lastName?: string;
  email?: string;
  gender?: string;
  occupation: string;
  phone?: string;
  iban?: string;
  salary: number;
}

export class StaffRepository extends JsonFileReader {
  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum(number: number): Staff[] {
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
    //   return {
    //     employees: employees;
    // }
  }

  // MAPPER
  public toDomain(employee: IEmployee): Staff {
    return new Staff(employee.firstName, employee.occupation, employee.salary);
  }

  public toData(employee: Staff): IEmployee {
    return {
      firstName: employee.name,
      occupation: employee.occupation,
      salary: employee.salary,
    };
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
