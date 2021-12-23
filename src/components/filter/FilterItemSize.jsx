import PropTypes from 'prop-types';
import React from 'react';

export const FilterItemSize = ({size}) => {
    return (
        <div className='group border shadow-xl bg-white border-zinc-300 cursor-pointer rounded-md flex items-center justify-center w-10 h-10 mx-1 mb-3 hover:scale-95 transition-all hover:bg-black '>
            <p className='text-sm font-semibold group-hover:text-white'>{size}</p>
        </div>
    );
};

FilterItemSize.propTypes = {
    size: PropTypes.number
};