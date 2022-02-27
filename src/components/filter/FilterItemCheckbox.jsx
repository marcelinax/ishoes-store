import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import React from 'react';

export const FilterItemCheckbox = ({title, value, onChange}) => {
    return (
        <div className='flex items-center mb-2 group'>
            <div className='border-2 border-zinc-300 rounded-md flex items-center justify-center w-5 h-5 mr-2 cursor-pointer' onClick={onChange}>
                {value && <BiX />}
            </div>
            <p className='text-sm font-medium group-hover:font-semibold transition-all'>{title}</p>
        </div>
    );
};

FilterItemCheckbox.propTypes = {
    title: PropTypes.string.isRequired
};
