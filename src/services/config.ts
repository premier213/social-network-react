import axios from 'axios';

// create instance from api
export const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
});
