export class Staff {
  constructor(
    private _id: number,
    protected _firstName: string,
    private _lastName: string,
    private _email: string,
    private _gender: string,
    private _phone: string,
    private _iban: string,
    protected _occupation: string,
    protected _salary: number
  ) {}

  public get firstName(): string {
    return this._firstName;
  }

  public get last_name(): string {
    return this.last_name;
  }

  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public get occupation(): string {
    return this._occupation;
  }

  public get salary(): number {
    return this._salary;
  }

  public get phone(): string {
    return this.phone;
  }
}
