import React,{useState, useRef} from 'react';
import axios from 'axios';
import './message.scss'

const Message = ({loop,setLoop , mail ,setMail}) => {

    let receiver = useRef(null)
    let subject = useRef(null)
    let content = useRef(null)


    const submitHandler = async (e) => {
        receiver.current.focus()
        subject.current.focus()
        content.current.focus()
        setMail((prevStyle) => ({
            ...prevStyle,
            receiver:receiver.current.value, subject:subject.current.value , content:content.current.value, date:Date(), sender:'test@gmail.com', status:'inbox', visited:'none'
        }))

 
    }


    //Close popup handler
    const popupHandler = (id) => {

        
        const newPopup = loop.filter((loop)=> loop !== id);
        setLoop(newPopup)

    }
    

    return <div className="message-container">
        
        {loop.map((a, index)=>{ return <div className="message-card">
            
            <header>
                <p>New Message</p>
                <div className="card-icons">
                <i className="fas fa-times" onClick={()=>{popupHandler(index)}}></i>
                </div>
            </header>
            <section className="message-send">
                <input ref={receiver} type="text" placeholder='To' className="send-to border-bt"/>
                <input ref={subject} type="text" placeholder='Subject' className="send-subject border-bt"/>
                <textarea ref={content} placeholder='' name="" id="" cols="60" rows="15" className='send-message border border-bt'></textarea>
            </section>
            <footer>
                <button className="submit" onClick={submitHandler}>Send</button>
            </footer>
        </div>
})}
        
    </div>

}

export default Message;