import React from 'react';


class Message extends React.Component {
  

  render(){
    
    return (
      <div>
        <i>{this.props.author}</i>: <b>{this.props.text}</b>
      </div>
    )
  }
}

export default Message;