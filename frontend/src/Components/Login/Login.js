import React from 'react';
import {signInWithGoogle, auth} from '../Firebase/Firebase'
import './login.scss'

const Login = () => {


    return <div className="login-container">
        <button onClick={signInWithGoogle}>LOGIN WITH GOOGLE</button>
        <button onClick={()=> auth.signOut()}>SIGN OUT!</button>
    </div>

}

export default Login;