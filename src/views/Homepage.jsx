import { FilterBox } from '@components/Filter/FilterBox';
import { ShoeProductCard } from '@components/ShoeProductCard';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { calcShoeProductPrice } from '@utils/calcShoeProductPrice';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {

    const shoeProducts = useSelector(state => { return state.shoeProducts.shoeProducts; });
    const navigate = useNavigate();

    const renderShoeProductsCards = () => {
        if (shoeProducts) {
            return shoeProducts.searchingShoeProducts.map(shoeProduct => {return (
                <ShoeProductCard key={shoeProduct._id} bgImg={shoeProduct.photos[0]} brand={shoeProduct.brand} colors={shoeProduct.colors} model={shoeProduct.model} price={shoeProduct.price} calcShoeProductPrice={calcShoeProductPrice(shoeProduct)} 
                    isOnSale={shoeProduct.isOnSale} onViewDetailsClick={() => navigate(`shoeProduct/${shoeProduct._id}`) }/>
            );});
        }
    };

    return (
        <DefaultLayout>
            <div className='container h-screen mx-auto flex mt-36'>
                <FilterBox />
                <div className='min-w-[83.3333%] max-w-[83.3333%] content-start h-full mx-auto flex flex-wrap'>
                    {renderShoeProductsCards()}
                </div>
            </div>
        </DefaultLayout>
    );
};
