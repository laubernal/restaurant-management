import * as fs from 'fs';

export abstract class JsonFileReader {
  protected data!: string;

  constructor(private filename: string) {
    this.readJson();
  }

  private readJson() {
    if (!this.filename) {
      throw new Error('Filename needed');
    }

    try {
      this.data = fs.readFileSync(this.filename, { encoding: 'utf-8' });
    } catch {
      throw new Error('Could not read the file');
    }
  }
}
