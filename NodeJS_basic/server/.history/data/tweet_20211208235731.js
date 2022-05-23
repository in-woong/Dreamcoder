export let tweets = [
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
  
export function filterById(id) {
  return tweets.filter((tweet) => tweet.id !== id);
}
export function findById(id) {
  return tweets.find((tweet) => tweet.id === id);
}
export function filterByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}
