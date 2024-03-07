import PropTypes from 'prop-types'
import { GenButton } from './style'

function SharedButton({ children }) {
  return (
    <GenButton variant="contained" size="medium">
      {children}
    </GenButton>
  )
}

SharedButton.propTypes = {
  children: PropTypes.string,
}

export default SharedButton
