import Input from './input';
import fs from 'fs';

export default class FileInput implements Input {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    async read(): Promise<any> {
        return await fs.promises.readFile(this.path);
    }
}