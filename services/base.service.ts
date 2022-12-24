import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://linguify.up.railway.up/api',
});

export default axiosInstance;