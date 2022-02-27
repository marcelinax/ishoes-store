import { useDispatch } from 'react-redux';
import { setShoeProducts } from '@state/shoe-products/shoeProductsSlice';
import { apiClient } from '@api/apiClient';

export const useRefreshShoeProducts = () => {
    
    const dispatch = useDispatch();

    const refresh = async (body) => {
        try {
            await apiClient.post('shoeProducts/search', body).then(res => dispatch(setShoeProducts(res.data)));
        } catch (error) {
            console.log(error.resposne);
        }
    };

    return {refresh};
};