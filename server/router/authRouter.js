import express from "express";

const router = express.Router();

let users = [
  {
    username: "ellie",
    password: "12345",
    name: "Ellie",
    email: "ellie@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019//11/free-profile-photo-whatsapp-1.png",
  },
];

router.post("/signup", (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  if (users.find((user) => user.username == username)) {
    console.log("SomeOne already have this Username");
    return res.sendStatus(404);
  }
  const newUser = { username, password, name, email, url };
  users.push(newUser);
  res.status(200).json(users);
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);
  console.log("fuck");
  if (user.password == password) {
    return res
      .status(200)
      .json({ username: user.username, password: user.password });
  }
});

router.get("/me", (req,res,next)=>{
    //내 토큰을 보내서, 토큰이 유효한지 확인
    res.sendStatus(200);
});

export default router;
