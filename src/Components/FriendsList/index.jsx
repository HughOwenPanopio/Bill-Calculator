import List from '@mui/material/List'
import PropTypes from 'prop-types'

import Friend from '../Friend'

function FriendsList({ friends, onSelect, selectedFriend, onDelete }) {
  return (
    <>
      <List>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelect={onSelect}
            selectedFriend={selectedFriend}
            onDelete={onDelete}
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
  onDelete: PropTypes.func,
}

export default FriendsList
