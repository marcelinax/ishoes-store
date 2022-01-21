import axios from 'axios';
import { config } from './../config/Config';
import { setShoeProducts } from '../state/shoeProductsSlice';
import { useDispatch } from 'react-redux';

export const useRefreshShoeProducts = () => {
    
    const dispatch = useDispatch();

    const refresh = async (body) => {
        try {
            await axios.post(config.apiUrl + 'shoeProducts/search', body).then(res => dispatch(setShoeProducts(res.data)));
        } catch (error) {
            console.log(error.resposne);
        }
    };

    return {refresh};
};