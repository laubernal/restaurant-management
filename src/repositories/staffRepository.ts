import * as fs from 'fs';

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
}
