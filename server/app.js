import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import tweetsRouter from './router/tweetRouter.js';
import authRouter from './router/authRouter.js';
import { connectDB} from './db/database.js';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  console.log(config.host.port);
  res.status(404).json({ message: "I can't find anything" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'There are something wrong' });
});
connectDB()
  .then((db) => {
    console.log('init!', db);
    app.listen(config.host.port);
  })
  .catch(console.error);
