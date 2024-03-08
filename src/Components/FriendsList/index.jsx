import List from '@mui/material/List'
import PropTypes from 'prop-types'

import Friend from '../Friend'

function FriendsList({ friends }) {
  return (
    <>
      <List>
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
