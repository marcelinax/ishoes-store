import { configureStore } from '@reduxjs/toolkit';
import shoeProductsSlice from './shoeProductsSlice';

export default configureStore({
    reducer: {
        shoeProducts: shoeProductsSlice
    },
});