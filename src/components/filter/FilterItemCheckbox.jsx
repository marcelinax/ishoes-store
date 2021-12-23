import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import React from 'react';

export const FilterItemCheckbox = ({title}) => {
    return (
        <div className='flex items-center mb-2'>
            <div className='group border-2 border-zinc-300 rounded-md flex items-center justify-center w-5 h-5 mr-2 cursor-pointer hover:bg-black hover:border-0 transition-all'>
                <BiX className='group-hover:fill-white' />
            </div>
            <p className='text-sm font-medium '>{title}</p>
        </div>
    );
};

FilterItemCheckbox.propTypes = {
    title: PropTypes.string
};
