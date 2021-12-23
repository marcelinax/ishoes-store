import PropTypes from 'prop-types';
import React from 'react';

export const FilterItemBoxColor = ({color,title}) => {
    return (
        <div className='flex flex-col mb-3 mr-3 items-center max-w-[46px] min-w-[46px]'>
            <div className={`rounded-[50%] shadow-md cursor-pointer w-10 h-10 ${color} hover:scale-95 transition-all`}/>
            <p className='text-xs mt-1 font-medium'>{title}</p>
        </div>
    );
};

FilterItemBoxColor.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
};
