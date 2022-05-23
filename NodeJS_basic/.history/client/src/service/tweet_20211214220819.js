export default class TweetService {
  constructor(http) {
    this.http = http;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    return await this.http.fetch(`/tweets${query}`, {
      method: "GET",
    });
  }

  async postTweet(text) {
    return await this.http.fetch(`/tweets`, {
      method: "POST",
      body: JSON.stringify({
        text,
        name: "Ellie",
        username: "ellie",
      }),
    });
  }

  async deleteTweet(tweetId) {
    return await  this.http.fetch(`/tweets/${tweetId}`, {
      method: "DELETE",
    });
  }

  async updateTweet(tweetId, text) {
    return await this.http.fetch(`/tweets/${tweetId}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
    });
  }
}