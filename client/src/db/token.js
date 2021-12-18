const TOKEN = "token";

export default class TokenStorage {
  save(token) {
    localStorage.setItem(TOKEN, token);
  }
  get() {
    return localStorage.getItem(TOKEN);
  }
  clear() {
    localStorage.removeItem(TOKEN);
  }
}
