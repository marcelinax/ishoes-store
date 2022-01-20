import { BiHeart } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { BreakLine } from './../shopping cart/BreakLine';
import { ButtonWithIcon } from '../global/ButtonWithIcon';
import { COLORS } from './../../Constants';
import { ColorItem } from '../global/ColorItem';
import { PrimaryButton } from './../global/PrimaryButton';
import React from 'react';
import { ShoeProductHeading } from './ShoeProductHeading';
import { SizeItem } from './../global/SizeItem';
import { StarItem } from '../global/StarItem';

export const ShoeProductInfoBox = () => {
    return (
        <div className='w-2/5 h-screen'>
            <div className='w-full p-16 h-full'>
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-2xl'>Nike</h2>
                        <h1 className='font-bold text-4xl mt-2'>Air Force 1 - White</h1>
                    </div>
                    <ButtonWithIcon isLink={true} to='/' icon={<BiX fill='#ffffff' className='w-full h-full'/>} className='w-12 h-12 bg-black relative right-0 top-0 cursor-pointer hover:scale-95 transition-all'/>
                </div>
                <BreakLine className='my-8' />
                <div className='w-full flex'>
                    <div className='w-full flex flex-col'>
                        <ShoeProductHeading title='COLOR'/>
                        <div className='w-full flex mt-2'>
                            <ColorItem color={COLORS.colors['bg-red-600']} className='w-10 h-10 ml-0'/>
                            <ColorItem color={COLORS.colors['bg-red-600']} className='w-10 h-10'/>
                        </div>
                        <ShoeProductHeading title='SIZE' className='mt-4'/>
                        <div className='w-full flex mt-2'>
                            <SizeItem size={38} className='ml-0' />
                            <SizeItem size={38}/>
                            <SizeItem size={38}/>
                        </div>
                        <BreakLine className='my-8' />
                        <div className='w-full flex flex-col'>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title='MATERIAL' className='mr-3'/>
                                <p className='text-neutral-400'>ecoskin</p>
                            </div>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title='TYPE' className='mr-3'/>
                                <p className='text-neutral-400'>Sneakers</p>
                            </div>
                        </div>
                        <BreakLine className='my-8' />
                        <ShoeProductHeading title='OPINIONS'/>
                        <div className='w-full flex mt-2 items-center'>
                            <div className='flex'>
                                <StarItem/>
                                <StarItem/>
                                <StarItem/>
                                <StarItem/>
                                <StarItem/>
                            </div>
                            <p className='ml-3 font-semibold text-sm'>14</p>
                        </div>
                        <BreakLine className='my-8' />
                        <div className='w-full'>
                            <h1 className='text-5xl font-semibold'>$350</h1>
                        </div>
                        <div className='w-full flex mt-12'>
                            <PrimaryButton title='ADD TO CART' type='button' className='mr-5' />
                            <ButtonWithIcon icon={<BiHeart size={24} fill='#fff'/>} className='bg-black p-5 flex items-center justify-center'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
