import { ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import SharedButton from '../Button'

function Friend({ friend, onSelect, selectedFriend }) {
  // function handleSelect(e) {
  //   e.preventDefault()
  //   alert('Please select a friend')
  //   console.log('you selected a friend')
  // }

  const isSelected = selectedFriend?.id === friend.id

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={friend.image} alt={friend.name} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ width: '150%' }}
          primary={friend.name}
          secondary={
            friend.balance < 0 ? (
              <span style={{ color: '#FF004D' }}>
                You owe {friend.name} ${Math.abs(friend.balance)}
              </span>
            ) : friend.balance > 0 ? (
              <span style={{ color: '#99BC85' }}>
                {friend.name} owes you ${Math.abs(friend.balance)}
              </span>
            ) : (
              friend.balance === 0 && `You and ${friend.name} are even`
            )
          }
        />
        <SharedButton onClick={() => onSelect(friend)}>
          {isSelected ? 'Close' : 'Select'}
        </SharedButton>
      </ListItem>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedFriend: PropTypes.object,
}

export default Friend
