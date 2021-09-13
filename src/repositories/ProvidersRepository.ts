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

  public getByDate(date: string): Providers {
    const toEpoch = new Date(date).getTime();
    console.log(date);
    console.log(new Date(date));
    console.log(toEpoch);

    const provider = super.getOneBy('purchaseDate', toEpoch.toString());

    if (!provider) {
      throw new Error('Provider not found');
    }

    return provider;
  }
}
