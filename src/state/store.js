import { configureStore } from '@reduxjs/toolkit';
import brandsSlice from '@state/brands/brandsSlice';
import shoeProductsSlice from '@state/shoe-products/shoeProductsSlice';
import shoppingCartSlice from '@state/shopping-cart/shoppingCartSlice';

export default configureStore({
    reducer: {
        shoeProducts: shoeProductsSlice,
        brands: brandsSlice,
        shoppingCart: shoppingCartSlice
    },
});