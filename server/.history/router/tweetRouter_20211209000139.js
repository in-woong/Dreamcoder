import express from "express";
import "express-async-errors";
import * as tweetRepository from "../data/tweet.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.filterByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.findById(id);
  if (!tweet) {
    return res
      .status(404)
      .json({ message: `Ooooooooops It's not ID check ${id} Pleaaaaaase` });
  }
  res.status(200).json(tweet);
});

router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.getNewTweet(text, name, username);
  res.status(201).json(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  const tweet = findById(id);
  if (!tweet) {
    return res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
  tweet.text = text;
  res.status(200).json(tweet);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = filterById(id);
  res.sendStatus(204);
});

export default router;
