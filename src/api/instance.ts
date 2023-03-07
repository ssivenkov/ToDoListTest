import axios from 'axios';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/';

export const instance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});
