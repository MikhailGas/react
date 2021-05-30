import { Grid, Input, InputAdornment, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react';
import Message from '../message/Message';
import styles from './message-field.module.css'

const StyledInput = withStyles(() => ({
    root:{
        "&":{
            color:"#A67145",
            padding: "10px 15px",
            fontSize: "15px",
        }
    }
}))(Input)
class MessageField extends React.Component {
    state = {
        messages: [],
        value: "",
    }

    
    handleClick = ({author, value}) => {
        this.setState({messages: [...this.state.messages, {text: value, author: author, date: new Date()}],
                        value: ""})
    }

    handleChangeInput = ({ target }) => {
        this.setState({
            value: target.value,
        })
    }

    handlePressEnter = ({code}) => {
        if (code === "Enter"){
            this.handleClick({author: "Пользователь", value: this.state.value})
        }
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
        <Grid item container alignItems="flex-end">
            <Grid item container alignItems="flex-end" xs={12} className={styles.messlist}>
                {messages}
            </Grid>
            
            <Grid item xs={12}>
                
                <StyledInput 
                    onKeyPress={ this.handlePressEnter }
                    onChange={ this.handleChangeInput }
                    value={this.state.value} placeholder="Введите сообщение" fullWidth={true} endAdornment={
                    <InputAdornment>
                        {this.state.value && (
                        <Send 
                            position="end" 
                            className={styles.icon} 
                            onClick = {() => this.handleClick({author: "Пользователь", value: this.state.value})}/>)}
                    </InputAdornment>} />
            </Grid>
            
            
        </Grid>
        )
    }
    }

export default MessageField;