import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = ({currentUser}) => {

    if(currentUser){console.log(currentUser.user.photoURL)}

    return<header>


        <div className="navbar border-bt">
            <div className="hamburger-icon hover"><i className="fas fa-bars"></i></div>
            <Link to="/"><div className="logo"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/></div></Link>
            <div className="search-input"><input placeholder='Search mail' type="text"/></div>
            <div className="settings">
            <i className="far fa-question-circle hover"></i>
            <i className="fas fa-cog hover"></i>
            <i className="fas fa-grip-horizontal hover"></i>
            {currentUser ? <div className="pp-holder"><img className='hover' src={currentUser.user.photoURL} alt=""/></div>:<i className="fas fa-user-circle hover"></i> }
            </div>
            <div className="profile hover"></div>
        </div>



    </header>

}

export default Header;