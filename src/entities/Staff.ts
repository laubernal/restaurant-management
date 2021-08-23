export class Staff {
  private id: number = 0;
  private lastName: string = '';
  private email: string = '';
  private gender: string = '';
  private phone: string = '';
  private iban: string = '';

  constructor(protected _salary: number, protected _name: string, protected _occupation: string) {}

  public get salary(): number {
    return this._salary;
  }

  public get name(): string {
    return `${this._name} ${this.lastName}`;
  }

  public get occupation(): string {
    return this._occupation;
  }
}
