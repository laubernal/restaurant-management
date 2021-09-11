import { Product, Providers } from '../entities/Providers';
import { IProvider } from '../interfaces/IProvider';
import { IMapper } from './IMapper';

export class ProvidersMapper implements IMapper<IProvider, Providers> {
  public toDomain(provider: IProvider): Providers {
    const products = provider.products.map(
      (product: { name: string; price: number; qty: number }) => {
        return new Product(product.name, product.price, product.qty);
      }
    );

    return new Providers(
      provider.id,
      provider.company,
      provider.iban,
      provider.email,
      provider.address,
      provider.purchase_date,
      products
    );
  }

  public toData(provider: Providers): IProvider {
    const products = provider.products.map(product => {
        return {
            name: product.name,
            price: product.price,
            qty: product.qty
        }
    })

    return {
      id: provider.id,
      company: provider.company,
      iban: provider.iban,
      email: provider.email,
      address: provider.address,
      purchase_date: provider.purchaseDate,
      products
    };
  }
}
