import React from 'react';
import Message from './Message';

class MessageField extends React.Component {
    state = {
        messages: []
    }

    handleClick = () => {
        this.setState({messages: [...this.state.messages, {text: 'Привет', author: 'Пользователь'}]})
    }

    componentDidUpdate = () => {
        if(this.state.messages.length % 2 === 1){
            setTimeout(() => {
                this.setState({messages: [...this.state.messages, {text: 'Я робот', author: 'Робот'}]})
            }, 1000);
        }
    }
    render(){
        const messages = this.state.messages.map((mess, index) => (
            <Message key = {index} text = {mess.text} author = {mess.author}/>
        ))
        
        return (
        <div>
            {messages}
            <button onClick = {this.handleClick}>
                Отправить
            </button>
        </div>
        )
    }
    }

export default MessageField;