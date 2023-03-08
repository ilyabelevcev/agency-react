import React from 'react';
import './Footer.sass'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__container'>
                &#169; Developed by <a href="https://ilyabelevcev.com/" target='_blank' className="footer__link" rel="noreferrer">ILYABELEVCEV</a> 2023
            </div>
        </footer>
    );
}

export default Footer;
