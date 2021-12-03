import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query;
  console.log(query);
});

export default router;
