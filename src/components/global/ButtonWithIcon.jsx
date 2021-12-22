import React from 'react';

export const ButtonWithIcon = ({icon, className}) => {
    return (
        <div className={`cursor-pointer ${className}`}>
            {icon}
        </div>
    );
};
