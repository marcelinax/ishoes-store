import PropTypes from 'prop-types';
import React from 'react';

export const ColorItem = ({className, color}) => {
    return (
        <div className={`rounded-[50%] shadow-md border border-zinc-200 m-1 ${className} ${color}`} />
    );
};

ColorItem.propsTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};
