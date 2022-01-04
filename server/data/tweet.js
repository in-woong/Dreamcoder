import Mongoose from "mongoose";
import { useVirtualId } from "../db/database.js";
import * as UserRepository from "./auth.js"

const tweetSchema = new Mongoose.Schema({
  text: { type: String, required: true },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  url: String,
}, { timestamps: true });

useVirtualId(tweetSchema);
const Tweet = Mongoose.model("Tweet", tweetSchema)

export async function getAll() {
  return Tweet.find().sort({ createdAt: -1 });
  //Promise.all을 하면 return 값이 tweet으로 대체되고, then으로 나올때의 결과값은?
  // return Promise.all(
  //   tweets.map(async (tweet) => {
  //     const { username, name, url } = await userRepository.findById(
  //       tweet.userId
  //     );
  //     return { ...tweet, username, name, url };
  //   })
  // );
}
export async function findById(id) {
  return Tweet.findById(id)
  // const found = tweets.find((tweet) => tweet.id === id);
  // if (!found) {
  //   return null;
  // }
  // const { username, name, url } = await userRepository.findById(found.userId);
  // return { ...found, username, name, url };
}

export async function filterByUsername(username) {
  return Tweet.find({ username }).sort({ createdAt: -1 })
  // return getAll().then((tweets) =>
  //   tweets.filter((tweet) => tweet.username === username)
  // );
}

export async function postNewTweet(text, userId) {
  return UserRepository.findById(userId).then(user => {
    console.log(user);
    return new Tweet({
      text, userId, name: user.name, username: user.username,
    }).save()})
  // const tweet = {
  //   id: Date.now().toString(),
  //   text,
  //   createdAt: new Date().toString(),
  //   userId,
  // };
  // tweets = [tweet, ...tweets];
}

export async function update(id, text) {
  return Tweet.findByIdAndUpdate(id, { text }, { returnOriginal: false })
  // const tweet = tweets.find((tweet) => tweet.id === id);
  // if (tweet) {
  //   tweet.text = text;
  // }
  // return findById(tweet.id);
}

export async function remove(id) {
  return Tweet.findByIdAndRemove(id);
  // tweets = tweets.filter((tweet) => tweet.id !== id);
}
