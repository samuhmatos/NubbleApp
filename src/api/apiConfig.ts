import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Ng.kVNjJeGJbk3it0IY91GtlGZKqA3TvtP-5jy_YS5OXqq8QaEj8raCQ-1sbXbs',
  },
});
