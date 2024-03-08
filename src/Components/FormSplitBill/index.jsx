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

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   }
// }

function FormSplitBill() {
  return (
    <>
      <form style={{ padding: 10 }}>
        <Typography variant="h6">Split a bill with x</Typography>
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
              label="X's Expenses"
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
                <MenuItem value="friend">x</MenuItem>
              </Select>
            </FormControl>

            <SharedButton>Split The Bill</SharedButton>
          </Stack>
        </Box>
      </form>
    </>
  )
}

export default FormSplitBill
