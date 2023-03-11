import React, {useState} from 'react';

const WorksItem = ({work, onClick}) => {
    const [activeWork, setActiveWork] = useState(false);

    const toogleActive = () => {
        setActiveWork(!activeWork)
    }

    if(work.visible) {
        return (
            <li onClick={toogleActive} className={activeWork ? 'active portfolio__list-item' : 'portfolio__list-item'}>
                <div className="portfolio__item-info" onClick={(e) => e.stopPropagation()}>
                    <button 
                        onClick={event => onClick(event.target.value)} 
                        className='portfolio__info-category'
                        value={work.category}
                    >
                        {work.category}
                    </button>
                    <div className='portfolio__info-title'>{work.title}</div>
                </div>
                <img className='portfolio__item-img' src={work.imageURL} alt={work.title} />
            </li>
        );
    }
}


export default WorksItem;
