import {Page, Task} from "../types.ts";
import { FunctionComponent } from "preact"
import { Signal, useState } from "preact/hooks"
import CreateModal from "./CreateModal.tsx";

type buttonCreateProps = {
    taskArray:Signal<Task[]>
    openModal:Signal<boolean>
}

const ButtonCreate:FunctionComponent<buttonCreateProps> = ({taskArray, openModal}) => {
    return (
        <>
            <button className="menu" onClick={()=>openModal.value=true}>
                Create
            </button>
        </>
    )
}

export default ButtonCreate