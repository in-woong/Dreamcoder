class Youtube {
  constructor(HTTPClient) {
    this.youtube = HTTPClient
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
    // return fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => result.items);
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        q: query,
        type: 'video',
        part: 'snippet',
        maxResults: 25,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // return fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&part=snippet &maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   );
  }
}

export default Youtube;
