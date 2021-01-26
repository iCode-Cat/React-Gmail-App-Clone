import React from 'react';
import './Header.scss';

const Header = () => {


    return<header>


        <div className="navbar border-bt">
            <div className="hamburger-icon hover"><i class="fas fa-bars"></i></div>
            <div className="logo"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/></div>
            <div className="search-input"><input placeholder='Search mail' type="text"/></div>
            <div className="settings">
            <i class="far fa-question-circle hover"></i>
            <i class="fas fa-cog hover"></i>
            <i class="fas fa-grip-horizontal hover"></i>
            <i class="fas fa-user-circle hover"></i>
            </div>
            <div className="profile hover"></div>
        </div>



    </header>

}

export default Header;