import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React from 'react';
import locales from '@constants/locales';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { ShoppingCartItem } from '@components/Shopping-cart/ShoppingCartItem';

export const ShoppingCartItems = () => {
    return (
        <div className='w-3/5 h-full bg-white'>
            <div className='w-full p-14 relative'>
                <div className='w-full flex justify-between items-center mb-20'>
                    <h1 className='text-3xl font-bold'>{locales.SHOPPING_CART}</h1>
                    <p className='text-stone-400 font-medium'>3 {locales.ITEMS}</p>
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
                <div className='w-full flex mt-28'>
                    <div className='flex  items-center group'>
                        <BiArrowBack size={22} className='cursor-pointer' />
                        <Link to='/' className='ml-3 font-medium cursor-pointer group-hover:font-semibold transition-all'>{locales.BACK_TO_SHOP}</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
