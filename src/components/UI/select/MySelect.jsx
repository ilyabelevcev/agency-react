import React from 'react';

const MySelect = ({options, value, onChange}) => {
    return (
        <select 
            className='portfolio__select'
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {options.map((option ,index) =>
                <option key={index} value={option.value}>
                    {option.value}
                </option>
            )}
        </select>
    );
}

export default MySelect;
