import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import SharedButton from '../Button'
import PropTypes from 'prop-types'

function Friend({ friend }) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={friend.image} alt={friend.name} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={friend.name}
          secondary={
            <>
              {friend.balance < 0
                ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
                : friend.balance > 0
                ? `${friend.name} owes you $${friend.balance}`
                : friend.balance === 0 && `You and ${friend.name} are even`}
            </>
          }
        />
        <SharedButton>Select</SharedButton>
      </ListItem>
    </>
  )
}

Friend.propTypes = {
  friend: PropTypes.object,
}

export default Friend
