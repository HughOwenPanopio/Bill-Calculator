import './App.css'
import FriendsList from './Components/FriendsList/index'
import FormAddFriend from './Components/FormAddFriend/index'
import FormSplitBill from './Components/FormSplitBill/index'
import SharedButton from './Components/Button/index'

function App() {
  return (
    <>
      <FriendsList />
      <FormAddFriend />
      <SharedButton>Add Friend</SharedButton>
      <FormSplitBill />
    </>
  )
}

export default App
