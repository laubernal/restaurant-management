import { Staff } from '../entities/Staff';
import { StaffCollection } from '../entities/StaffCollection';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeesMapper } from '../mappers/EmployeesMapper';

import { EMPLOYEES } from '../constants';
import { FsRepository } from './FsRepository';

export class StaffRepository extends FsRepository<IEmployee, Staff> {
  protected mapper = new EmployeesMapper();

  constructor() {
    super(EMPLOYEES);
  }

  public getEmployeesByNum(number: number): StaffCollection {
    let acc = 0;
    const employees: Staff[] = [];

    this.data.forEach((employee: IEmployee) => {
      if (acc < number) {
        acc++;

        employees.push(this.mapper.toDomain(employee));
      }
    });

    console.log(employees);
    return new StaffCollection(employees);
  }

  public createStaff(staff: Staff) {
    super.create(staff);
  }

  public getOneBy(propName: keyof Staff, value: string): Staff {
    // const employee = this.data.find((employee: IEmployee) => {
    //   const foundEmployee = EmployeesMapper.toDomain(employee);
    //   return findFn(foundEmployee);
    // });

    return super.getOneBy(propName, value);
  }

  public getOne(employeeId: number): Staff {
    return super.getOne(employeeId);
  }

  public update(employeeId: number, newEmployee: Staff): void {
    super.update(employeeId, newEmployee);
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
