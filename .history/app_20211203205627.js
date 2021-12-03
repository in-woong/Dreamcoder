import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import tweetRouter from "./router/tweetRouter.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/tweets", tweetRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "I can't find anything" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "There are something wrong" });
});

app.listen(8080);
