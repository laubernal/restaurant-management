import { PROVIDERS } from '../constants';
import { Providers } from '../entities/Providers';
import { IProvider } from '../interfaces/IProvider';
import { ProvidersMapper } from '../mappers/ProvidersMapper';
import { FsRepository } from './FsRepository';

export class ProvidersRepository extends FsRepository<IProvider, Providers> {
  protected mapper = new ProvidersMapper();

  constructor() {
    super(PROVIDERS);
  }

  public create(provider: Providers) {
    super.create(provider);
  }

  public getOneBy(propName: keyof Providers, value: string): Providers {
    const provider = super.getOneBy(propName, value);

    if (!provider) {
      throw new Error('Provider not found');
    }

    return provider;
  }

  public getByDate(date: string): Providers {
    const toEpoch = new Date(date).getTime().toString();
    const epochDate = toEpoch.slice(0, 10);

    const provider = super.getOneBy('purchaseDate', epochDate);

    if (!provider) {
      throw new Error('Provider not found');
    }

    return provider;
  }
}
