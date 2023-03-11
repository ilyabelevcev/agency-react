import React from 'react';
import HeaderLinks from './HeaderLinks';
import MyButton from '../UI/button/MyButton';

const HeaderNav = ({onClick, setActiveModal, ...props}) => {
    return (
        <nav onClick={onClick} className={props.className}>
            <HeaderLinks links={props.links}/>
            <MyButton button='light' onClick={() => setActiveModal(true)}>Contact</MyButton>
        </nav>
    );
}

export default HeaderNav;
