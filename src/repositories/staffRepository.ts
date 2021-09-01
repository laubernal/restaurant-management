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

  public createEmployee(employee: Staff): void {
    const newEmployee = EmployeesMapper.toData(employee);
    console.log(newEmployee);

    this.data.push(newEmployee);
    this.save();
  }

  public update(employeeId: number, newEmployee: Staff): void {
    // Check if user exists
    // If it doesn't exist, send message
    // If it exists push the new in the array
    const employeeToUpdate = this.data.find(({ id }) => id === employeeId);

    if (!employeeToUpdate) {
      throw new Error(`User with id: ${employeeId} does not exist`);
    }

    const updatedEmployee = EmployeesMapper.toData(newEmployee);

    this.data.splice(this.data.indexOf(employeeToUpdate), 1, updatedEmployee);
    this.save();
  }
}

//Convert phone number string into a number:
// phone: parseFloat(employee.phone.replace(/[^0-9]/g, ''))
