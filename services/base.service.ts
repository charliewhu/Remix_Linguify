import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://linguify.up.railway.app/api',
});

export default axiosInstance;