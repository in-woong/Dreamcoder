import { useVirtualId } from '../db/database.js';
import Mongoose from "mongoose"

const userSchema = new Mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  url: String
})


useVirtualId(userSchema);

const User = Mongoose.model("User", userSchema);

export function findByUsername(username) {
  return User.findOne({ username });
  // return getUsers() //
  //   .findOne({ username })
  //   .then(mapOptionalUser);
}

export function findById(id) {
  return User.findById(id);
  // return getUsers()
  //   .findOne({ _id: new ObjectId(id) }).next()
  //   .then(mapOptionalUser);
}
export function createUser(user) {
  return new User(user).save().then(data => data.id)
  // return getUsers()
  //   .insertOne(user)
  //   .then((data) => {
  //     return (user = data.insertedId.toString());
  //   });
}

function mapOptionalUser(user) {
  console.log('user', user._id);
  return user ? { ...user, id: user._id } : null;
}
