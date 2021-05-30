import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import React from 'react';

class ChatList extends React.Component {
  render(){
    return (
        
      <List>
          {['Chat 1', 'Chat 2', 'Chat 3', 'Chat 4', 'Chat 6', 'Chat 7', 'Chat 8', 'Chat 9'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default ChatList;