import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import SharedButton from '../Button'
import PropTypes from 'prop-types'

function FormSplitBill({ selectedFriend }) {
  return (
    <>
      <form style={{ padding: 10 }}>
        <Typography variant="h6">
          Split a bill with {selectedFriend.name}
        </Typography>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '36ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Bill Value"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your Expenses"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={`${selectedFriend.name}'s Expenses`}
              variant="outlined"
              disabled
            />

            <FormControl sx={{ m: 1, width: 280 }}>
              <InputLabel id="demo-multiple-name-label">
                Who will Pay The Bill?
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Who Will Pay The Bill?" />}
              >
                <MenuItem value="user">You</MenuItem>
                <MenuItem value="friend">{selectedFriend.name}</MenuItem>
              </Select>
            </FormControl>

            <SharedButton>Split The Bill</SharedButton>
          </Stack>
        </Box>
      </form>
    </>
  )
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
}

export default FormSplitBill
