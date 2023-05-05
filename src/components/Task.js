import { AiFillCheckCircle } from 'react-icons/ai' 
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <AiFillCheckCircle size={50} className='icon' onClick={ () => onDelete(task.id)} /> 
        </h3> 
        <p>{task.day}</p>
    </div>
  )
}

export default Task