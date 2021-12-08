export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: {
        text,
        name: "ellie",
        username: "Ellie",
      },
    });
    const data = response.json();
    return data
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error("tweet not found!");
    }
    tweet.text = text;
    return tweet;
  }
}
