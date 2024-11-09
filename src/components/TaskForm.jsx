import React, {useState} from 'react'
import './TaskFrom.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData ] = useState({
    task:"",
    status: "todo",
    tags: []                  // adding empty arry for tags css html ...
  })

const checkTag= (tag) =>{
  return taskData.tags.some(item => item ===tag)
}

  const selectTag =(tag) =>{
      if(taskData.tags.some(item => item === tag)){
    const filterTags = taskData.tags.filter(item => item !== tag)
    setTaskData(prev => {
      return {...prev, tags: filterTags}
     })
      }
      else{
        setTaskData(prev => {
          return {...prev, tags: [...prev.tags, tag]}
        })
      }
  }
 


const handleChange = e =>{
  const {name , value} = e.target     // this is more simple using diestructruing 
// const name = e.target.name;        //shows which is being changed 
// const value = e.target.value;     // shows the current value.
setTaskData(prev => {
  return {...prev, [name]: value} // take the prv value and use spread opreator and update the status only with keeping the task vlaue.

})
}
const handleSubmit = e =>{    // preventing from updating or default or blinking the page
e.preventDefault();
console.log(taskData)
setTasks((prev)=>{
  return [...prev, taskData];
});
};


//   const [task , setTask]= useState("");
//   const [status , setStatus ] = useState("Todo")
// console.log(task, status)
// const handleTaskChange = e =>{
//   setTask(e.target.value)
// }
// const handleStatusChange= e =>{
//   setStatus(e.target.value)
// }
  return (
    
      <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input type="text" name= "task" className='task_input' 
        // placeholder='Enter your task' onChange={(e) => setTask(e.target.value)}
        placeholder='Enter your task' onChange={handleChange}
          />
        <div className="task_form-bottom_line">
            <div>
              {/* first selectTag is property name not function second oen is function */}
              {/* we use props becuase tag has it's own components  , onllick will be used on Tag component*/}
           <Tag tagName = 'HTML' selectTag ={selectTag} selected ={checkTag("HTML")}/> 
           <Tag tagName = 'CSS' selectTag ={selectTag} selected ={checkTag("CSS")} />
           <Tag tagName = 'JavaScript' selectTag ={selectTag} selected ={checkTag("JavaScript")}/>
           <Tag tagName = "React" selectTag ={selectTag} selected ={checkTag("React")} />
            </div>
            <div>
            <select name ="status" className="task-status" onChange={handleChange}>
      
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <button type='submit' className='task_submit'> + Add Task</button>
           </div>
        </div>
      </form>
      </header>
   
  )
}

export default TaskForm
