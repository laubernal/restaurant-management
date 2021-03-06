import * as fs from 'fs';
import * as path from 'path';

import { DATA_DIR } from '../constants';

export abstract class JsonFileReader<T> {
  protected data!: T[];

  constructor(private filename: string) {
    this.readJson();
  }

  private readJson() {
    if (!this.filename) {
      throw new Error('Filename needed');
    }

    try {
      this.data = JSON.parse(
        fs.readFileSync(path.join(DATA_DIR, this.filename), { encoding: 'utf-8' })
      );
    } catch {
      throw new Error('Could not read the file');
    }
  }

  protected save(): void {
    fs.writeFileSync(path.join(DATA_DIR, this.filename), JSON.stringify(this.data, null, 2));
  }
}
