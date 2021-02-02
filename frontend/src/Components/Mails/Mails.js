import React from 'react';
import './mails.scss'

const Mails = ({post}) => {


    if(post.content) {
        return <div className="mails-container border-bt hover">
        <div className="sender"><strong>{post.sender}</strong></div>
        <div className="subject">{post.subject}</div>
        <div className="content">{post.content.slice(0,140) + '...'}</div>
    </div>
    } else {
        return ''
    }

}

export default Mails;