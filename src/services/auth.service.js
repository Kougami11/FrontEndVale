import axios from 'axios'
import { jwtDecode } from "jwt-decode";

class AuthService {
  async login(user) {
    const response = await axios.post('auth/token', user)
    if (response.data.access_token) {
      localStorage.setItem('_token', JSON.stringify(response.data.access_token))
      console.log(jwtDecode(response.data.access_token))
      this.me(response.data.access_token)
    }
    return response.data
  }

  logout() {
    localStorage.removeItem('_token')
  }

  async me(token){
    const response = await axios.get('/users/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      console.log('response:',response.data)
      localStorage.setItem('user', JSON.stringify(response.data))
    })
    return response
  }
}
export default new AuthService()
