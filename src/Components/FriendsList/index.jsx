import { List } from '@mui/material'
import Friend from '../Friend'
import { initialFriends } from '../../data'

function FriendsList() {
  return (
    <>
      <List>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </List>
    </>
  )
}

export default FriendsList
