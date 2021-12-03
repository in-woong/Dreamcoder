import express from "express";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());