import express from "express";
import { body } from "express-validator";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import validate from "../middleware/validator.js";
import isAuth from "../middleware/auth.js";

const router = express.Router();

const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("text should be at least 3 charactrers"),
  validate,
];

router.get("/", tweetController.getTweets); //getTweets

router.get("/:id", tweetController.getTweet); //getTweet

router.post("/", validateTweet, isAuth, tweetController.createTweet); //createTweet

router.put("/:id", validateTweet, isAuth, tweetController.updateTweet); //updateTweet

router.delete("/:id", isAuth, tweetController.deleteTweet);

export default router;
