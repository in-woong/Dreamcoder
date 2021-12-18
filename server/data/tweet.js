import * as userRepository from "./auth.js";

let tweets = [
  {
    id: "1",
    text: "first One",
    createdAt: new Date().toString(),
    userId: "1",
  },
  {
    id: "2",
    text: "Second One",
    createdAt: new Date().toString(),
    userId: "1",
  },
];

export async function getAll() {
  //Promise.all을 하면 return 값이 tweet으로 대체되고, then으로 나올때의 결과값은?
  return Promise.all(
    tweets.map(async (tweet) => {
      const { username, name, url } = await userRepository.findById(
        tweet.userId
      );
      return { ...tweet, username, name, url };
    })
  );
}
export async function findById(id) {
  const found = tweets.find((tweet) => tweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function filterByUsername(username) {
  return getAll().then((tweets) =>
    tweets.filter((tweet) => tweet.username === username)
  );
}

export async function postNewTweet(text, userId) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    userId,
  };
  tweets = [tweet, ...tweets];

  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return findById(tweet.id);
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
