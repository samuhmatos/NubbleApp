import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.KDe_95qLCFE7L0td35MmwOwqoDaDXSoXDOH_KSAWEbVxYkqc7Q9vfuMTid63',
  },
});
