import { BiHeart } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { BreakLine } from './../shopping cart/BreakLine';
import { ButtonWithIcon } from '../global/ButtonWithIcon';
import { COLORS } from './../../Constants';
import { ColorItem } from '../global/ColorItem';
import { PrimaryButton } from './../global/PrimaryButton';
import PropTypes from 'prop-types';
import React from 'react';
import { ShoeProductHeading } from './ShoeProductHeading';
import { SizeItem } from './../global/SizeItem';
import { StarItem } from '../global/StarItem';
import { getColorsByTitle } from './../../utils/getColorsByTitle';

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
                    <ButtonWithIcon isLink={true} to='/' icon={<BiX fill='#ffffff' className='w-full h-full'/>} className='w-12 h-12 bg-black relative right-0 top-0 cursor-pointer hover:scale-95 transition-all'/>
                </div>
                <BreakLine className='my-8' />
                <div className='w-full flex'>
                    <div className='w-full flex flex-col'>
                        <ShoeProductHeading title='COLORS'/>
                        <div className='w-full flex mt-2'>
                            {renderColorsItems()}
                        </div>
                        <ShoeProductHeading title='SIZE' className='mt-4'/>
                        <div className='w-full flex mt-2'>
                            <SizeItem size={size} className='ml-0' />
                        </div>
                        <BreakLine className='my-8' />
                        <div className='w-full flex flex-col'>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title='MATERIAL' className='mr-3'/>
                                <p className='text-neutral-400'>{material}</p>
                            </div>
                            <div className='w-full flex items-center'>
                                <ShoeProductHeading title='TYPE' className='mr-3'/>
                                <p className='text-neutral-400'>{type}</p>
                            </div>
                        </div>
                        <BreakLine className='my-8' />
                        <ShoeProductHeading title='OPINIONS'/>
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
                            <PrimaryButton title='ADD TO CART' type='button' className='mr-5' />
                            <ButtonWithIcon icon={<BiHeart size={24} fill='#fff'/>} className='bg-black p-5 flex items-center justify-center'/>
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