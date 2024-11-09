import React from 'react'
import './TaskCard.css'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
const TaskCard = () => {
  return (
    <article className='task_card'>
      <p className="task-text">This  is simple text.</p>
      <div className="task_card_bottom_line">
        {/*  // problem was here tage component name in here I was writing TagName // */}
        <div className="task_card_tags">  
       <Tag name= "HTML" />
       <Tag name= "CSS" />

        </div>
        <div className="task_delete">
            <img src={deleteIcon} className='delete_icon' alt="" />
        </div>
    </div>
    </article>
    
  )
}

export default TaskCard
