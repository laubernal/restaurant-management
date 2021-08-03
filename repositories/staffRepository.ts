import * as fs from 'fs';

export class StaffRepository {
    private filename: string;
    constructor(filename: string) {
        if (!filename) {
            throw new Error('A filename is required to create a repository');
        }

        this.filename = filename;
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