export class TaskEntity{
    public id: number
    public title: string
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
    getKey() {
        return this.id
    }
}
