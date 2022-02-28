import React, { useEffect, useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ShoeProductBgBox } from '@components/Shoe-product/ShoeProductBgBox';
import { ShoeProductInfoBox } from '@components/Shoe-product/ShoeProductInfoBox';
import { calcShoeProductPrice } from '@utils/calcShoeProductPrice';
import { Spinner } from '@components/Global/Spinner';
import { addProductToShoppingCart } from '@state/shopping-cart/shoppingCartSlice';
import { getShoeProductByIdService } from '@services/getShoeProductById.service';

export const ShoeProduct = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const [shoeProduct, setShoeProduct] = useState(null);

    useEffect(() => {
        fetchShoeProductById(); 
    },[]);

    const fetchShoeProductById = async () => {
        const res = await getShoeProductByIdService(params);
        dispatch(setShoeProduct(res.data));
    };

    return shoeProduct ? (
        <div className='w-full h-full flex'>
            <ShoeProductBgBox photos={shoeProduct.photos}/>
            <ShoeProductInfoBox brand={shoeProduct.brand.name} model={shoeProduct.model} isOnSale={shoeProduct.isOnSale} material={shoeProduct.material}
                opinions={shoeProduct.opinions} price={shoeProduct.price} type={shoeProduct.type} size={shoeProduct.size} colors={shoeProduct.colors}
                calcShoeProductPrice={calcShoeProductPrice(shoeProduct)}
                onAddToShoppingCart={() => dispatch(addProductToShoppingCart(shoeProduct))}
            />
        </div>
    ) : <Spinner/>;
};
