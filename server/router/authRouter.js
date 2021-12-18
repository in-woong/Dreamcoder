import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const hashNum = 10;

let users = [
  {
    username: "ellie",
    password: "$2b$10$4HRXP76rkUqDOY9/bUa0duaeI8BebbuhV.BSuO00Rn3ONAcXi6UD.",
    name: "Ellie",
    email: "ellie@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019//11/free-profile-photo-whatsapp-1.png",
  },
];

const secret = "secret";

router.post("/signup", (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  if (users.find((user) => user.username == username)) {
    console.log("SomeOne already have this Username");
    return res.sendStatus(404);
  }

  const hashed = bcrypt.hashSync(password, hashNum);

  const newUser = { username, password: hashed, name, email, url };
  users.push(newUser);
  const token = jwt.sign(
    {
      id: username,
      isAdmin: false,
    },
    secret
  );
  res.status(200).json({ username, token });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);
  //login을 하면 id, isAdmin을 payload, 임의의 secret을 가지고, option을 주면서 token 생성
  const result = bcrypt.compareSync(password, user.password);
  if (!result) {
    return res.sendStatus(404);
  }
  const token = jwt.sign(
    {
      id: username,
      isAdmin: false,
    },
    secret
  );

  return res.status(200).json({ username: user.username, token });
});

router.get("/me", (req, res, next) => {
  const { username, token } = req.body;

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.sendStatus(404);
    }
    res.status(200).send(decoded);
  });
});

export default router;
