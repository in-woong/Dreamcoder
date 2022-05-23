import { config } from '../config.js';
import Mongoose from 'mongoose';

export async function connectDB() {
  return Mongoose.connect(config.db.url) //
}

// TODO:(inwoong) Delete blow

export function getUsers() {
  return db.collection('users');
}

export function getTweets() {
  return db.collection('tweets');
}


export function useVirtualId(Schema) {
  Schema.virtual("id").get(function () {
    return this._id.toString();
  })
  Schema.set("toJSON", { virtuals: true });
  Schema.set("toObject", { virtuals: true });
}
