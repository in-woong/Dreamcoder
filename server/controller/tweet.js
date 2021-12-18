import * as tweetRepository from "../data/tweet.js";

export async function getTweets(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.filterByUsername(username)
    : tweetRepository.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res, next) {
  const id = req.params.id;
  const tweet = await tweetRepository.findById(id);
  if (!tweet) {
    return res
      .status(404)
      .json({ message: `Ooooooooops It's not ID check ${id} Pleaaaaaase` });
  }
  res.status(200).json(tweet);
}

export async function createTweet(req, res, next) {
  const { userId } = req;
  const { text } = req.body;
  const tweet = await tweetRepository.postNewTweet(text, userId);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res, next) {
  const id = req.params.id;
  const { text } = req.body;

  const tweet = await tweetRepository.update(id, text);
  if (!tweet) {
    return res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
  res.status(200).json(tweet);
}

export async function deleteTweet(req, res, next) {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
}
