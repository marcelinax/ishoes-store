import { createSlice } from '@reduxjs/toolkit';

const saveShoppingCartInSessionStorage = (state) => {
    sessionStorage.setItem('ishoes-cart', JSON.stringify(state));
};

const loadShoppingCartFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem('ishoes-cart') || '[]');
};

const initialState = () => ({
    shoppingCartItems: loadShoppingCartFromSessionStorage()
});

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initialState(),
    reducers: {
        addProductToShoppingCart: (state, action) => {
            const shoeProductIndex = state.shoppingCartItems.map(item => item.product._id).indexOf(action.payload._id);
            console.log(state.shoppingCartItems.map(item => item._id));
            if (shoeProductIndex > -1) {
                state.shoppingCartItems[shoeProductIndex].amount++;
                state.shoppingCartItems = [...state.shoppingCartItems];
            }
            else {
                state.shoppingCartItems = [...state.shoppingCartItems, {product: action.payload, amount: 1}];
            }
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        removeProductFromShoppingCart: (state, action) => {
            const shoeProductIndex = state.shoppingCartItems.map(item => item.product._id).indexOf(action.payload._id);
            state.shoppingCartItems.splice(shoeProductIndex, 1);
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        increaseProductAmountInShoppingCart: (state, action) => {
            const shoeProductIndex = state.shoppingCartItems.map(item => item.product._id).indexOf(action.payload._id);
            state.shoppingCartItems[shoeProductIndex].amount++;
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        decreaseProductAmountInShoppingCart: (state, action) => {
            const shoeProductIndex = state.shoppingCartItems.map(item => item.product._id).indexOf(action.payload._id);
            state.shoppingCartItems[shoeProductIndex].amount--;
            if (state.shoppingCartItems[shoeProductIndex].amount === 0) {
                state.shoppingCartItems.splice(shoeProductIndex, 1);
            }
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        }

    }
});

export const { addProductToShoppingCart, removeProductFromShoppingCart, increaseProductAmountInShoppingCart, decreaseProductAmountInShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;