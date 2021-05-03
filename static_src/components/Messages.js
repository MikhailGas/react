import React from 'react';
import MessageItem from './MessageItem';

class Messages extends React.Component {
    

    render(){
        
        return (
        <div>
            {this.props.messages.map((message, index) => <MessageItem key={index} text={ message } />)}
        </div>
        )
    }
    }

export default Messages;