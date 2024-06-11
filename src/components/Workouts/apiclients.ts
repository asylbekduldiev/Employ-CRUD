import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Data, Item } from './interfaces';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXkiLCJleHAiOjE3MTgyODg2MDgsImF1dGgiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTU2OTY2MDh9.Tyb4pSN__JJXJ15qF2B-GQNISqt63zY9UYA3nIm71LIg1MHRRSNay16KseEdeWiMyjCP3o_Q6cqE7paEtsMGdw'; // замените на ваш реальный токен

export const apiClient = axios.create({
  baseURL: 'https://api.rizeup.kz',
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${token}`,
  }
});

export const getAllItems = async (): Promise<Data> => {
    const response: AxiosResponse<Data> = await apiClient.get('/endpoint-for-items');
    return response.data;
};

export const getItemById = async (id: string): Promise<Item> => {
    const response: AxiosResponse<Item> = await apiClient.get(`/endpoint-for-items/${id}`);
    return response.data;
};

export const createItem = async (newItem: Item): Promise<Item> => {
    const response: AxiosResponse<Item> = await apiClient.post('/endpoint-for-items', newItem);
    return response.data;
};

export const updateItem = async (id: string, updatedItem: Item): Promise<Item> => {
    const response: AxiosResponse<Item> = await apiClient.put(`/endpoint-for-items/${id}`, updatedItem);
    return response.data;
};

export const deleteItem = async (id: string): Promise<void> => {
    await apiClient.delete(`/endpoint-for-items/${id}`);
};

// const handleAxiosError = (error: AxiosError) => {
//     if (error.response) {
//         // Сервер ответил с кодом, который выходит за пределы 2xx
//         console.error('Response error:', error.response.data);
//     } else if (error.request) {
//         // Запрос был сделан, но ответа не получено
//         console.error('Request error:', error.request);
//     } else {
//         // Произошла ошибка при настройке запроса
//         console.error('Error', error.message);
//     }
// };