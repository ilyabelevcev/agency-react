import React from 'react';
import styles from './MyButton.module.sass'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    );
}

export default MyButton;
