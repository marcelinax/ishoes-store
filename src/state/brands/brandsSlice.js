import { createSlice } from '@reduxjs/toolkit';

const initalState = () => ({
    brands: []
});

export const brandsSlice = createSlice({
    name: 'brands',
    initialState: initalState(),
    reducers: {
        setBrands: (state, action) => {
            state.brands = [...action.payload];
        }
    }
});

export const { setBrands } = brandsSlice.actions;

export default brandsSlice.reducer;