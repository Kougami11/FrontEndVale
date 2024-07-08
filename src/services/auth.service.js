import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

class AuthService {
  async login3(user) {
    const response = await axios.post('auth/token', user)
    if (response.data.access_token) {
      localStorage.setItem('_token', JSON.stringify(response.data.access_token))
    }
    return response.data
  }
  async login(user) {
    const response = await axios.post('auth/token', user)
    if (response.data.access_token) {
      localStorage.setItem('_token', JSON.stringify(response.data.access_token))
      this.me(response.data.access_token)
    }
    return await this.me(response.data.access_token)
  }
  logout() {
    localStorage.removeItem('_token')
    localStorage.removeItem('user')
  }
  async me(user) {
    return axios
      .get('users/', {
        headers: { Authorization: `Bearer ${user}` }
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }
}
export default new AuthService()
