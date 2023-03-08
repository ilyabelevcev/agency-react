import React from 'react';

const HeaderBurger = (props) => {
    return (
        <button {...props}>
            <span className='header__burger-line'></span>
        </button>
    );
}

export default HeaderBurger;
