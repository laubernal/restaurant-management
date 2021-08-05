import * as fs from 'fs';
import { Staff } from '../entities/Staff';

export class StaffRepository {
  constructor(private filename: string) {
    if (!filename) {
      throw new Error('A filename is required to create a repository');
    }

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  protected async getAll() {
    return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf-8' }));
  }

  totalStaff(): number {
    let totalStaff = 0;
    return totalStaff;
  }
}

// export new StaffRepository('staff.json');
module.exports = new StaffRepository('staff.json');
