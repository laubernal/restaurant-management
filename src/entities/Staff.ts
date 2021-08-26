export class Staff {
  private id?: number;
  // private lastName?: string;
  private email?: string;
  private gender?: string;
  // private phone?: string;
  private iban?: string;

  constructor(
    protected _first_name: string,
    protected _occupation: string,
    protected _salary: number
  ) {}

  public get first_name(): string {
    return this._first_name;
  }

  public get last_name(): string {
    return this.last_name;
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
