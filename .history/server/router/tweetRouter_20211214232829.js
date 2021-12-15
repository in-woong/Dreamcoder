import express from "express";
import "express-validator";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import validate from "../middleware/validator.js";



const router = express.Router();

const validateTweet =   [
    body("text")
      .trim()
      .isLength({ min: 3 })
      .withMessage("text should be at least 3 charactrers"),
    validate
  ]


router.get("/", tweetController.getTweets); //getTweets

router.get("/:id", tweetController.getTweet); //getTweet

router.post(
  "/",
  [
    body("text")
      .trim()
      .isLength({ min: 3 })
      .withMessage("text should be at least 3 charactrers"),
    validate
  ],
  tweetController.createTweet
); //createTweet

router.put("/:id", tweetController.updateTweet); //updateTweet

router.delete("/:id", tweetController.deleteTweet);

export default router;
