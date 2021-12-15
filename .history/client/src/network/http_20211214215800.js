export default class Http {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    await this.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  }
}
