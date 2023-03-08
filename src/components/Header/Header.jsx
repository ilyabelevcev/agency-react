import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import './Header.sass'
import HeaderBurger from './HeaderBurger';
import HeaderLogo from './HeaderLogo';

const Header = ({setActiveModal}) => {
    const links = [
        {id: 0, value: 'Home', href: '/'},
        {id: 1, value: 'Portfolio', href: '/portfolio'},
        {id: 2, value: 'Blog', href: '/blog'},
    ]
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className='header'>
            <div className="container header__container">
                <HeaderLogo 
                    title="Agency"
                />
                <HeaderNav 
                    links={links}
                    className={openMenu ? 'active header__nav' :  'header__nav'}
                    onClick={() => setOpenMenu(false)}
                    setActiveModal={setActiveModal}
                />
                <HeaderBurger
                    onClick={() => setOpenMenu(!openMenu)}
                    className={openMenu ? 'active header__burger' :  'header__burger'}
                />
            </div>
        </header>
    );
}

export default Header;
