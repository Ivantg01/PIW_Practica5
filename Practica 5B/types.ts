export enum Process {
    toDo="To do",
    inProgress="In progress",
    inReview="In review",
    done="Done",
}

export type Task = {
    name:string,
    process:Process
    id:number
}