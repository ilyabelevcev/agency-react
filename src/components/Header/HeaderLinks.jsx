import React from 'react';
import { NavLink } from 'react-router-dom'

const HeaderLinks = (props) => {
    return (
        <ul className='header__nav-list'>
            {props.links.map((link) => 
                <li className="header__list-item" key={link.id}>
                    <NavLink className='header__item-link' to={link.href}>{link.value}</NavLink>
                </li>
            )}
        </ul>
    );
}

export default HeaderLinks;
