import React from 'react';
import logo from '../../assets/img/logo.svg'

const HeaderLogo = (props) => {
    return (
        <div className="header__logo">
            <img className='header__logo-icon' src={logo} alt="Agency" />
            <span className='header__logo-name'>{props.title}</span>
        </div>
    );
}

export default HeaderLogo;
