import React from 'react';
import WorksItem from './WorksItem';

const WorksList = (props) => {


    return (
        <ul className='portfolio__list'>
            {props.works.map((work) => 
                <WorksItem
                    {...props}
                    key={work.id}
                    work={work}
                />
            )}
        </ul>
    );
}

export default WorksList;
