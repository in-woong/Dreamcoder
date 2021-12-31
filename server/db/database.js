import { config } from '../config.js';

import MongoDb from 'mongodb';

export async function connectDB() {
  return MongoDb.MongoClient.connect(config.db.url)//
  .then((client) => client.db());
}
