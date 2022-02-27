import locales from '@constants/locales';
import PropTypes from 'prop-types';
import React from 'react';

export const FilterBoxLabel = ({title, onClick}) => {
    return (
        <div className='w-fit py-1 px-2 rounded-md flex border border-zinc-400 m-1.5 ml-0'>
            <p className='text-sm font-semibold'>{title}</p>
            <span className='text-red-600 font-bold text-xs relative -top-1 ml-1 cursor-pointer' onClick={onClick}>{locales.X}</span>
        </div>
    );
};

FilterBoxLabel.propTypes = {
    title: PropTypes.string
};