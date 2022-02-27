import { BiRightArrowAlt } from 'react-icons/bi';
import React from 'react';
import { Button } from '@components/Global/Button';
import buttonTypes from '@constants/buttonTypes';
import locales from '@constants/locales';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { Input } from '@components/Inputs/Input';
import { useSelector } from 'react-redux';
import { calcShoeProductPrice } from '@utils/calcShoeProductPrice';
import { calcTotalShoppingCartItemsAmount } from '@utils/calcTotalShoppingCartItemsAmount';

export const ShoppingCartSummary = () => {

    const shoppingCartItems = useSelector(state => state.shoppingCart.shoppingCartItems);

    const getPriceFromAllItems = () => {
        if(shoppingCartItems)
            return shoppingCartItems.length ? shoppingCartItems.map(item => calcShoeProductPrice(item.product) * item.amount).reduce((acc, cur) => acc + cur) : 0;
    };

    return (
        <div className='w-2/5 h-screen bg-[#F5F5F5]'>
            <div className='w-full p-14'>
                <div className='w-full mt-16 pb-4'>
                    <h1 className='font-bold text-2xl'>{locales.SUMMARY}</h1>
                </div>
                < BreakLine className='mt-1'/>
                <div className='w-full flex justify-between items-center my-9'>
                    <p className='font-semibold text-lg '>{locales.ITEMS} {calcTotalShoppingCartItemsAmount(shoppingCartItems)}</p>
                    <p className='font-bold text-lg '>$ {getPriceFromAllItems()}</p>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-lg mb-5'>{locales.SHIPPING}</label>
                        <Input id='delivery' placeholder={locales.STANDARD_DELIVERY} icon={<BiRightArrowAlt size={24} className='fill-zinc-300'/>}/>
                    </div>
                    <div className='flex w-full flex-col mt-12 '>
                        <label className='font-semibold text-lg mb-5'>{locales.GIVE_CODE}</label>
                        <Input id='code' placeholder={locales.ENTER_YOUR_CODE} icon={<BiRightArrowAlt size={24} className='fill-zinc-300'/>}/>
                    </div>
                </div>
                <BreakLine className='mt-20' />
                <div className='w-full flex justify-between items-center mt-6'>
                    <p className='font-semibold text-lg'>{locales.TOTAL_PRICE}</p>
                    <p className='font-bold text-lg'>$137</p>
                </div>
                <div className='mt-28 w-full'>
                    <Button backgroundColor='bg-black' type={buttonTypes.TEXT_BUTTON} title={locales.ORDER} />
                </div>
            </div>
        </div>
    );
};
