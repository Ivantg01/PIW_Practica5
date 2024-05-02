import {FunctionComponent} from "preact"
import {Process, Task} from "../types.ts";
import {Signal, useState} from "preact/hooks"

type createModalProps = {
    taskArray:Signal<Task[]>
    openModal:Signal<boolean>
}

const CreateModal:FunctionComponent<createModalProps>= ({taskArray, openModal}) => {

    const taskProcess = ["To do","In progress","In review","Done"]
    const [name,setName] = useState<string>("")
    const [taskState,setTaskState] = useState<string>(Process.toDo)

    const addtask = () => {
        if(name==="") return taskArray.value
        const newTask:Task = {name:name, process:taskState,id:taskArray.value.length+1}
        const newTaskArray = [...taskArray.value,newTask]
        openModal.value=false
        setName("")
        setTaskState("To do")
        return newTaskArray

    }

    if(!openModal.value) return null
    return(
        <div className="overlay" onclick={()=>openModal.value=false}>
            <div class="createModal" onclick={(e)=> e.stopPropagation()}>
                <input type="text" value={name} id="name" placeholder="Task Name"
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
                <button type="submit" onClick={()=>{taskArray.value=addtask()}}>Create</button>
            </div>
        </div>
    )

}

export default CreateModal