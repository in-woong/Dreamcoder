import { getUsers } from '../db/database.js';
import MongoDb from 'mongodb';
const ObjectId = MongoDb.ObjectId;

export function findByUsername(username) {
  return getUsers() //
    .findOne({ username })
    .then(mapOptionalUser);
}

export function findById(id) {
  return getUsers()
    .findOne({ _id: new ObjectId(id) })
    .then(mapOptionalUser);
}
export function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => {
      return (user = data.insertedId.toString());
    });
}

function mapOptionalUser(user) {
  console.log('user', user._id);
  return user ? { ...user, id: user._id } : null;
}
