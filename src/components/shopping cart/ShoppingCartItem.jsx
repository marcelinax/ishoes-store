import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import React from 'react';

export const ShoppingCartItem = ({ isLastChild }) => {
    return (
        //  border-b-2 border-zinc-200  ${isLastChild && 'group-last:border-b-0'}
        <div className='w - full '>
            <div className='w-full px-8 py-14 flex'>
                <div className='bg-no-repeat bg-center bg-cover w-32 h-32' style={{backgroundImage: 'url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/l3w4varugbogihcpj40e/buty-air-force-1-shadow-38vS5x.png)'}}/>
                <div className='flex flex-col justify-center ml-6'>
                    <p className='text-xs text-stone-400 font-semibold mb-1'>Nike</p>
                    <p className='text-sm font-semibold w-32'>Air Force 1 - White dshadu dshad ja
                    </p>
                </div>
                <div className='flex justify-center items-center m-auto'>
                    <p className=' font-semibold mr-2 cursor-pointer'>-</p>
                    <div className='border border-zinc-300 px-3 text-sm text-stone-400 font-medium'>1</div>
                    <p className='font-semibold ml-2 cursor-pointer'>+</p>
                </div>
                <div className='font-semibold text-sm m-auto'>$44.00</div>
                <div className='flex justify-end items-center'>
                    {<BiX className='w-5 h-5 cursor-pointer'/>}
                </div>
            </div>
        </div>
    );
};

ShoppingCartItem.propTypes = {
    isLastChild: PropTypes.bool
};