import { useEffect, useState } from 'react';

import React from 'react';
import { ShoeProductBgBox } from '../components/shoe product/ShoeProductBgBox';
import { ShoeProductInfoBox } from '../components/shoe product/ShoeProductInfoBox';
import { Spinner } from './../components/global/Spinner';
import axios from 'axios';
import { calcShoeProductPrice } from './../utils/calcShoeProductPrice';
import { config } from './../config/Config';
import { useDispatch, } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ShoeProduct = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const [shoeProduct, setShoeProduct] = useState(null);

    useEffect(() => {
        fetchShoeProductById(); 
    },[]);

    const fetchShoeProductById = async () => {
        await axios.get(config.apiUrl + `shoeProducts/${params.id}`).then(res => dispatch(setShoeProduct(res.data)));
    };

    return shoeProduct ? (
        
        <div className='w-full h-full flex'>
            <ShoeProductBgBox photos={shoeProduct.photos}/>
            <ShoeProductInfoBox brand={shoeProduct.brand.name} model={shoeProduct.model} isOnSale={shoeProduct.isOnSale} material={shoeProduct.material}
                opinions={shoeProduct.opinions} price={shoeProduct.price} type={shoeProduct.type} size={shoeProduct.size} colors={shoeProduct.colors}
                calcShoeProductPrice={calcShoeProductPrice(shoeProduct)} />
        </div>
        
    ) : <Spinner/>;
};
