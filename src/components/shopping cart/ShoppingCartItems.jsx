import React from 'react';
import { ShoppingCartItem } from './ShoppingCartItem';

export const ShoppingCartItems = () => {
    return (
        <div className='w-3/5 h-full bg-white'>
            <div className='w-full p-14'>
                <div className='w-full flex justify-between items-center mb-20'>
                    <h1 className='text-3xl font-bold'>Shopping Cart</h1>
                    <p className='text-stone-400 font-medium'>3 Items</p>
                </div>
                <div className='w-full flex flex-col border-b-2 border-zinc-200'>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                </div>
            </div>
            
        </div>
    );
};
