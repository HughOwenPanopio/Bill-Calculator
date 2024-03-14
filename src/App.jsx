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

  //*! This is the function to add a new friend on the data.js, friend is the parameter that needs ti be updated, it is the new added object in the array. this function is proped in the FormAddFriend, the new object is proped in the FriendsList and passed down to Friend component.
  function handleAddFriend(friend) {
    setNewFriend((newFriend) => [...newFriend, friend])
  }

  //*! This function is to hide and show the FormAddFriend. opposite value from default value based on the current state. function is called on the SharedButton.
  function handleShowAddForm() {
    setShowAddForm((show) => !show)
  }

  //*! This function is to select a friend and the FormSplitBill will appear based on the selected friend.
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend))
    setShowAddForm(false)
  }

  //*! This is the logic for splitting the bill, targeting the balance value of the object.
  function handleSplitBill(value) {
    console.log(value)

    setNewFriend((newFriend) =>
      newFriend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )
    setSelectedFriend(null)
  }

  //*! This function is to delete a friend on the list
  function handleDeleteFriend(id) {
    setNewFriend((newFriend) => newFriend.filter((friend) => friend.id !== id))
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
            onDelete={handleDeleteFriend}
          />
        </Item>

        {selectedFriend && (
          <Item>
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
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
