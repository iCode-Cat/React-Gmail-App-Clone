import React,{useState} from 'react';
import './message.scss'

const Message = ({loop}) => {

    
  

    

    console.log(loop);
    

    return <div className="message-container">
        
        {loop.map((a, index)=>{ return <h1 key={index}>HELLO</h1>})}

    </div>

}

export default Message;