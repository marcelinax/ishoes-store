import { DefaultLayout } from '../layouts/DefaultLayout';
import { FilterBox } from './../components/filter/FilterBox';
import React from 'react';

export const Homepage = () => {
    return (
        <>
            <DefaultLayout />
            <div className='container mx-auto flex mt-36'>
                <FilterBox/>
            </div>
        </>
    );
};
