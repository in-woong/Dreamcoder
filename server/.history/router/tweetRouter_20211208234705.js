import express from "express";
import "express-async-errors";
import { findById } from "../data/tweet";

const router = express.Router();


router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (!tweet) {
    return res
      .status(404)
      .json({ message: `Ooooooooops It's not ID check ${id} Pleaaaaaase` });
  }
  res.status(200).json(tweet);
});

router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    createdAt: new Date().toString(),
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  const tweet = findById(id)
  if (!tweet) {
    return res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
  tweet.text = text;
  res.status(200).json(tweet);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
