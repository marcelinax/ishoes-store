import PropTypes from 'prop-types';
import React from 'react';

export const ShoeProductHeading = ({title, className}) => {
    return (
        <h6 className={`font-semibold text-lg tracking-wide ${className}`}>{title}</h6>
    );
};

ShoeProductHeading.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};