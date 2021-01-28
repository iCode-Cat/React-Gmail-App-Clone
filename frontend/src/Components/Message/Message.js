import React,{useState, useRef} from 'react';
import './message.scss'

const Message = ({loop , mail ,setMail}) => {

    let receiver = useRef(null)
    let subject = useRef(null)
    let content = useRef(null)

    console.log(loop);
    console.log(mail);

    const submitHandler = (e) => {
        receiver.current.focus()
        subject.current.focus()
        content.current.focus()

        const {name, value} = e.target;
        setMail((prevStyle) => ({
            ...prevStyle,
            receiver:receiver.current.value, subject:subject.current.value , content:content.current.value, date:Date(), sender:'test@gmail.com', status:'inbox', visited:'none'
        }))

    }
    

    return <div className="message-container">
        
        {loop.map((a, index)=>{ return <div className="message-card">
            <header>
                <p>New Message</p>
                
                <div className="card-icons">
                <i class="fas fa-times"></i>
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