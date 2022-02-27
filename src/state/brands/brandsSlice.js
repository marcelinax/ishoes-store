import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
    brands: []
});

export const brandsSlice = createSlice({
    name: 'brands',
    initialState: initialState(),
    reducers: {
        setBrands: (state, action) => {
            state.brands = [...action.payload];
        }
    }
});

export const { setBrands } = brandsSlice.actions;

export default brandsSlice.reducer;