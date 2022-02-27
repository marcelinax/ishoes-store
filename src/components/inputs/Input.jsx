import React from 'react';
import PropTypes from 'prop-types';
export const Input = ({ id, icon, placeholder, value, setValue }) => {
    
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='border-2 border-zinc-200 p-3 bg-white flex justify-between items-center'>
            <input id={id} value={value} placeholder={placeholder} onChange={handleInput} className='outline-none text-zinc-300 placeholder:text-zinc-300 w-full pr-2'/>
            {icon}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};