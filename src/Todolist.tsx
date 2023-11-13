import React from 'react';
import { FilterValueType } from './App';



type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (taskId:number) => void,
    changeFilterValue:(value:FilterValueType) => void
  
}
function Todolist(props:PropsType) {
    return (
        
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                   {props.tasks.map((task) => {
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span><button onClick={() => {props.deleteTask(task.id)}}>X</button></li>
                    )
                       
                    })}
                    
                    
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
       
    );
}

export default Todolist;
