import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res, next) {
  const username = req.query.username;
  const data = username
    ? tweetRepository.filterByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
}

export function getTweet(req, res, next) {
  const id = req.params.id;
  const tweet = tweetRepository.findById(id);
  if (!tweet) {
    return res
      .status(404)
      .json({ message: `Ooooooooops It's not ID check ${id} Pleaaaaaase` });
  }
  res.status(200).json(tweet);
}

export function createTweet(req, res, next) {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.postNewTweet(text, name, username);
  res.status(201).json(tweet);
}

export function updateTweet(req, res, next) {
  const id = req.params.id;
  const { text } = req.body;
  const tweet = tweetRepository.findById(id);
  if (!tweet) {
    return res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
  tweet.text = text;
  res.status(200).json(tweet);
}

export function deleteTweet(req, res, next) {
  const id = req.params.id;
  tweetRepository.filterById(id);
  res.sendStatus(204);
}
