import React from 'react'
import Messages from './Messages'


const Button = (props) =>  <button onClick={() => props.addMess()}>Отправить</button>

export default Button