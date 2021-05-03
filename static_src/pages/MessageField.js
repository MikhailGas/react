import React from 'react';
import Button from '../components/Button';
import Field from '../components/Field';
import Messages from '../components/Messages';

class MessageField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: ['Привет', 'Как дела?'],
      message:'5'
    }
    
  }

  addMess() {
      
      this.setState({messages: [... this.state.messages, this.state.message]})
      
  }
  getMessage = (message) => {
    this.setState({message: message}) 
  }

  render(){
    return (
      <div>
        <Messages messages={this.state.messages}/>
        <Field getMessage={this.getMessage} />
        <Button addMess={() => this.addMess()}/>
      </div>
    )
  }
}

export default MessageField;