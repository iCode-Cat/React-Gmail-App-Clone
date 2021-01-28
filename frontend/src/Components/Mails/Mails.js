import React from 'react';
import './mails.scss'

const Mails = ({mail}) => {


    if(mail.content) {
        return <div className="mails-container border-bt">
        <div className="sender"><strong>{mail.sender}</strong></div>
        <div className="subject">{mail.subject}</div>
        <div className="content">{mail.content.slice(0,140) + '...'}</div>
    </div>
    } else {
        return ''
    }

}

export default Mails;