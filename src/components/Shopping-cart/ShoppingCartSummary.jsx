import { BiRightArrowAlt } from 'react-icons/bi';
import React from 'react';
import { Button } from '@components/Global/Button';
import buttonTypes from '@constants/buttonTypes';
import locales from '@constants/locales';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { Input } from '@components/Inputs/Input';

export const ShoppingCartSummary = () => {
    return (
        <div className='w-2/5 h-screen bg-[#F5F5F5]'>
            <div className='w-full p-14'>
                <div className='w-full mt-16 pb-4'>
                    <h1 className='font-bold text-2xl'>{locales.SUMMARY}</h1>
                </div>
                < BreakLine className='mt-1'/>
                <div className='w-full flex justify-between items-center my-9'>
                    <p className='font-semibold text-lg '>{locales.ITEMS} 3</p>
                    <p className='font-semibold text-lg '>$120</p>
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
                    <p className='font-semibold text-lg'>$137</p>
                </div>
                <div className='mt-28 w-full'>
                    <Button backgroundColor='bg-black' type={buttonTypes.TEXT_BUTTON} title={locales.ORDER} />
                </div>
            </div>
        </div>
    );
};
