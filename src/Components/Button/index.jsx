// import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { GenButton } from './style'

//* This is a reusable button to organized all the buttons used in the UI. Created a Style.js to customized the design od the button structure from the Material UI.

//*! Proped the children and onclick to pass the function and string properties. make sure to include type properties.
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
