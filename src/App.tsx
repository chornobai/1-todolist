import React from 'react';
import './App.css';
import Todolist from './Todolist';
import { useState } from 'react';
 export type FilterValueType = "all" | "active" | "completed";

function App() {
    let [tasks, setTask] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "RestAPI", isDone: false },
        { id: 5, title: "GhraphQL", isDone: false }
    ]);

   

function deleteTask(id:number){
    let filteredTasks= tasks.filter(task => task.id !== id) 
    setTask(filteredTasks)
  
} 

let [filter, setFilter] = useState<FilterValueType>('all')
let taskForTodolist = tasks
 if (filter === "active") { taskForTodolist = tasks.filter(task => task.isDone === false)}
 if (filter === "completed") { taskForTodolist = tasks.filter(task => task.isDone === true)}

 function changeFilterValue (value:FilterValueType) {
    setFilter(value)
 }
    return (
        <div className="App">
            <Todolist title="Новая задача" tasks={taskForTodolist} deleteTask={deleteTask} changeFilterValue={changeFilterValue}/>
          
        </div>
    );
}

export default App;
