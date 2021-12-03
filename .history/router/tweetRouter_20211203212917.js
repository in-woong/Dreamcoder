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
  console.log(text)
  const newTweet = {
    id: new Date().toString(),
    text,
    name,
    username,
    url,
    createdAt: Date.now().toString(),
  };
  tweets = [...tweets, newTweet];
  res.status(200).json(tweetsF)
});

export default router;
