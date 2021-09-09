export class Providers {
  constructor(
    private _id: number,
    private _company: string,
    private _iban: string,
    private _email: string,
    private _address: string,
    private _purchaseDate: string,
    private _products: {}[]
  ) {}

  public get id(): number {
      return this._id;
  }
}
