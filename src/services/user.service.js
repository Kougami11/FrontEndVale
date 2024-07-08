import axios from 'axios'
import authHeader from '@/services/auth.header'

const API_URL = 'http://localhost:8000/'

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'users')
  }

  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() })
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() })
  }

  getAdminBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() })
  }
}

export default new UserService()
