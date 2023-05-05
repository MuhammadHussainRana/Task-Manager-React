import PropTypes from 'prop-types'

const Button = ({className, onClick}) => {
  return ( 
  <button onClick={onClick} className={className}>
  </button>
  )
}

Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button