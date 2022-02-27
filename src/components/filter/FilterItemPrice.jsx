import React, { useEffect } from 'react';

import Slider from '@material-ui/core/Slider';

export const FilterItemPrice = ({maxPrice, value, setValue, filterData, setFilterData, onFilterItemChange}) => {

    useEffect(() => {
        value[1] = maxPrice;
    },[]);

    useEffect(() => {
        setFilterData({
            ...filterData,
            maxPrice: value[1],
            minPrice: value[0]
        });
    }, [value ]);
    
    return (
        <div className='w-full flex flex-col'>
            <Slider
                value={value}
                onChange={(e,newValue)=> { setValue(newValue);}}
                valueLabelDisplay="auto"
                style={{ color: 'black' }}
                rail={'p-2'}
                size='medium'
                max={maxPrice}
                min={0}
            />
            <div className='w-full flex justify-between'>
                <p className='font-semibold text-sm'>${value[0]}</p>
                <p className='font-semibold text-sm'>${value[1]}</p>
            </div>
        </div>
    );
};
