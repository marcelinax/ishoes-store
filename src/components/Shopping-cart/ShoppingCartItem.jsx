import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import React from 'react';

export const ShoppingCartItem = ({ brand, model, bgImg, calcShoeProductPrice, amount, onIncreaseAmount, onDecreaseAmount, onRemoveShoeProduct }) => {
    return (
        <div className='w-full '>
            <div className='w-full py-14 flex'>
                <div className='bg-no-repeat bg-center bg-contain w-32 h-32' style={{backgroundImage: `url(${bgImg})`}}/>
                <div className='flex flex-col justify-center ml-6'>
                    <p className='text-xs text-stone-400 font-semibold mb-1'>{brand}</p>
                    <p className='text-sm font-semibold w-32'>{model}
                    </p>
                </div>
                <div className='flex justify-center items-center m-auto'>
                    <p className=' font-semibold mr-2 cursor-pointer select-none' onClick={onDecreaseAmount}>-</p>
                    <div className='border border-zinc-300 h-6 w-6 flex items-center justify-center text-sm text-stone-400 font-medium'>{amount}</div>
                    <p className='font-semibold ml-2 cursor-pointer select-none' onClick={onIncreaseAmount}>+</p>
                </div>
                <div className='font-semibold text-sm m-auto'>$ {calcShoeProductPrice}</div>
                <div className='flex justify-end items-center'>
                    <BiX className='w-5 h-5 cursor-pointer' onClick={onRemoveShoeProduct}/>
                </div>
            </div>
        </div>
    );
};

ShoppingCartItem.propTypes = {
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};