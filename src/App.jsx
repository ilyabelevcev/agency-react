import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer'
import Modal from './components/UI/modal/Modal';
import ModalContact from './components/UI/modal/ModalContact';

const App = () => {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='site-container'>
            <Header activeModal={activeModal} setActiveModal={setActiveModal}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
            <Footer/>
            <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                <ModalContact title="Contact me"/>
            </Modal>
        </div>
    );
}

export default App;

