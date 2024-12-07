import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/parking'
});

export const getAllData = () => instance.get('/getAllData');
export const park = (strategy, plateNumber) => instance.post('/park', { strategy, plateNumber });
export const fetch = (plateNumber) => instance.post('/fetch', { plateNumber });

export default instance;
