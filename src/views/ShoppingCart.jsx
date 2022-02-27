import { ShoppingCartItems } from '@components/Shopping-cart/ShoppingCartItems';
import { ShoppingCartSummary } from '@components/Shopping-cart/ShoppingCartSummary';
import React from 'react';

export const ShoppingCart = () => {
    return (
        <div className='w-full h-full flex'>
            <ShoppingCartItems />
            <ShoppingCartSummary />
        </div>
    );
};
