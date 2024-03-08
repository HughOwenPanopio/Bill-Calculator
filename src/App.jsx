import { Paper, Stack } from '@mui/material'
import './App.css'
import SharedButton from './Components/Button'
import FormAddFriend from './Components/FormAddFriend'
import FormSplitBill from './Components/FormSplitBill'
import FriendsList from './Components/FriendsList'
import { styled } from '@mui/material/styles'
import { initialFriends } from './data'
import { useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function App() {
  const [newFriend, setNewFriend] = useState(initialFriends)

  function handleAddFriend(friend) {
    setNewFriend((newFriend) => [...newFriend, friend])
  }

  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <FriendsList friends={newFriend} />
        </Item>
        <Item>
          <FormSplitBill />
        </Item>
        <Item>
          <FormAddFriend onAddFriend={handleAddFriend} />
        </Item>
        <Item>
          <SharedButton>Add New Friend</SharedButton>
        </Item>
      </Stack>
    </>
  )
}

export default App
