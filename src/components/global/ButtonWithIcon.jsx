import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

export const ButtonWithIcon = ({ icon, className, onClick, isLink = false, to }) => {
    
    const wrapper = (children) => {
        if (isLink) {
            return (<Link to={`${to}`}>{ children }</Link>);
        } else {
            return children;
        }
    };

    return wrapper(
        <div className={`cursor-pointer ${className}`} onClick={onClick}>
            {icon}
        </div>
    );
};

ButtonWithIcon.propTypes = {
    isLink: PropTypes.bool,
    to: PropTypes.string
};