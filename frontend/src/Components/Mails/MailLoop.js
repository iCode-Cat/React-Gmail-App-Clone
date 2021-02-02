import React from 'react';
import { Link } from 'react-router-dom';
import Mails from './Mails'

const MailLoop = ({showPost,mail}) => {


    console.log(showPost);
    
    return <div>
    {showPost ? showPost.map((post)=>(<Link to='/mail'><Mails post={post} mail={mail}/></Link>)):''}
    </div>
    


}

export default MailLoop;