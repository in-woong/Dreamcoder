import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import tweetsRouter from "./router/s.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "I can't find anything" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "There are something wrong" });
});

app.listen(8080);
