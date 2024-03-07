import { styled } from '@mui/material/styles'
import {
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import SharedButton from '../Button'

const Form = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FBFADA',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function FormSplitBill() {
  return (
    <Form sx={{ width: '97%' }}>
      <Typography variant="h5">Split a Bill With X</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormLabel variant="subtitle2">Bill Value</FormLabel>
        </Grid>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <FormLabel variant="subtitle2">Your Expenses</FormLabel>
        </Grid>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <FormLabel variant="subtitle2">X&apos;s Expenses</FormLabel>
        </Grid>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="" variant="outlined" disabled />
        </Grid>
        <Grid item xs={6}>
          <FormLabel variant="subtitle2">Who&apos;s paying the bill?</FormLabel>
        </Grid>
        <Grid item xs={6}>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem>I Will Pay</MenuItem>
            <MenuItem>X Will Pay</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <SharedButton>Split Bill</SharedButton>
    </Form>
  )
}

export default FormSplitBill
