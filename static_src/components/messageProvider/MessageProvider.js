import React from 'react';

class MessageProvider extends React.Component {
    state = {
        conversations: [
            {title: 'room1', value: ""},
            {title: 'room2', value: ""},
            {title: 'room3', value: ""},
        ],
        messages: {
            room1: [{author: "", message: "", date: new Date()}], 
            room2: [{author: "", message: "", date: new Date()}], 
            room3: [{author: "", message: "", date: new Date()}] 
        }
           
    }
  render(){
    return (
      <div>
        
      </div>
    )
  }
}

export default MessageProvider;