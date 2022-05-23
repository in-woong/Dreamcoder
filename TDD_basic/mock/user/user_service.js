const UserClient = require("./user_client")
class UserService {
  constructor() {
    this.userClient = new UserClient();
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
    //   return fetch('http://exmple.com/login/id+password') //
    //     .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}
module.exports = UserService;
