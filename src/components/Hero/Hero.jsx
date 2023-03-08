import React from 'react';
import './Hero.sass'

const Hero = (props) => {
    return (
        <section className='hero'>
            <div className='container hero__container'>
                <h2 className="hero__title">{props.title}</h2>
                <p className="hero__descr">{props.descr}</p>
            </div>
        </section>
    );
}

export default Hero;
