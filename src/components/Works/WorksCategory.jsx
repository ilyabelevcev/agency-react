import React from 'react';

const WorksCategory = ({buttons, onClick}) => {

    return (
        <div className='portfolio__categories'>
            {buttons.map((button, index) =>
                <button
                    onClick={event => onClick(event.target.value)}
                    key={index} 
                    value={button.value}
                    className={`${button.class} portfolio__categories-btn`}
                >
                    {button.value}
                </button>
            )}
        </div>
    );
}

export default WorksCategory;