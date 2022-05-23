import express from "express";

const router = express.Router();

let tweets = [
  {
      id:"1",
    text: "first One",
    name: "Ellie",
    username: "ellie",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
    createdAt: new Date().toString(),
  },
  {
      id:"2",
    text: "Second One",
    name: "Ellie",
    username: "ellie",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
    createdAt: new Date().toString(),
  },
];

router.get("/", (req, res, next) => {
  const username = req.query.username;
  res.status(200).json({ message: "goodF" });
});

export default router;
