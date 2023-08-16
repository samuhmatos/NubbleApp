import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.q8MesB8eXVQiImmLBTcCKL5HKBiZs4gx5rphxNBWh_QxdzidqjCeOiDdBJyR',
  },
});
