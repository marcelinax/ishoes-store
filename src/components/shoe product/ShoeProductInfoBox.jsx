import { BiX } from 'react-icons/bi';
import { BreakLine } from './../shopping cart/BreakLine';
import React from 'react';

export const ShoeProductInfoBox = () => {
    return (
        <div className='w-2/5 h-screen'>
            <div className='w-full p-16 h-full'>
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-2xl'>Nike</h2>
                        <h1 className='font-bold text-4xl mt-2'>Air Force 1 - White</h1>
                    </div>
                    <div className='w-12 h-12 bg-black relative right-0 top-0 cursor-pointer hover:scale-95 transition-all'>
                        <BiX fill='#ffffff' className='w-full h-full'/>
                    </div>
                </div>
                <BreakLine className='my-8' />
                <div className='w-full flex'>
                    <div>
                        <h6 >COLOR</h6>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
