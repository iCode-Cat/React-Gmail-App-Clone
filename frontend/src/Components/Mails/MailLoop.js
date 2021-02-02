import React from 'react';
import { Link } from 'react-router-dom';
import Mails from './Mails'

const MailLoop = ({showPost,mail,setSingleMail,}) => {


    console.log(showPost);
    
    return <div>
    {showPost ? showPost.map((post)=>(<Link  onClick={()=>setSingleMail(post._id)} to={`/${post._id}`}><Mails post={post} mail={mail}/></Link>)):''}
    </div>
    


}

export default MailLoop;