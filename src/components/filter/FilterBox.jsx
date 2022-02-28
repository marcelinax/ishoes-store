import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import genderTypes from '@constants/genderTypes';
import colorsTypes from '@constants/colorsTypes';
import sizesTypes from '@constants/sizesTypes';
import shoesTypes from '@constants/shoesTypes';
import locales from '@constants/locales';
import { useRefreshShoeProducts } from '@hooks/useRefreshShoeProducts';
import { calcShoeProductPrice } from '@utils/calcShoeProductPrice';
import { setBrands } from '@state/brands/brandsSlice';
import { FilterItemCheckbox } from '@components/Filter/FilterItemCheckbox';
import { FilterItemBoxColor } from '@components/Filter/FilterItemBoxColor';
import { SizeItem } from '@components/Global/SizeItem';
import { FilterBoxLabel } from '@components/Filter/FilterBoxLabel';
import { FilterItemBox } from '@components/Filter/FilterItemBox';
import { FilterItemPrice } from '@components/Filter/FilterItemPrice';
import { searchShoeProductsService } from '@services/searchShoeProducts.service';
import { getBrandsService } from '@services/getBrands.service';

export const FilterBox = () => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands.brands);
    const [maxPrice, setMaxPrice] = useState(0);
    const [value, setValue] = useState([0, 0]);
    const [filterLabels, setFilterLabels] = useState([]);
    const { refresh: refreshShoes } = useRefreshShoeProducts();
    const [filterData, setFilterData] = useState({
        types: [],
        brands: [],
        genders: [],
        minPrice: value[0],
        maxPrice: value[1],
        sizes: [],
        colors: []
    });

    useEffect(() => {
        fetchBrands();
        fetchShoeProductsAndGetMaxPrice();
    }, []);

    useEffect(() => {
        refreshShoes({
            ...filterData
        });
    }, [filterData, value, maxPrice]);

   
    const fetchShoeProductsAndGetMaxPrice = async () => {
        const res = await searchShoeProductsService();
        setMaxPrice(
            Math.max(...res.data.map(items => calcShoeProductPrice(items)))
        );
    };

    const fetchBrands = async () => {
        const res = await getBrandsService();
        dispatch(setBrands(res.data));
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

    const onFilterPriceChange = () => {
        removeFilterLabel(`$${filterData.minPrice} - ${filterData.maxPrice}`, 'price');
        addFilterLabel(`$${filterData.minPrice} - ${filterData.maxPrice}`, 'price');
    };

    const onRemovePriceLabel = () => {
        setFilterData({
            ...filterData,
            maxPrice,
            minPrice: 0
        });
        setValue([0, maxPrice]);
        removeFilterLabel(`$${filterData.minPrice} - ${filterData.maxPrice}`, 'price');
    };

    const clearAllFilters = () => {
        setFilterData({
            types: [],
            brands: [],
            genders: [],
            minPrice: 0,
            maxPrice: maxPrice,
            sizes: [],
            colors: []
        });
        setFilterLabels([]);
        setValue([0, maxPrice]);
    };
    

    const renderGenderCheckboxes = () => {
        return Object.entries(genderTypes).map(gender => {return (
            <FilterItemCheckbox key={gender[0]} title={gender[1]} onChange={() => onFilterItemChange(gender[1], 'genders')} value={filterData.genders.includes(gender[1])}/>
        );});
    };

    const renderColors = () => {
        return colorsTypes.colors.map(color => {
            return (
                <FilterItemBoxColor key={color.title} color={color.color} title={color.title} onChange={() => onFilterItemChange(color.title, 'colors')} value={filterData.colors.includes(color.title)}/>
            );});
    };

    const renderSizes = () => {
        return sizesTypes.sizes.map(size => {
            return (
                <SizeItem key={size} size={size} onChange={() => onFilterItemChange(size, 'sizes')} value={filterData.sizes.includes(size)}/>
            );});
    };

    const renderTypes = () => {
        return Object.entries(shoesTypes).map(type => {return (
            <FilterItemCheckbox key={type[0]} title={type[1]} onChange={() => onFilterItemChange(type[1], 'types')} value={filterData.types.includes(type[1])}/>
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
                <FilterBoxLabel title={label.items === 'brands' ? getBrandNameById(label.item) : label.item} key={label.item} onClick={() => label.items === 'price' ? onRemovePriceLabel() : onFilterItemChange(label.item, label.items )}/>
            ));
        }
    };

    return (
        <div className='max-w-[16.666667%] min-w-[16.666667%] mr-20'>
            <div className='py-4'>
                <div className='px-3 flex w-full justify-between'>
                    <p className='font-bold'>{locales.FILTER}</p>
                    <p className='text-red-500 font-semibold text-sm cursor-pointer transition-all hover:scale-95' onClick={clearAllFilters}>{locales.CLEAR_ALL}</p>
                </div>
            </div>
            <div className='py-4 mb-5'>
                <div className='full'>
                    <div className='px-3 flex flex-wrap'>
                        {renderFilterBoxLabels()}
                    </div>
                </div>
            </div>
            <FilterItemBox title={locales.TYPES}>
                {renderTypes()}
            </FilterItemBox>
            <FilterItemBox title={locales.BRANDS}>
                {renderBrands()}
            </FilterItemBox>
            <FilterItemBox title={locales.GENDER}>
                {renderGenderCheckboxes()}
            </FilterItemBox>
            <FilterItemBox title={locales.PRICE}>
                <FilterItemPrice onFilterPriceChange={onFilterPriceChange} maxPrice={maxPrice} value={value} setValue={setValue} filterData={filterData} setFilterData={setFilterData} />
            </FilterItemBox>
            <FilterItemBox title={locales.COLORS}>
                <div className='w-full flex flex-wrap items-center'>
                    {renderColors()}
                </div>
            </FilterItemBox>
            <FilterItemBox title={locales.SIZES}>
                <div className='w-full flex flex-wrap justify-between mb-10'>
                    {renderSizes()}
                </div>
            </FilterItemBox> 
        </div>
    );
};
