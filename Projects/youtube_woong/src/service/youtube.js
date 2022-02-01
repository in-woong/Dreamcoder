export default class Youtube {
  constructor(HTTPClient) {
    this.youtube = HTTPClient;
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
  }

  async search(text) {
    const response = await this.youtube.get('search', {
      params: {
        q: text,
        part: 'snippet',
        maxResults: 25,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}
