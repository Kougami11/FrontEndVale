export default function authHeader() {
    let user_token = JSON.parse(localStorage.getItem('_token'));
    if (user_token) {
      return { Authorization: 'Bearer ' + user_token }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }