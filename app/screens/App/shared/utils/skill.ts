export class Skill{
    _id: number;
    _name: string;
    _cost: number;
    constructor(id: number, name: string, cost: number){
        this._id = id;
        this._cost = cost;
        this._name = name; }
    public get id(): number {
        return this._id;}
    public set id(id: number) {
        this._id = id;}
    public get name(): string {
        return this._name;}
    public set name(name: string) {
        this._name = name;}
    public get cost(): number {
        return this._cost;}
    public set cost(cost: number) {
        this._cost = cost;}
}
