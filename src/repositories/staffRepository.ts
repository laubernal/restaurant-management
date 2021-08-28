import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';
import { Staff } from '../entities/Staff';

import { EMPLOYEES } from '../constants';
import { StaffCollection } from '../entities/StaffCollection';

export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  occupation: string;
  phone: string;
  iban: string;
  salary: number;
}

export class StaffRepository extends JsonFileReader<IEmployee> {
  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum(number: number): StaffCollection {
    let acc = 0;
    const employees: Staff[] = [];

    this.data.forEach((employee: IEmployee) => {
      if (acc < number) {
        acc++;

        employees.push(this.toDomain(employee));

        // employees.push({
        //   id: employee.id,
        //   name: `${employee.first_name} ${employee.last_name}`,
        //   occupation: employee.occupation,
        //   phone: employee.phone,
        // });
      }
    });

    console.log(employees);
    return new StaffCollection(employees);
  }

  // MAPPER
  public toDomain(employee: IEmployee): Staff {
    return new Staff(
      employee.id,
      employee.first_name,
      employee.last_name,
      employee.email,
      employee.gender,
      employee.phone,
      employee.iban,
      employee.occupation,
      employee.salary
    );
  }

  // public toData(employee: Staff): IEmployee {
  //   // const fullName = `${employee.first_name} ${employee.last_name}`;

  //   return {
  //     firstName: employee.fullName,
  //     occupation: employee.occupation,
  //     phone: employee.phone,
  //     salary: employee.salary,
  //   };
  // }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
