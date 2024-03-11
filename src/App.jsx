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
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleAddFriend(friend) {
    setNewFriend((newFriend) => [...newFriend, friend])
  }

  function handleShowAddForm() {
    setShowAddForm((show) => !show)
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend))
    setShowAddForm(false)
  }

  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <FriendsList
            friends={newFriend}
            onSelect={handleSelection}
            selectedFriend={selectedFriend}
          />
        </Item>

        {selectedFriend && (
          <Item>
            <FormSplitBill selectedFriend={selectedFriend} />
          </Item>
        )}

        {showAddForm && (
          <Item>
            <FormAddFriend onAddFriend={handleAddFriend} />
          </Item>
        )}

        <Item>
          <SharedButton onClick={handleShowAddForm}>
            {showAddForm ? 'Close' : 'Add New Friend'}
          </SharedButton>
        </Item>
      </Stack>
    </>
  )
}

export default App
