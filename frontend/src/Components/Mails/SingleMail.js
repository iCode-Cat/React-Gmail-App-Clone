import React from 'react';
import './mails.scss'
const SingleMail = ({singleMail, showPost}) => {

    const filterHandler = () => {

        const filter = showPost.filter((a)=>(a._id === singleMail))

        return <div className='single-mail-container'><h1>{filter[0].subject}</h1>
        <p>{filter[0].content}</p></div> 

    }
    

    return <> {singleMail ? filterHandler() : ''} </>
        
    
    
}

export default SingleMail
