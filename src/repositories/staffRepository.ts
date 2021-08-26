import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';
import { Staff } from '../entities/Staff';

import { EMPLOYEES } from '../constants';

export interface IEmployee {
  // [index: string]: number | string;
  id?: number;
  name: string;
  // lastName?: string;
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

        employees.push(this.toData(employee));

        // employees.push({
        //   id: employee.id,
        //   name: `${employee.first_name} ${employee.last_name}`,
        //   occupation: employee.occupation,
        //   phone: employee.phone,
        // });
      }
    });

    console.log(employees);
    return employees;
  }

  // MAPPER
  public toDomain(employee: IEmployee): Staff {
    return new Staff(employee.name, employee.occupation, employee.salary);
  }

  public toData(employee: Staff): IEmployee {
    const fullName = `${employee.first_name} ${employee.last_name}`;

    return {
      name: fullName,
      occupation: employee.occupation,
      phone: employee.phone,
      salary: employee.salary,
    };
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
