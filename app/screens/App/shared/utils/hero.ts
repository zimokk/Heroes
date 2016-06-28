export class Hero {
    _id: number;
    _name: string;
    _skills: number[];
    get id(): number {
        return this._id; }
    set id(id: number) {
        this._id = id; }
    get name(): string {
        return this._name; }
    set name(name: string) {
        this._name = name;}
    public get skills(): number[] {
        return this._skills;}
    public set skills(skills: number[]) {
        this._skills = skills;}
}
