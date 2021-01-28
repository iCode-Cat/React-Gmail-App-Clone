import React,{useState} from 'react';
import './message.scss'

const Message = ({loop}) => {

    console.log(loop);
    

    return <div className="message-container">
        
        {loop.map((a, index)=>{ return <div className="message-card">
            <header>
                <p>New Message</p>
                <div className="card-icons"></div>
            </header>
            <section className="message-send">
                <input type="text" placeholder='To' className="send-to border-bt"/>
                <input type="text" placeholder='Subject' className="send-subject border-bt"/>
                <textarea name="" id="" cols="30" rows="10" className='send-message'></textarea>
            </section>
            <footer>
                <button className="submit">Send</button>
            </footer>
        </div>
})}
        
    </div>

}

export default Message;