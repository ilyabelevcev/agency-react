import React from 'react';
import Hero from '../components/Hero/Hero';
import Functional from '../components/Functional/Functional';

import '../components/Functional/Functional.sass'

const Home = () => {
    return (
        <main>
            <Hero
                title='Agancy' 
                descr=''/>
            <section className='home'>
                <div className="container home__container">
                    <h2 className='home__heading'>Функционал</h2>
                    <p className="home__descr">Ниже я описал функционал данного приложения</p>
                    <Functional/>
                </div>
            </section>
        </main>
    );
}

export default Home;
