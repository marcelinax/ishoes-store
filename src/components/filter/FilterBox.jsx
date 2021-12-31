import Constants from '../../Constants';
import { FilterBoxLabel } from './FilterBoxLabel';
import { FilterItemBox } from './FilterItemBox';
import { FilterItemBoxColor } from './FilterItemBoxColor';
import { FilterItemCheckbox } from './FilterItemCheckbox';
import { FilterItemPrice } from './FilterItemPrice';
import React from 'react';
import { SizeItem } from './../global/SizeItem';

export const FilterBox = () => {

    const renderSexCheckboxes = () => {
        return Constants.sex.map(sex => {return (
            <FilterItemCheckbox key={sex} title={sex}/>
        );});
    };

    const renderColors = () => {
        return Constants.colors.map(color => {
            return (
                <FilterItemBoxColor key={color.title} color={color.color} title={color.title}/>
            );});
    };

    const renderSizes = () => {
        return Constants.sizes.map(size => {return (
            <SizeItem key={size} size={size}/>
        );});
    };

    const renderTypes = () => {
        return Constants.types.map(type => {return (
            <FilterItemCheckbox key={type} title={type}/>
        );});
    };

    const renderBrands = () => {
        return Constants.brands.map(brand => {return (
            <FilterItemCheckbox key={brand} title={brand}/>
        );});
    };

    
  
    return (
        <div className='max-w-[16.666667%] min-w-[16.666667%] mr-20'>
            <div className='py-4'>
                <div className='px-3 flex w-full justify-between'>
                    <p className='font-bold'>FILTER</p>
                    <p className='text-red-500 font-semibold text-sm cursor-pointer'>Clear All</p>
                </div>
            </div>
            <div className='py-4 mb-5'>
                <div className='full'>
                    <div className='px-3 flex flex-wrap'>
                        <FilterBoxLabel title='Men'/>
                        <FilterBoxLabel title='Sneakers'/>
                        <FilterBoxLabel title='44'/>
                    </div>
                </div>
            </div>
            <FilterItemBox title='Types'>
                {renderTypes()}
            </FilterItemBox>
            <FilterItemBox title='Brands'>
                {renderBrands()}
            </FilterItemBox>
            <FilterItemBox title='Sex' >
                {renderSexCheckboxes()}
            </FilterItemBox>
            <FilterItemBox title='Price' >
                <FilterItemPrice/>
            </FilterItemBox>
            <FilterItemBox title='Colors' >
                <div className='w-full flex flex-wrap items-center'>
                    {renderColors()}
                </div>
            </FilterItemBox>
            <FilterItemBox title='Sizes' >
                <div className='w-full flex flex-wrap justify-between'>
                    {renderSizes()}
                </div>
            </FilterItemBox>
            
        </div>
    );
};
