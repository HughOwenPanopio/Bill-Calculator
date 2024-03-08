import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SharedButton from '../Button'
import { useState } from 'react'
import { Stack } from '@mui/material'
import PropTypes from 'prop-types'

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const id = crypto.randomUUID()

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }
    onAddFriend(newFriend)

    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
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
              label="Friend's Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <SharedButton>Add Friend</SharedButton>
          </Stack>
        </Box>
      </form>
    </div>
  )
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
}

export default FormAddFriend
