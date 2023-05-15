import { AiFillCheckCircle } from 'react-icons/ai' 
import { Link } from 'react-router-dom'

const Task = ({ task, onComplete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h5>{task.text} <AiFillCheckCircle size={50} className='icon' onClick={ () => onComplete(task.id)} /> 
        </h5> 
        <p>{task.day}</p>
    </div>
  )
}

export default Task