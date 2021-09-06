import { Staff } from '../entities/Staff';
import { StaffCollection } from '../entities/StaffCollection';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeesMapper } from '../mappers/EmployeesMapper';

import { EMPLOYEES } from '../constants';
import { FsRepository } from './FsRepository';

// export class StaffRepository extends JsonFileReader<IEmployee> {
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

    const employee = this.data.find((employee: IEmployee) => {
      const domainEmployee = this.mapper.toDomain(employee);
      domainEmployee[propName] === value;
    });

    if (!employee) {
      throw new Error(`User not found`);
    }

    return this.mapper.toDomain(employee);
  }

  public getOne(employeeId: number): Staff {
    const employee = this.data.find(({ id }) => {
      id === employeeId;
    });

    if (!employee) {
      throw new Error(`User with id: ${employeeId} does not exist`);
    }

    return this.mapper.toDomain(employee);
  }

  public update(employeeId: number, newEmployee: Staff): void {
    // Check if user exists
    // If it doesn't exist, send message
    // If it exists push the new in the array
    const employeeToUpdate = this.getOne(employeeId);

    if (!employeeToUpdate) {
      throw new Error(`User with id: ${employeeId} does not exist`);
    }

    const updatedEmployee = this.mapper.toData(newEmployee);

    this.data.splice(this.data.indexOf(this.mapper.toData(employeeToUpdate)), 1, updatedEmployee);
    this.save();
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
