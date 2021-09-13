import express, { Request, Response, Router } from 'express';

import { Product } from '../entities/Product';
import { Providers } from '../entities/Providers';
import { ProvidersRepository } from '../repositories/ProvidersRepository';

const router: Router = express.Router();

const providersRepository = new ProvidersRepository();

router.post('/operations/providers/new', (req: Request, res: Response): void => {
  const { id, company, iban, email, address, purchaseDate, products } = req.body;

  const newProducts: Product[] = products.map(
    (product: { name: string; price: number; qty: number }) => {
      return new Product(product.name, product.price, product.qty);
    }
  );

  const provider = new Providers(id, company, iban, email, address, purchaseDate, newProducts);

  providersRepository.create(provider);
});

router.get('/operations/providers/date', (req: Request, res: Response): void => {
  // return res.send(providersRepository.getByDate('2018-03-29'));
  const provider = providersRepository.getByDate('2018-03-29T20:46:23');
  console.log(provider);
});

export { router as operationsProviders };
