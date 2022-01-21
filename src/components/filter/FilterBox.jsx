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
import { useRefreshShoeProducts } from './../../hooks/useRefreshShoeProducts';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FilterBox = () => {


    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands.brands);
    const shoeProducts = useSelector(state => { return state.shoeProducts.shoeProducts; });
    const [maxPrice, setMaxPrice] = useState(0); 
    const [filterLabels, setFilterLabels] = useState([]);
    const [value, setValue] = useState([0, maxPrice]);
    const { refresh: refreshShoes } = useRefreshShoeProducts();
    const [filterData, setFilterData] = useState({
        types: [],
        brands: [],
        genders: [],
        minPrice: 0,
        maxPrice: 0,
        sizes: [],
        colors: []
    });
    
    useEffect(() => {
        refreshShoes({
            ...filterData
        });
    }, [filterData]);
   
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

    const getBrandNameById = (id) => {
        if (brands) {
            return brands.filter(brand => brand._id === id)[0].name;
        }
    };


    const addFilterLabel = (item, items) => {
        setFilterLabels([...filterLabels, { item, items }]);
    };

    const removeFilterLabel = (item, items) => {
        const itemToRemove = filterLabels.filter(label => label.items === items && label.item === item)[0];
        filterLabels.splice(filterLabels.indexOf(itemToRemove),1);
        setFilterLabels([...filterLabels]);
    };


    const onFilterItemChange = (item, items) => {

        if (!filterData[items].includes(item)) {
            setFilterData({
                ...filterData,
                [items]: [...filterData[items], item]
            });
            addFilterLabel(item, items);
        }
        else {
            filterData[items].splice(filterData[items].indexOf(item), 1);
            setFilterData({
                ...filterData,
                [items]: [...filterData[items]]
            });
            removeFilterLabel(item, items);
        }
        
    };

    const clearAllFilters = () => {
        setFilterData({
            types: [],
            brands: [],
            genders: [],
            minPrice: 0,
            maxPrice: 0,
            sizes: [],
            colors: []
        });
        setFilterLabels([]);
    };
    

    const renderGenderCheckboxes = () => {
        return GENDER.gender.map(gender => {return (
            <FilterItemCheckbox key={gender} title={gender} onChange={() => onFilterItemChange(gender, 'genders')} value={filterData.genders.includes(gender)}/>
        );});
    };

    const renderColors = () => {
        return COLORS.colors.map(color => {
            return (
                <FilterItemBoxColor key={color.title} color={color.color} title={color.title} onChange={() => onFilterItemChange(color.title, 'colors')} value={filterData.colors.includes(color.title)}/>
            );});
    };

    const renderSizes = () => {
        return SIZES.sizes.map(size => {
            return (
                <SizeItem key={size} size={size} onChange={() => onFilterItemChange(size, 'sizes')} value={filterData.sizes.includes(size)}/>
            );});
    };

    const renderTypes = () => {
        return TYPES.types.map(type => {return (
            <FilterItemCheckbox key={type} title={type} onChange={() => onFilterItemChange(type, 'types')} value={filterData.types.includes(type)}/>
        );});
    };

    const renderBrands = () => {
        if(brands)
            return brands.map(brand => {return (
                <FilterItemCheckbox key={brand._id} title={brand.name} onChange={() => onFilterItemChange(brand._id, 'brands' )} value={filterData.brands.includes(brand._id)}/>
            );});
    };

    const renderFilterBoxLabels = () => {
        if (filterLabels) {
            return filterLabels.map(label => (
                <FilterBoxLabel title={label.items === 'brands' ? getBrandNameById(label.item) : label.item} key={label.item} onClick={() => onFilterItemChange(label.item, label.items )}/>
            ));
        }
    };

 
  
    return (
        <div className='max-w-[16.666667%] min-w-[16.666667%] mr-20'>
            <div className='py-4'>
                <div className='px-3 flex w-full justify-between'>
                    <p className='font-bold'>FILTER</p>
                    <p className='text-red-500 font-semibold text-sm cursor-pointer transition-all hover:scale-95' onClick={clearAllFilters}>Clear All</p>
                </div>
            </div>
            <div className='py-4 mb-5'>
                <div className='full'>
                    <div className='px-3 flex flex-wrap'>
                        {renderFilterBoxLabels()}
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
                <FilterItemPrice maxPrice={maxPrice} value={value} />
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
