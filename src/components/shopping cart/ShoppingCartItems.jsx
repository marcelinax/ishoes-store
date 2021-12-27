import { BiArrowBack } from 'react-icons/bi';
import { BreakLine } from './BreakLine';
import React from 'react';
import { ShoppingCartItem } from './ShoppingCartItem';

export const ShoppingCartItems = () => {
    return (
        <div className='w-3/5 h-full bg-white'>
            <div className='w-full p-14 relative'>
                <div className='w-full flex justify-between items-center mb-20'>
                    <h1 className='text-3xl font-bold'>Shopping Cart</h1>
                    <p className='text-stone-400 font-medium'>3 Items</p>
                </div>
                <BreakLine className='mb-2' />
                <div className='w-full flex flex-col  max-h-[60vh] overflow-y-auto pr-2 scrollbar'>
                    <div className='flex flex-col w-full px-2 group'>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                        <ShoppingCartItem isLastChild/>
                    </div>
                </div>
                <BreakLine className='mt-2' />
                <div className='w-full flex mt-14'>
                    <div className='flex  items-center group'>
                        <BiArrowBack size={22} className='cursor-pointer'/>
                        <p className='ml-3 font-medium cursor-pointer group-hover:font-semibold  transition-all'>Back to shop</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
