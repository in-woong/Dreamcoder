import express from "express";
import "express-validator";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const router = express.Router();

router.get("/", tweetController.getTweets);//getTweets

router.get("/:id", tweetController.getTweet);//getTweet

router.post("/", tweetController.createTweet);//createTweet

router.put("/:id", tweetController.updateTweet);//updateTweet

router.delete("/:id", tweetController.deleteTweet);

export default router;
