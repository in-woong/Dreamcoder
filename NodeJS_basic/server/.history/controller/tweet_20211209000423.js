import * as tweetRepository from "../data/tweet.js";

export function getByUsername(req, res, next) {
    const username = req.query.username;
    const data = username
      ? tweetRepository.filterByUsername(username)
      : tweetRepository.getAll();
    res.status(200).json(data);
  }