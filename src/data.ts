class Data {
    private _data: string[] = [];

    clear() : void{
        this._data = [];
    }

    push(item: string): void {
        this._data.push(item);
    }

    pop(): void {
        this._data.pop();
    }

    get(): string[] {
        return this._data;
    }

}
const data = new Data();
export {data};