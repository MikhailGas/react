import React from 'react';

const Field = (props) => {
    
    const onChange = (e) => {
        
        props.getMessage(e.target.value)
    }
  return (
      <div>
        <input onChange={onChange} type="text" placeholder="Введите сообщение" />
        
      </div>
    
  )
}

export default Field;

