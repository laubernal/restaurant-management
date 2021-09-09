import { Providers } from '../entities/Providers';
import { IProvider } from '../interfaces/IProvider';
import { FsRepository } from './FsRepository';

export class ProvidersRepository extends FsRepository<IProvider, Providers> {
  protected mapper = new ProvidersMapper();
}
