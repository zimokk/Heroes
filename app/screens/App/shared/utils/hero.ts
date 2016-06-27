export class Hero {
    _id: number;
    _name: string;
    get id(): number {
        return this._id; }
    set id(id: number) {
        this._id = id; }
    get name(): string {
        return this._name; }
    set name(name: string) {
        this._name = name;}
}
