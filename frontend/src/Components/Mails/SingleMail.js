import React from 'react';

const SingleMail = ({singleMail, showPost}) => {
    
    console.log(singleMail);
    console.log(showPost);

    const filterHandler = () => {

        const filter = showPost.filter((a)=>(a._id === singleMail))

        return <div><h1>{filter[0].subject}</h1>
        <p>{filter[0].content}</p></div> 

    }
    

    return <> {singleMail ? filterHandler() : ''} </>
        
    
    
}

export default SingleMail
