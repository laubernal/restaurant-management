import { Product } from "./Product";

export class Providers {
  constructor(
    private _id: number,
    private _company: string,
    private _iban: string,
    private _email: string,
    private _address: string,
    private _purchaseDate: string,
    private _products: Product[]
  ) {}

  public get id(): number {
    return this._id;
  }

  public get company(): string {
    return this._company;
  }

  public get iban(): string {
    return this._iban;
  }

  public get email(): string {
    return this._email;
  }

  public get address(): string {
    return this._address;
  }

  public get purchaseDate(): string {
    return this._purchaseDate;
  }

  public get products(): Product[] {
    return this._products;
  }
}
