import { createSlice } from '@reduxjs/toolkit';

export const shoeProductsSlice = createSlice({
    name: 'shoeProducts',
    initialState: {
        shoeProducts: {searchingShoeProducts: [], totalItems: 0},
    },
    reducers: {
        setShoeProducts: (state, action) => {
            const { searchingShoeProducts, totalItems } = action.payload;
            state.shoeProducts = {searchingShoeProducts: [...searchingShoeProducts], totalItems };
        }
    }
});

export const { setShoeProducts } = shoeProductsSlice.actions;

export default shoeProductsSlice.reducer;