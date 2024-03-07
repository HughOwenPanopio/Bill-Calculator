import { List } from '@mui/material'
import Friend from '../Friend'
import PropTypes from 'prop-types'

function FriendsList({ friends }) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </List>
    </>
  )
}

FriendsList.propTypes = {
  friends: PropTypes.array,
}

export default FriendsList
