
export type TaskType = {
    id?: string;
    title: string;
    isDone?: boolean
}
export type TasksType = TaskType[]



export let todoList:TasksType = [{id: String(1), title: 'Task1', isDone: false},
                {id: String(2), title: 's', isDone: true},
                {id: String(3), title: 'Task3', isDone: false}]