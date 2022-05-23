export default class Http {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const response = await this.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try{
        data = await response.json();
    } catch(error){
        console.error(error)
    }

    return data;
  }
}
