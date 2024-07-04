import axios from 'axios';
import authHeader from '@/services/auth.header';

const API_URL = 'http://10.1.10.156:3060/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'users');
  }

  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }
}

export default new UserService();