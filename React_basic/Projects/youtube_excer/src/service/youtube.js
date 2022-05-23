class Youtube {
  constructor(key) {
    this.key = key;
    this.baseURL = 'https://youtube.googleapis.com/youtube/v3/';
    this.maxResults = 25;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  async getVideos(input) {
    return fetch(
      `${this.baseURL}${input ? 'search' : 'videos'}?part=snippet${
        input ? `&q=${input}` : '&chart=mostPopular'
      }&maxResults=${this.maxResults}&key=${this.key}`,
      this.getRequestOptions
    ).then((response) => response.json());
  }
}

export default Youtube;
