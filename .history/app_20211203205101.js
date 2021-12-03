import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());
