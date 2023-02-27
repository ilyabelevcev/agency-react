import React, { useEffect, useState } from 'react';
import './App.sass'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import portfolio from './components/Works/portfolio.json'

function App() {
    const [works, setWorks] = useState([])
    useEffect(() => {
        setWorks(portfolio.works)
    }, [setWorks]);
    console.log(works)
    return (
        <div className='site-container'>
            <Header/>
            <div>
                {works.map((work) => 
                    <div key={work.id}>
                        <div>{work.title}</div>
                        <img style={{maxWidth: '100px'}} src={work.image} alt={work.id} />
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
