import React, { useState } from 'react';

import Slider from '@material-ui/core/Slider';

export const FilterItemPrice = () => {

    const [value, setValue] = useState([2, 10]);

    
    return (
        <div className='w-full flex flex-col'>
            <Slider
                value={value}
                onChange={(e,newValue)=> { setValue(newValue);}}
                valueLabelDisplay="auto"
                style={{ color: 'black' }}
                rail={'p-2'}
                size='medium'
            />
            <div className='w-full flex justify-between'>
                <p className='font-semibold text-sm'>${value[0]}</p>
                <p className='font-semibold text-sm'>${value[1]}</p>
            </div>
        </div>
    );
};