import Output from './output';
import fs from 'fs';

export default class FileOutput implements Output {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    async write(data: any): Promise<void> {
        return await fs.promises.writeFile(this.path, data);
    }
}