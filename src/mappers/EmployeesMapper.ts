import { IEmployee } from '../interfaces/IEmployee';
import { Staff } from '../entities/Staff';

export class EmployeesMapper {
  public static toDomain(employee: IEmployee): Staff {
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

  public static toData(employee: Staff): IEmployee {
    // const fullName = `${employee.first_name} ${employee.last_name}`;

    return {
      id: employee.id,
      first_name: employee.firstName,
      last_name: employee.lastName,
      email: employee.email,
      gender: employee.gender,
      phone: employee.phone,
      iban: employee.iban,
      occupation: employee.occupation,
      salary: employee.salary,
    };
  }
}
