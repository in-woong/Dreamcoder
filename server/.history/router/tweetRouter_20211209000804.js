import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const router = express.Router();

router.get("/", tweetController.getByUsername);

router.get("/:id", tweetController.getById);

router.post("/", tweetController.postNew);

router.put("/:id", tweetController.putTweet);

router.delete("/:id", tweetController.deleteTweet);

export default router;
