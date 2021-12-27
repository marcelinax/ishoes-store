import React from 'react';
import { ShoppingCartItems } from '../components/shopping cart/ShoppingCartItems';
import { ShoppingCartSummary } from '../components/shopping cart/ShoppingCartSummary';

export const ShoppingCart = () => {
    return (
        
        <div className='w-full h-full flex'>
            <ShoppingCartItems />
            <ShoppingCartSummary />
        </div>
    );
};
