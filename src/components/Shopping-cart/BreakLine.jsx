import PropTypes from 'prop-types';
import React from 'react';

export const BreakLine = ({ className }) => {
    return (
        <hr className={`bg-zinc-200  w-full h-[2px]  ${className}`}/>
    );
};

BreakLine.propTypes = {
    className: PropTypes.string
};