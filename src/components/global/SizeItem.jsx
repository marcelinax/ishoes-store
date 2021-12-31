import PropTypes from 'prop-types';
import React from 'react';

export const SizeItem = ({size, className}) => {
    return (
        <div className={`group border shadow-xl bg-white border-zinc-300 cursor-pointer rounded-md flex items-center justify-center w-10 h-10 mx-1 mb-3 hover:scale-95 transition-all hover:bg-black ${className}`}>
            <p className='text-sm font-semibold group-hover:text-white'>{size}</p>
        </div>
    );
};

SizeItem.propTypes = {
    size: PropTypes.number.isRequired,
    className: PropTypes.string
};