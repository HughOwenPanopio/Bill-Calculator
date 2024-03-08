import { ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import SharedButton from '../Button'

function Friend({ friend }) {
  function handleSelect(e) {
    e.preventDefault()
    alert('Please select a friend')
    console.log('you selected a friend')
  }

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
            friend.balance < 0
              ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
              : friend.balance > 0
              ? `${friend.name} owes you $${Math.abs(friend.balance)}`
              : friend.balance === 0 && `You and ${friend.name} are even`
          }
        />
        <SharedButton onClick={(e) => handleSelect(e)}>Select</SharedButton>
      </ListItem>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
}

export default Friend
