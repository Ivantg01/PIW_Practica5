import { FunctionComponent } from "preact"
import { Signal, useState } from "preact/hooks"
import {Process, Task} from "../types.ts";


type Props = {
    taskArray:Signal<Task[]>
    process:Process
    editModal:Signal<boolean>
    taskToUpdate:Signal<number>
}

const Column:FunctionComponent<Props> = ({taskArray, process,editModal,taskToUpdate}) => {

    const tasks = taskArray.value.filter((task:Task) => task.process === process)
        return (
            <div className="column">
                <h1>{process}</h1>
                { tasks.map((task:Task) => (
                    <div onClick={()=> {
                        editModal.value = true;
                        taskToUpdate.value = task.id;
                    }}>
                        <p>{task.name}</p>
                    </div>
                ))}
            </div>
        )



}

export default Column;
