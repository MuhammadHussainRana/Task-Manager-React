import { Link, useLocation } from 'react-router-dom'
import Button  from './Button'

const Footer = ( { onAdd, showAdd } ) => {
  const location = useLocation()
  return (
    <footer>
        { location.pathname ==='/' && (<Button className={!showAdd ? 'plus-button' : 'close-button'} onClick={onAdd} />
        )}
        <div>
        { location.pathname ==='/' && < Link to="/history">Show Completed Tasks</Link> }
        </div>
        
    </footer>
  )
}

export default Footer