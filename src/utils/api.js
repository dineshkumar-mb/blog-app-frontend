import axios from 'axios';

const API = axios.create({
  baseURL: 'https://blog-app-backend-yv8d.onrender.com', // Update for production
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  } else {
    delete req.headers.Authorization;
  }
  return req;
});


export default API;
