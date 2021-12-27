import PropTypes from 'prop-types';
import React from 'react';

export const PrimaryButton = ({title, type,className}) => {
    return (
        <button type={type} className={`w-full py-5 text-white tracking-wider bg-black  hover:scale-95 transition-all ${className}`}>
            {title}
        </button>
    );
};

PrimaryButton.proptTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};