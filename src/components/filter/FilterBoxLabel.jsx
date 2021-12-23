import PropTypes from 'prop-types';
import React from 'react';

export const FilterBoxLabel = ({ title}) => {
    return (
        <div className='w-fit py-1 px-2 rounded-md flex border border-zinc-400 mr-2'>
            <p className='text-sm font-semibold'>{title}</p>
            <span className='text-red-600 font-bold text-xs relative -top-1 ml-1 cursor-pointer'>x</span>
        </div>
    );
};

FilterBoxLabel.propTypes = {
    title: PropTypes.string
};