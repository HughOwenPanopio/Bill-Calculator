import { FormLabel, Paper, TextField, styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import SharedButton from '../Button'
import PropTypes from 'prop-types'

const Form = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FBFADA',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function FormAddFriend() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const id = crypto.randomUUID()

  function handleSubmit(e) {
    e.preventDefault()

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }
    console.log(newFriend)
  }

  return (
    <>
      <Form sx={{ width: '95%' }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormLabel variant="subtitle2">Friend&apos;s Name</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel variant="subtitle2">Image URL</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
        </Grid>
        <SharedButton>Add</SharedButton>
      </Form>
    </>
  )
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func,
}

export default FormAddFriend
