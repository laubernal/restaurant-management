import { IMapper } from '../mappers/IMapper';
import { JsonFileReader } from './JsonFileReader';

export abstract class FsRepository<T, K> extends JsonFileReader<T> {
  protected abstract mapper: IMapper<T, K>;

  public create(item: K): void {
    const newItem = this.mapper.toData(item);

    this.data.push(newItem);
    this.save();
  }
}
