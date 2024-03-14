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
import { useState } from 'react'

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('')
  const [myExpenses, setMyExpenses] = useState('')
  const paidByFriend = bill ? bill - myExpenses : ''
  const [paying, setPaying] = useState('user')

  //*! This is the function to submit the form by splitting the bill with friend. preventDefault is to prevent the behavior of the form. "if (!bill || !myExpenses) return" is to prevent the form for submitting with emplty values. onSplitBill is the function to calculate the split bill, useState is located on the App.jsx. "setBill, setMyExpenses, setPaying" is to reset the textfields into current state
  function handleSubmit(e) {
    e.preventDefault()

    if (!bill || !myExpenses) return

    onSplitBill(paying === 'user' ? paidByFriend : -myExpenses)

    setBill('')
    setMyExpenses('')
    setPaying('user')
  }

  return (
    <>
      <form style={{ padding: 10 }} onSubmit={handleSubmit}>
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          Split The Bill With {selectedFriend.name}
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
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
            <TextField
              id="outlined-basic"
              label="Your Expenses"
              variant="outlined"
              value={myExpenses}
              onChange={(e) =>
                setMyExpenses(
                  Number(e.target.value) > bill
                    ? paidByFriend
                    : Number(e.target.value)
                )
              }
            />
            <TextField
              id="outlined-basic"
              label={`${selectedFriend.name}'s Expenses`}
              variant="outlined"
              disabled
              value={paidByFriend}
            />

            <FormControl sx={{ m: 1, width: 280 }}>
              <InputLabel id="demo-multiple-name-label">
                Who&apos;s Paying The Bill?
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Who's Paying The Bill?" />}
                value={paying}
                onChange={(e) => setPaying(e.target.value)}
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
  onSplitBill: PropTypes.func,
}

export default FormSplitBill
