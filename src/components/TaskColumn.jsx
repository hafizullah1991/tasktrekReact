import React from 'react'
import Todo from "../assets/direct-hit.png"
import "./TaskColumn.css"
import TaskCard from './TaskCard'
const TaskColumn = ({name , icon, tasks, status}) => {  // its distructuring way  name icon
  return (
    <section className="task-colum">
        <h2 className='task_column_heading'>
           <img className='task_column_icon' src={icon} alt="" />{name}</h2>
          {tasks.map()}
    </section>
  )
}

export default TaskColumn
