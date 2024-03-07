import './App.css'
import FriendsList from './Components/FriendsList/index'
import FormAddFriend from './Components/FormAddFriend/index'
import FormSplitBill from './Components/FormSplitBill/index'
import SharedButton from './Components/Button/index'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/material'
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
  const [friends, setFriends] = useState(initialFriends)

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
  }

  return (
    <>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
        <Item>
          <FriendsList friends={friends} />
        </Item>
        <Item>
          <FormSplitBill />
        </Item>
        <Item>
          <FormAddFriend onAddFriend={handleAddFriend} />
          <SharedButton>Add Friend</SharedButton>
        </Item>
      </Stack>
    </>
  )
}

export default App
