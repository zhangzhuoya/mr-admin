/**
 * 对用户的操作
 */
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
