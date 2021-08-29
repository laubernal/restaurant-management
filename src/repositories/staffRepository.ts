import { JsonFileReader } from './JsonFileReader';
import { Staff } from '../entities/Staff';
import { StaffCollection } from '../entities/StaffCollection';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeesMapper } from '../mappers/EmployeesMapper';

import { EMPLOYEES } from '../constants';

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

        employees.push(EmployeesMapper.toDomain(employee));
      }
    });

    console.log(employees);
    return new StaffCollection(employees);
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
