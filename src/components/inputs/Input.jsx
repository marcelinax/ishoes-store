import React from 'react';

export const Input = ({ icon, placeholder, value, setValue }) => {
    
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='border-2 border-zinc-200 p-3 bg-white flex justify-between items-center'>
            <input placeholder={placeholder} onChange={handleInput} className='outline-none text-zinc-300 placeholder:text-zinc-300 w-full pr-2'/>
            {icon}
        </div>
    );
};
