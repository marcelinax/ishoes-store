import React from 'react';
import { ShoeProductBgBox } from '../components/shoe product/ShoeProductBgBox';
import { ShoeProductInfoBox } from '../components/shoe product/ShoeProductInfoBox';

export const ShoeProduct = () => {
    return (
        <div className='w-full h-full flex'>
            <ShoeProductBgBox/>
            <ShoeProductInfoBox />
        </div>
        
    );
};
