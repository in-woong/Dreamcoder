import express from "express";
import "express-async-errors";

const router = express.Router();

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

router.get("/", (req, res, next) => {
  const username = req.query.username;
  if (username) {
    const foundTweets = tweets.filter((tweet) => tweet.username === username);
    return res.status(200).json(foundTweets);
  }
  res.status(200).json(tweets);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const foundTweets = tweets.find((tweet) => tweet.id === id);
  if (!foundTweets) {
    return res
      .status(404)
      .json({ message: "Ooooooooops It's not ID check id Pleaaaaaase" });
  }
  res.status(200).json(foundTweets);
});

router.post("/", (req, res, next) => {
  const { text, name, username, url } = req.body;
  const newTweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    url,
    createdAt: new Date().toString(),
  };
  tweets = [...tweets, newTweet];
  res.status(201).json(tweets);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  if (!id) {
    return res.status(404).json({ message: "there is no id" });
  }
  const foundTweet = tweets.find((tweet) => tweet.id === id);
  foundTweet.text = text;
  res.status(200).json(tweets);
});

export default router;
