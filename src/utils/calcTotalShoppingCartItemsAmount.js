export const calcTotalShoppingCartItemsAmount = (shoppingCartItems) => {
    if(shoppingCartItems)
        return shoppingCartItems.length > 0 ? shoppingCartItems.map(item => item.amount).reduce((acc,cur) => acc + cur) : 0;
};