// import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { GenButton } from './style'

function SharedButton({ children, onClick }) {
  return (
    <>
      <GenButton
        variant="contained"
        onClick={onClick}
        type="submit"
        width="width"
      >
        {children}
      </GenButton>
    </>
  )
}

SharedButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default SharedButton
