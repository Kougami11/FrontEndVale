export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('_token'));
  
    if (user && user._token) {
      return { Authorization: 'Bearer ' + user._token }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }