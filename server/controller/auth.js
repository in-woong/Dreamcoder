import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as userRepository from "../data/auth.js";

const bcryptSaltRounds = 10;
const jwtSecretKey = "secret";
const jwtExpiresInDays = "2d";

export const signup = async (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  const found = userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }

  const hashed = bcrypt.hashSync(password, bcryptSaltRounds);

  createUser({ username, password: hashed, name, email, url });
  const token = createJwtToken(username);
  res.status(200).json({ username, token });
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = userRepository.findByUsername(username);
  //login을 하면 id, isAdmin을 payload, 임의의 secret을 가지고, option을 주면서 token 생성
  
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  
  const token = createJwtToken(username);

  return res.status(200).json({ username, token });
};

export const me = (req, res, next) => {
  const { username, token } = req.body;

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.sendStatus(404);
    }
    res.status(200).send(decoded);
  });
};

function createJwtToken(id) {
  return jwt.sign(
    {
      id,
      isAdmin: false,
    },
    jwtSecretKey,
    { expiresIn: jwtExpiresInDays }
  );
}
