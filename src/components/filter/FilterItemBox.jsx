import React, { useState } from 'react';

import { BiChevronDown } from 'react-icons/bi';
import PropTypes from 'prop-types';

export const FilterItemBox = ({ title, children }) => {
    
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <div className='w-full'>
            <div className='flex flex-col px-3 mb-5'>
                <div className='w-full flex justify-between '>
                    <p className='font-semibold mb-3'>{title.toUpperCase()}</p>
                    <BiChevronDown size={22} className='cursor-pointer' onClick={()=> {return setToggleShow(!toggleShow);}}/>
                </div>
                {toggleShow && children}
            </div>
        </div>
    );
};

FilterItemBox.propTypes = {
    title: PropTypes.string
};