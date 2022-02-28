import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React from 'react';
import locales from '@constants/locales';
import { BreakLine } from '@components/Shopping-cart/BreakLine';
import { ShoppingCartItem } from '@components/Shopping-cart/ShoppingCartItem';
import { useDispatch, useSelector } from 'react-redux';
import { calcShoeProductPrice } from '@utils/calcShoeProductPrice';
import { decreaseProductAmountInShoppingCart, increaseProductAmountInShoppingCart, removeProductFromShoppingCart } from '@state/shopping-cart/shoppingCartSlice';
import { calcTotalShoppingCartItemsAmount } from '@utils/calcTotalShoppingCartItemsAmount';

export const ShoppingCartItems = () => {

    const shoppingCartItems = useSelector(state => state.shoppingCart.shoppingCartItems);
    const dispatch = useDispatch();

    const renderShoppingCartItems = () => {
        return shoppingCartItems && shoppingCartItems.map(item => (
            <ShoppingCartItem key={item.product._id} bgImg={item.product.photos[0]} model={item.product.model} brand={item.product.brand.name}
                calcShoeProductPrice={calcShoeProductPrice(item.product) * item.amount} amount={item.amount}
                onDecreaseAmount={() => dispatch(decreaseProductAmountInShoppingCart(item.product))}
                onIncreaseAmount={() => dispatch(increaseProductAmountInShoppingCart(item.product))}
                onRemoveShoeProduct={() => dispatch(removeProductFromShoppingCart(item.product))}
            />
        ));
    };

    return (
        <div className='w-3/5 h-full bg-white'>
            <div className='w-full p-14 relative'>
                <div className='w-full flex justify-between items-center mb-20'>
                    <h1 className='text-3xl font-bold'>{locales.SHOPPING_CART}</h1>
                    <p className='text-stone-400 font-medium'>{calcTotalShoppingCartItemsAmount(shoppingCartItems)} {calcTotalShoppingCartItemsAmount(shoppingCartItems) !== 1 ? locales.ITEMS : locales.ITEM}</p>
                </div>
                <BreakLine className='mb-2' />
                <div className='w-full flex flex-col  max-h-[60vh] overflow-y-auto pr-2 scrollbar'>
                    <div className='flex flex-col w-full px-2 group'>
                        {renderShoppingCartItems()}
                    </div>
                </div>
                {shoppingCartItems.length > 0 && <BreakLine className='mt-2'/>}
                <div className='w-full flex mt-28'>
                    <div className='flex  items-center group'>
                        <BiArrowBack size={22} className='cursor-pointer'/>
                        <Link to='/' className='ml-3 font-medium cursor-pointer group-hover:font-semibold transition-all'>{locales.BACK_TO_SHOP}</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
