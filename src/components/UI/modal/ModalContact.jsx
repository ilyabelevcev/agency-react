import React from 'react';
import './Modal.sass'

const ModalContact = (props) => {
    return (
        <div className='modal__content-contact'>
            <h2 className="modal__content-title">{props.title}</h2>
            <ul className='modal__contact-list'>
                <li className='modal__contact-item'>
                    <a
                        target='_blank'
                        title='My LinkedIn'
                        href="https://www.linkedin.com/in/ilyabelevcev/" 
                        className="modal__contact-link" rel="noreferrer"
                    >LinkedIn</a>
                </li>
                <li className='modal__contact-item'>
                    <a 
                        target='_blank'
                        title='My GitHub'
                        href="https://github.com/ilyabelevcev" 
                        className="modal__contact-link" rel="noreferrer"
                    >GitHub</a>
                </li>
                <li className='modal__contact-item'>
                    <a 
                        target='_blank'
                        title='My Telegram'
                        href="https://t.me/ilyabelevcev" 
                        className="modal__contact-link" rel="noreferrer"
                    >Telegram</a>
                </li>
                <li className='modal__contact-item'>
                    <a
                        target='_blank'
                        title='Not mine Instagram'
                        href="https://www.instagram.com/" 
                        className="modal__contact-link" rel="noreferrer"
                    >Instagram</a>
                </li>
                <li className='modal__contact-item'>
                    <a 
                        target='_blank'
                        title='Not mine Facebook'
                        href="https://facebook.com/" 
                        className="modal__contact-link" rel="noreferrer"
                    >Facebook</a>
                </li>
            </ul>
            <p className="modal__content-legal">
                &#169; Developed by <a href="https://ilyabelevcev.com/" target='_blank' rel="noreferrer">ILYABELEVCEV</a> 2023
            </p>
        </div>
    );
}

export default ModalContact;
