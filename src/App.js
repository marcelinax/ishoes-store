import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Homepage } from './views/Homepage';
import React from 'react';
import { ShoeProduct } from './views/ShoeProduct';
import { ShoppingCart } from './views/ShoppingCart';


function App() {

 
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
                <Route path='/shoeProduct/:id' element={<ShoeProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
