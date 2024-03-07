import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
// import PropTypes from 'prop-types'

function Friend({ friend }) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={friend.image} alt={friend.name} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={friend.name} secondary={friend.balance} />
      </ListItem>
    </>
  )
}

// Friend.proptype = {
//   friend: PropTypes.string,
// }

export default Friend
