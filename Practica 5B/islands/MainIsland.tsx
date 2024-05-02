import { FunctionComponent } from "preact"
import { useSignal } from "@preact/signals";
import {Process, Task} from "../types.ts";
import ButtonCreate from "../components/ButtonCreate.tsx";
import Column from "../components/Column.tsx";
import CreateModal from "../components/CreateModal.tsx";
import EditModal from "../components/EditModal.tsx";

const MainIsland:FunctionComponent = () =>{

    const taskArray = useSignal<Task[]>( [])
    const openModal = useSignal<boolean>(false)
    const editModal = useSignal<boolean>(false)
    const taskToUpdate = useSignal<number>(0)

    return (
        <div className="main">
            <ButtonCreate taskArray={taskArray} openModal={openModal}/>
            <Column taskArray={taskArray} process={Process.toDo} editModal={editModal} taskToUpdate={taskToUpdate}/>
            <Column taskArray={taskArray} process={Process.inProgress} editModal={editModal} taskToUpdate={taskToUpdate}/>
            <Column taskArray={taskArray} process={Process.inReview} editModal={editModal} taskToUpdate={taskToUpdate}/>
            <Column taskArray={taskArray} process={Process.done} editModal={editModal} taskToUpdate={taskToUpdate}/>
            <CreateModal taskArray={taskArray} openModal={openModal}/>
            <EditModal task={taskToUpdate} taskArray={taskArray} editModal={editModal}/>

        </div>
    )
}

export default MainIsland