import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/rodrigosakamoto/nintendo-store-redux',
});

export default api;
