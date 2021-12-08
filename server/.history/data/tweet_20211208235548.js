export function filterById(id) {
  return tweets.filter((tweet) => tweet.id !== id);
}
export function findById(id) {
  return tweets.find((tweet) => tweet.id === id);
}
export function filterByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}
