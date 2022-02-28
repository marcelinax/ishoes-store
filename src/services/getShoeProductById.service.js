import { apiClient } from '@api/apiClient';

export const getShoeProductByIdService = async (params) => {
    return await apiClient.get(`shoeProducts/${params.id}`);
};