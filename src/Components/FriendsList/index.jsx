import List from '@mui/material/List'
import PropTypes from 'prop-types'

import Friend from '../Friend'

function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <>
      <List>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelect={onSelect}
            selectedFriend={selectedFriend}
          />
        ))}
      </List>
    </>
  )
}

FriendsList.propTypes = {
  friends: PropTypes.array,
  onSelect: PropTypes.func,
  selectedFriend: PropTypes.object,
}

export default FriendsList
