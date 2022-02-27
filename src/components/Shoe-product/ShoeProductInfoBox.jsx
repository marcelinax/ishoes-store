import { BiHeart } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@components/Global/Button';
import buttonTypes from '@constants/buttonTypes';
import locales from '@constants/locales';
import { ColorItem } from '@components/Global/ColorItem';
import { getColorsByTitle } from '@utils/getColorsByTitle';
import { StarItem } from '@components/Global/StarItem';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { ShoeProductHeading } from '@components/Shoe-product/ShoeProductHeading';
import { SizeItem } from '@components/Global/SizeItem';

export const ShoeProductInfoBox = ({ brand, model, material, type, opinions, calcShoeProductPrice, price, isOnSale, size, colors }) => {
    
    const renderColorsItems = () => {
        if (colors)
            return colors.map(color => (
                <ColorItem key={color.toLowerCase()} color={getColorsByTitle(color)} className='w-10 h-10' />
            ));
    };

    const renderStarsItems = () => {
        if (opinions) {
            const stars = [];
            let starCount;
            if (opinions.length > 0) {
                starCount = Math.ceil(opinions.map(opinion => opinion.rating).reduce((acc, cur) => acc + cur));
            }
            else starCount = 0;
            
            for (let i = 0; i < starCount; i++){
                stars.push(<StarItem isEmpty={false}/>);
            }
            for (let i = starCount; i < 5; i++){
                stars.push(<StarItem isEmpty={true}/>);
            }
            console.log(stars);
            return stars;
        }
    };

    return (
        <div className='w-2/5 h-screen'>
            <div className='w-full p-16 h-full'>
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-2xl'>{brand}</h2>
                        <h1 className='font-bold text-4xl mt-2'>{model}</h1>
                    </div>
                    <Button type={buttonTypes.ICON_BUTTON} isLink linkTo='/' icon={<BiX fill='#ffffff' className='w-full h-full'/>} backgroundColor='bg-black' className='w-12 h-12 relative right-0 top-0 cursor-pointer hover:scale-95 transition-all'/>
                </div>
                <BreakLine className='my-8' />
                <div className='w-full flex'>
                    <div className='w-full flex flex-col'>
                        <ShoeProductHeading title='COLORS'/>
                        <div className='w-full flex mt-2'>
                            {renderColorsItems()}
                        </div>
                        <ShoeProductHeading title={locales.SIZE} className='mt-4'/>
                        <div className='w-full flex mt-2'>
                            <SizeItem size={size} className='ml-0' />
                        </div>
                        <BreakLine className='my-8' />
                        <div className='w-full flex flex-col'>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title={locales.MATERIAL} className='mr-3'/>
                                <p className='text-neutral-400'>{material}</p>
                            </div>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title={locales.TYPE} className='mr-3'/>
                                <p className='text-neutral-400'>{type}</p>
                            </div>
                        </div>
                        <BreakLine className='my-8' />
                        <ShoeProductHeading title={locales.OPINIONS}/>
                        <div className='w-full flex mt-2 items-center'>
                            <div className='flex'>
                                {renderStarsItems()}
                            </div>
                            <p className='ml-3 font-semibold text-sm'>{opinions.length}</p>
                        </div>
                        <BreakLine className='my-8' />
                        <div className='w-full flex items-center'>
                            {isOnSale && <h1 className='text-5xl font-semibold mr-2 text-red-600'>${calcShoeProductPrice}</h1>}
                            <h1 className={`font-semibold text-5xl ${isOnSale && 'line-through text-3xl'}`}>${price}</h1>
                           
                        </div>
                        <div className='w-full flex mt-12'>
                            <Button type={buttonTypes.TEXT_BUTTON} backgroundColor='bg-black' title={locales.ADD_TO_CART} className='mr-5' />
                            <Button type={buttonTypes.ICON_BUTTON} icon={<BiHeart size={24} fill='#fff'/>} backgroundColor='bg-black' className='p-5 flex items-center justify-center'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShoeProductInfoBox.propTypes = {
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    opinions: PropTypes.array.isRequired,
    isOnSale: PropTypes.bool.isRequired,
    calcShoeProductPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};