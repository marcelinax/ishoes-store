import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingCart } from '@views/ShoppingCart';
import { ShoeProduct } from '@views/ShoeProduct';
import { Homepage } from '@views/Homepage';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
                <Route path='/shoeProduct/:id' element={<ShoeProduct />} />
            </Routes>
        </BrowserRouter>
    );
};
