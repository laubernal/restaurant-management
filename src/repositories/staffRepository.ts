import * as fs from 'fs';
import { JsonFileReader } from './JsonFileReader';

export class StaffRepository extends JsonFileReader {
  constructor() {
    super('../../data/employees.json');
  }

  // protected async getAll() {
  //   return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf-8' }));
  // }
}
