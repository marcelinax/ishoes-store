import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

export const NavbarLink = ({title, to, className}) => {
    return (
        <div className='relative px-4 py-2 mx-auto transition-all'>
            <Link to={`/${to}`} className={`navbar-link  font-semibold ${className}`}>
                {title}
            </Link>
        </div>
    );
};

NavbarLink.propTypes = {
    title: PropTypes.string,
    to:PropTypes.string
};