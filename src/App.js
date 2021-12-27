import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Homepage } from './views/Homepage';
import { Provider } from 'react-redux';
import React from 'react';
import { ShoeProduct } from './views/ShoeProduct';
import { ShoppingCart } from './views/ShoppingCart';
import store from './state/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/shopping-cart' element={<ShoppingCart />} />
                    <Route path='/shoe' element={<ShoeProduct />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
