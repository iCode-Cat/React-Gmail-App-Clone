import React from 'react';
import './Header.scss';

const Header = () => {


    return<header>


        <div className="navbar">
            <div className="hamburger-icon"><i class="fas fa-bars"></i></div>
            <div className="logo"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt=""/></div>
            <div className="search-input"><input type="text"/></div>
            <div className="settings">
            <i class="far fa-question-circle"></i>
            <i class="fas fa-cog"></i>
            <i class="fas fa-grip-horizontal"></i>
            <i class="fas fa-user-circle"></i>
            </div>
            <div className="profile"></div>
        </div>



    </header>

}

export default Header;