import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  const username = req.query.username;
  console.log(username);
  res.status(200).json({message:"goodF"})
});

export default router;
