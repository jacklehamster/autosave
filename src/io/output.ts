export default interface Output {
    write(data: any): Promise<void>;
}