import React, {useState} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import doneIcon from "./assets/check-mark-button.png"
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import TaskColumn from './components/TaskColumn'
const App = () => {
  const [tasks , setTasks ] = useState([])
  console.log("tasks", tasks)
  return (
    <div className='app'>
      <TaskForm setTasks ={setTasks}/>
      <main className='app_main'>
      <TaskColumn name = 'To do' icon = {todoIcon} tasks = {tasks} status ="todo" />
      <TaskColumn name ="Doing" icon = {doingIcon} tasks = {tasks} status ="doing"/>
      <TaskColumn name = "Done" icon = {doneIcon} tasks = {tasks} status ="done"/>
      </main>
    </div>
  )
}

export default App
