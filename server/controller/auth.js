import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as userRepository from "../data/auth.js";

const bcryptSaltRounds = 10;
export const jwtSecretKey = "secret";
const jwtExpiresInDays = "2";

export const signup = async (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  const found = userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }

  const hashed = bcrypt.hashSync(password, bcryptSaltRounds);

  userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
    id: Date.now().toString(),
  });
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

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}

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
