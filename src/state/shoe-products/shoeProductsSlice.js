import { createSlice } from '@reduxjs/toolkit';

const initalState = () => ({
    shoeProducts: { searchingShoeProducts: [], totalItems: 0 },
    shoeProduct: null
});

export const shoeProductsSlice = createSlice({
    name: 'shoeProducts',
    initialState: initalState(),
    reducers: {
        setShoeProducts: (state, action) => {
            const { searchingShoeProducts, totalItems } = action.payload;
            state.shoeProducts = {searchingShoeProducts: [...searchingShoeProducts], totalItems };
        },
        setShoeProduct: (state, action) => {
            state.shoeProduct = action.payload;
        }
    }
});

export const { setShoeProducts, setShoeProduct } = shoeProductsSlice.actions;

export default shoeProductsSlice.reducer;