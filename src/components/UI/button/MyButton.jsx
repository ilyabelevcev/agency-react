import React from 'react';
import styles from './MyButton.module.sass'

const MyButton = ({children, ...props}) => {
    return (
        <button className={` ${props.button} ${styles.myBtn}`} {...props}>
            {children}
        </button>
    );
}

export default MyButton;
