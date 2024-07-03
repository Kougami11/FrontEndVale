import axios from 'axios'

class AuthService {
  login(user) {
    return axios.post('auth/token', user).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem('_token', response.data.access_token)
      }
      return response.data
    })
  }

  logout() {
    localStorage.removeItem('_token')
  }
}
export default new AuthService()
