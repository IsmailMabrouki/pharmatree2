// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3600/api', // Update with your API server URL
  timeout: 5000, // Timeout for requests (milliseconds)
});

export default instance;