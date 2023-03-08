import React from 'react';
import './Modal.sass'

const Modal = ({children, activeModal, setActiveModal}) => {
    return (
        <div onClick={() => setActiveModal(false)} className={activeModal ? 'active modal' : 'modal'}>
            <div onClick={e => e.stopPropagation()} className="modal__content">
                {children}
            </div>
        </div>
    );
}

export default Modal;
