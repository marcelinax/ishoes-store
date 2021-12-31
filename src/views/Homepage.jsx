import { DefaultLayout } from '../layouts/DefaultLayout';
import { FilterBox } from './../components/filter/FilterBox';
import React from 'react';
import { ShoeProductCard } from './../components/ShoeProductCard';

export const Homepage = () => {

  
    return (
        <>
            <DefaultLayout />
            <div className='container mx-auto flex mt-36'>
                <FilterBox />
                <div className='min-w-[83.3333%] max-w-[83.3333%] content-start h-screen mx-auto flex flex-wrap'>
                    <ShoeProductCard/>
                    <ShoeProductCard/>
                    <ShoeProductCard/>
                    <ShoeProductCard/>
                    <ShoeProductCard/>
                    <ShoeProductCard/>
                </div>
            </div>
        </>
    );
};
