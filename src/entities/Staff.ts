export class Staff {
  constructor(protected _salary: number, protected _name: string, protected _occupation: string) {}

  public get salary(): number {
    return this._salary;
  }

  public get name(): string {
    return this._name;
  }

  public get occupation(): string {
    return this._occupation;
  }
}
