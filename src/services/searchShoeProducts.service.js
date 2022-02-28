import { apiClient } from '@api/apiClient';

export const searchShoeProductsService = async () => {
    return await apiClient.get('shoeProducts');
};