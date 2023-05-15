import { Link, useLocation } from 'react-router-dom'
import Button  from './Button'
import AddTask from "./AddTask"
import AddTaskModal from './AddTaskModal';


const Footer = ( { onAdd } ) => {
  const location = useLocation()
  return (
    <footer>
        { location.pathname ==='/' && (<AddTaskModal onAdd = {onAdd}/>)}      
        <div>
        { location.pathname ==='/' && < Link to="/history">Show Completed Tasks</Link> }
        </div>
    </footer>
  )
}

export default Footer