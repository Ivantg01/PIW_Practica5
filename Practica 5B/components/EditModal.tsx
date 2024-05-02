import {FunctionComponent} from "preact"
import {Process, Task} from "../types.ts";
import {Signal, useState, useEffect} from "preact/hooks"

type editModalProps = {
    task:Signal<number>
    editModal:Signal<boolean>
    taskArray:Signal<Task[]>
}

const EditModal:FunctionComponent<editModalProps>= ({task, editModal,taskArray}) => {

    const taskProcess = ["To do","In progress","In review","Done"]
    if(task.value===0) return null
    const [name,setName] = useState<string>("")
    const [taskState,setTaskState] = useState<string>(Process.toDo)

    const myTask=taskArray.value.find((taskItem) => taskItem.id === task.value)



    useEffect(()=>{
        setName(myTask.name)
        setTaskState(myTask.process)
    },[task.value])

    const editTask = () => {
        taskArray.value = taskArray.value.map((taskItem) => {
            if(taskItem === myTask){
                return {name:name,process:taskState,id:task.value}
            }
            return taskItem
        })
        editModal.value=false
    }

    if(!editModal.value) return null
    return(
        <div className="overlay" onclick={()=>editModal.value=false}>
            <div class="editModal" onclick={(e)=> e.stopPropagation()}>
                <div className="inputs">
                    <div className="inputAndSelector">
                        <input type="text" value={name}  id="name" placeholder="Task Name"
                               onInput={(e)=>setName(e.currentTarget.value)} />
                        <select
                            value={taskState}
                            id="taskState"
                            name="taskState"
                            required
                            onChange={(e) => {setTaskState(e.currentTarget.value)}}
                        >
                            {taskProcess.map((stateSelect) => (
                                <option key={stateSelect} value={stateSelect}>
                                    {stateSelect}
                                </option>
                            ))}
                        </select>
                </div>
                    <button type="submit" onClick={()=>{task.value=editTask()}}>Update</button>
                </div>

            </div>
        </div>
    )

}

export default EditModal