let tweets = [
  {
    id: "1",
    text: "first One",
    name: "Ellie",
    username: "ellie",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
    createdAt: new Date().toString(),
  },
  {
    id: "2",
    text: "Second One",
    name: "Ellie",
    username: "ellie",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
    createdAt: new Date().toString(),
  },
];

export async function getAll() {
  return tweets;
}

export async function filterById(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  
  return tweets;
}
export async function findById(id) {
  return tweets.find((tweet) => tweet.id === id);
}
export async function filterByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function postNewTweet(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    createdAt: new Date().toString(),
  };
  tweets = [tweet, ...tweets];

  return tweet;
}
