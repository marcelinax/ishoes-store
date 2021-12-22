import React from 'react';

export const Search = ({isShown}) => {
    return (
        <div className={`mr-5 bg-transparent transition-all ${isShown ? 'search w-2/4' : 'search-hidden w-0 opacity-0' }`}>
            <div className='border-b w-full  border-black '>
                <input placeholder='Search...' className='w-full outline-none pb-1 px-1 text-sm font-medium text-gray-400'/>
            </div>
        </div>
    );
};
