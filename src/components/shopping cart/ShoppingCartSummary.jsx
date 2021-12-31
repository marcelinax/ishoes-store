import { BiRightArrowAlt } from 'react-icons/bi';
import { BreakLine } from './BreakLine';
import { Input } from '../inputs/Input';
import { PrimaryButton } from './../global/PrimaryButton';
import React from 'react';

export const ShoppingCartSummary = () => {
    return (
        <div className='w-2/5 h-screen bg-[#F5F5F5]'>
            <div className='w-full p-14'>
                <div className='w-full mt-16 pb-4'>
                    <h1 className='font-bold text-2xl'>Summary</h1>
                </div>
                < BreakLine className='mt-1'/>
                <div className='w-full flex justify-between items-center my-9'>
                    <p className='font-semibold text-lg '>ITEMS 3</p>
                    <p className='font-semibold text-lg '>$120</p>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-lg mb-5'>SHIPPING</label>
                        <Input placeholder='Enter your code' icon={<BiRightArrowAlt size={24} className='fill-zinc-300'/>}/>
                    </div>
                    <div className='flex w-full flex-col mt-12 '>
                        <label className='font-semibold text-lg mb-5'>GIVE CODE</label>
                        <Input placeholder='Enter your code' icon={<BiRightArrowAlt size={24} className='fill-zinc-300'/>}/>
                    </div>
                </div>
                <BreakLine className='mt-20' />
                <div className='w-full flex justify-between items-center mt-6'>
                    <p className='font-semibold text-lg'>TOTAL PRICE</p>
                    <p className='font-semibold text-lg'>$137</p>
                </div>
                <div className='mt-28 w-full'>
                    <PrimaryButton type='button' title='ORDER' />
                </div>
            </div>
        </div>
    );
};
