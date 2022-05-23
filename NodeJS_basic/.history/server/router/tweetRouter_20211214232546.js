import express from "express";
import "express-validator";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const validate = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(400).json({message:errors.array()[0].msg})
}

const router = express.Router();

router.get("/", tweetController.getTweets); //getTweets

router.get("/:id", tweetController.getTweet); //getTweet

router.post(
  "/",
  [
    body("text")
      .trim()
      .isLength({ min: 3 })
      .withMessage("text should be at least 3 charactrers"),

  ],
  tweetController.createTweet
); //createTweet

router.put("/:id", tweetController.updateTweet); //updateTweet

router.delete("/:id", tweetController.deleteTweet);

export default router;
