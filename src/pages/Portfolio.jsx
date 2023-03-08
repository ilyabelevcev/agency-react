import React, { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero/Hero';
import WorksList from '../components/Works/WorksList';
import WorksCategory from '../components/Works/WorksCategory';
import MyButton from '../components/UI/button/MyButton';
import MySelect from '../components/UI/select/MySelect';

import portfolio from '../components/Works/portfolio.js'
import '../components/Works/Works.sass'

function Portfolio() {
    const [works, setWorks] = useState([])
    const [selectedWork, setSelectedWork] = useState('Show All')
    const [categories, setCategories] = useState([
        {value: "Show All", class: 'active'},
        {value: "Design", class: 'no-active'},
        {value: "Branding", class: 'no-active'},
        {value: "Illustartion", class: 'no-active'},
        {value: "Motion", class: 'no-active'},
    ])
    const [amountVisWorks, setAmountVisWorks] = useState(9)
    const [amountUnvisWorks, setAmountUnvisWorks] = useState(0)

    useEffect(() => {
        let visPortfolio = portfolio.slice(0, amountVisWorks)
        visPortfolio.forEach(el => el.visible = true)

        let differenceLength = portfolio.length - visPortfolio.length
        setWorks(visPortfolio)
        setAmountUnvisWorks(differenceLength)

    }, [setWorks, amountVisWorks]);

    const sortedWorks = useMemo(() => {
        if(selectedWork) {
            if(selectedWork !== 'Show All') {
                return works.filter(work => work.category === selectedWork)
            } 
            return works
        }
        return works
    }, [selectedWork, works])

    const addClassActive = (sort) => {
        [...categories].map(category => 
            category.value === sort ? category.class = 'active' : category.class = 'no-active'
        )
        return categories
    }

    const sortWorks = (sort) => {
        setSelectedWork(sort)
        setCategories(addClassActive(sort))
    }

    const addVisibleWorks = (e) => {
        if(portfolio.length === sortedWorks.length) {
            e.target.disabled = true
        } else {
            setAmountVisWorks(amountVisWorks + amountUnvisWorks)
        }
    }

    return (
        <main>
            <Hero 
                title='Portfolio' 
                descr='Agency provides a full service range including technical skills, design, business understanding.'
            />
            <section className='portfolio'>
                <div className='container portfolio__container'>
                    <WorksCategory 
                        onClick={sortWorks}
                        buttons={categories}
                    />
                    <MySelect
                        value={selectedWork}
                        onChange={sortWorks}
                        options={categories}
                    />
                    <WorksList 
                        works={sortedWorks}
                        addVisibleWorks={addVisibleWorks}
                        onClick={sortWorks}
                    />
                    {selectedWork === 'Show All' &&
                        <MyButton 
                            style={{color: "#333", borderColor: "currnetColor", marginTop: '50px'}}
                            disabled={portfolio.length === sortedWorks.length || !works.length} 
                            onClick={addVisibleWorks} 
                        >
                            Load More
                        </MyButton>
                    }
                </div>
            </section>
        </main>
    );
}

export default Portfolio;