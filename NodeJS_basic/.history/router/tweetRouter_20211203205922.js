import express from "express";

const router = express.Router();

router.get("/?username=:username", (req, res, next) => {
  const query = req.query;
  console.log(query);
});

export default router;
