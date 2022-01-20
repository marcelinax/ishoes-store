import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { FilterBox } from './../components/filter/FilterBox';
import { ShoeProductCard } from './../components/ShoeProductCard';
import axios from 'axios';
import { calcShoeProductPrice } from './../utils/calcShoeProductPrice';
import { config } from './../config/Config';
import { setShoeProducts } from '../state/shoeProductsSlice';

export const Homepage = () => {

    const dispatch = useDispatch();
    const shoeProducts = useSelector(state => {return state.shoeProducts.shoeProducts;});

    useEffect(() => {
        fetchShoeProducts(); 
    },[]);

    const fetchShoeProducts = async () => {
        await axios.post(config.apiUrl + 'shoeProducts/search').then(res => {return dispatch(setShoeProducts(res.data));} );
    };

    const renderShoeProductsCards = () => {
        if (shoeProducts) {
            return shoeProducts.searchingShoeProducts.map(shoeProduct => {return (
                <ShoeProductCard key={shoeProduct._id} bgImg={shoeProduct.photos[0]} brand={shoeProduct.brand} colors={shoeProduct.colors} model={shoeProduct.model} price={shoeProduct.price} calcShoeProductPrice={calcShoeProductPrice(shoeProduct)} isOnSale={shoeProduct.isOnSale}/>
            );});
        }
    };

  
    return (

        <DefaultLayout >
            <div className='container h-screen mx-auto flex mt-36'>
                <FilterBox />
                <div className='min-w-[83.3333%] max-w-[83.3333%] content-start h-full mx-auto flex flex-wrap'>
                    {renderShoeProductsCards()}
                </div>
            </div>
        </DefaultLayout>

    );
};
