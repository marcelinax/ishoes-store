import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import buttonTypes from '@constants/buttonTypes';

export const Button = ({ title, type, icon, className, onClick, isLink = false, linkTo, backgroundColor }) => {
    const wrapper = (children) => {
        if (isLink) {
            return (<Link to={`${linkTo}`}>{children}</Link>);
        } else {
            return children;
        }
    };

    const drawIconButton = () => {
        return (
            wrapper(
                <button className={`cursor-pointer ${backgroundColor} ${className}`} onClick={onClick}>
                    {icon}
                </button>
            )
        );
    };

    const drawTextButton = () => {
        return (
            wrapper(
                <button className={`w-full py-5 text-white tracking-wider hover:scale-95 transition-all ${backgroundColor} ${className}`} onClick={onClick}>
                    {title}
                </button>
            )
        );
    };

    const drawButtonByType = () => {
        switch (type) {
        case buttonTypes.TEXT_BUTTON:
            return drawTextButton();
        case buttonTypes.ICON_BUTTON:
            return drawIconButton();
        default:
            return drawTextButton();
        }
    };

    return drawButtonByType();
};

Button.proptTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    isLink: PropTypes.bool,
    linkTo: PropTypes.string,
    backgroundColor: PropTypes.string,
};