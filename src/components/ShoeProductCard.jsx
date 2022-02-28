import { ColorItem } from '@components/Global/ColorItem';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { getColorsByTitle } from '@utils/getColorsByTitle';
import PropTypes from 'prop-types';
import React from 'react';

export const ShoeProductCard = ({ bgImg, colors, model, brand, price, calcShoeProductPrice, isOnSale, onViewDetailsClick }) => {
    const renderColorsItems = () => {
        if (colors)
            return colors.map(color => (
                <ColorItem key={color.toLowerCase()} color={getColorsByTitle(color)} className='w-6 h-6' />
            ));
    };

    return (
        <div className='basis-1/3 h-2/5 px-6 py-6'>
            <div className='flex flex-col w-full h-full cursor-pointer' onClick={onViewDetailsClick}>
                <div className='w-full h-1/2'>
                    <div className='bg-no-repeat bg-center bg-contain h-full w-full' style={{backgroundImage: `url(${bgImg})`}} />
                </div>
                <div className='flex flex-col w-full mt-2 bg-red py-4 px-2'>
                    <div className='w-full flex flex-wrap'>
                        {renderColorsItems()}
                    </div>
                    <BreakLine className='h-[1px] my-2'/>
                    <div className='w-full flex flex-col'>
                        <h6 className='font-bold text-sm mb-1'>{brand.name}</h6>
                        <h6 className='font-bold text-sm mb-1'>{model}</h6>
                        <div className='flex items-center'>
                            {isOnSale && <p className='text-red-600 font-medium text-sm mr-1'>${calcShoeProductPrice}</p>}
                            <p className={`text-neutral-500 font-medium text-sm ${isOnSale && 'line-through	text-xs'}`}>${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShoeProductCard.propTypes = {
    bgImg: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.object.isRequired,
    calcShoeProductPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isOnSale: PropTypes.bool.isRequired
};