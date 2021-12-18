export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  async signup(username, password, name, email, url) {
    const data =await this.http.fetch(`/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url,
      }),
    });
    this.tokenStorage.save(data.token);
    return data;
  }
  async login(username, password) {
    const data =await this.http.fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    this.tokenStorage.save(data.token);
    return data;
  }

  async me() {
    const token =await this.tokenStorage.get();
    return this.http.fetch(`/auth/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async logout() {
    this.tokenStorage.clear();
    return;
  }
}
