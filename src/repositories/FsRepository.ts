import { IMapper } from '../mappers/IMapper';
import { JsonFileReader } from './JsonFileReader';

// T = IEmployee ----- K = Staff
type ObjectDefinition = { [key: string]: any };
type HasId = { id: number };

export abstract class FsRepository<T extends HasId, K extends ObjectDefinition> extends JsonFileReader<T> {
  protected abstract mapper: IMapper<T, K>;

  public create(item: K): void {
    const newItem = this.mapper.toData(item);

    this.data.push(newItem);
    this.save();
  }

  public getOne(itemId: number): K {
    const item = this.data.find(({ id }) => {
      id === itemId;
    });

    if (!item) {
      throw new Error(`User with id: ${itemId} does not exist`);
    }

    return this.mapper.toDomain(item);
  }

  public getOneBy(propName: keyof K, value: string): K {
    // const employee = this.data.find((employee: IEmployee) => {
    //   const foundEmployee = EmployeesMapper.toDomain(employee);
    //   return findFn(foundEmployee);
    // });

    const item = this.data.find((item: T) => {
      const domainItem = this.mapper.toDomain(item);
      domainItem[propName] === value;
    });

    if (!item) {
      throw new Error(`User not found`);
    }

    return this.mapper.toDomain(item);
  }

  public update(itemId: number, newItem: K): void {
    const itemToUpdate = this.getOne(itemId);

    if (!itemToUpdate) {
      throw new Error(`User with id: ${itemId} does not exist`);
    }

    const updatedEmployee = this.mapper.toData(newItem);

    this.data.splice(this.data.indexOf(this.mapper.toData(itemToUpdate)), 1, updatedEmployee);
    this.save();
  }
}
