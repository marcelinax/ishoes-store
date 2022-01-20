import { COLORS, GENDER, SIZES } from '../../Constants';

import { FilterBoxLabel } from './FilterBoxLabel';
import { FilterItemBox } from './FilterItemBox';
import { FilterItemBoxColor } from './FilterItemBoxColor';
import { FilterItemCheckbox } from './FilterItemCheckbox';
import { FilterItemPrice } from './FilterItemPrice';
import React from 'react';
import { SizeItem } from './../global/SizeItem';
import { TYPES } from './../../Constants';
import axios from 'axios';
import { calcShoeProductPrice } from './../../utils/calcShoeProductPrice';
import { config } from './../../config/Config';
import { setBrands } from '../../state/brandsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FilterBox = () => {


    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands.brands);
    const shoeProducts = useSelector(state => { return state.shoeProducts.shoeProducts; });
    const [maxPrice, setMaxPrice] = useState(0); 

    useEffect(() => {
        fetchBrands();   
        getMaxPrice();
    }, []);

    useEffect(() => {
        getMaxPrice();
    }, [shoeProducts]);
  
    
    const getMaxPrice = () => {
        if (shoeProducts) {
            setMaxPrice(
                Math.max(...shoeProducts.searchingShoeProducts.map(shoeProduct => calcShoeProductPrice(shoeProduct)))
            );}
    };

    const fetchBrands = async () => {
        await axios.post(config.apiUrl + 'brands/search').then(res => {
            dispatch(setBrands(res.data));
        });
    };

    const renderGenderCheckboxes = () => {
        return GENDER.gender.map(gender => {return (
            <FilterItemCheckbox key={gender} title={gender}/>
        );});
    };

    const renderColors = () => {
        return COLORS.colors.map(color => {
            return (
                <FilterItemBoxColor key={color.title} color={color.color} title={color.title}/>
            );});
    };

    const renderSizes = () => {
        return SIZES.sizes.map(size => {return (
            <SizeItem key={size} size={size}/>
        );});
    };

    const renderTypes = () => {
        return TYPES.types.map(type => {return (
            <FilterItemCheckbox key={type} title={type}/>
        );});
    };

    const renderBrands = () => {
        if(brands)
            return brands.map(brand => {return (
                <FilterItemCheckbox key={brand._id} title={brand.name}/>
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
            <FilterItemBox title='Gender' >
                {renderGenderCheckboxes()}
            </FilterItemBox>
            <FilterItemBox title='Price' >
                <FilterItemPrice maxPrice={maxPrice}/>
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
