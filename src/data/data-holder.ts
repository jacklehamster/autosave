import Output from '../io/output';
import Input from '../io/input';
import FileInput from '../io/file-input';
import FileOutput from '../io/file-output';

interface Props {
    path?: string;
    input?: Input;
    output?: Output;
}

export default class DataHolder {
    data: any;
    input: Input;
    output: Output;

    constructor({ input, output, path }: Props) {
        this.input = input ?? new FileInput(path!);
        this.output = output ?? new FileOutput(path!);
        input?.read().then(data => this.data = data);
    }

    async save() {
        return this.output.write(this.data);
    }
}