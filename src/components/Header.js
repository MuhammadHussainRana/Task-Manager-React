import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({title}) => {
  
  return (
    <header className='header'>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager'
}

Header.protoTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color : 'red',
    backgroundColor : 'black'
}

export default Header