import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL:'https://taskmanager-tl.onrender.com',
  });
