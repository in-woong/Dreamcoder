import jwt from "jsonwebtoken";
import { config } from "../config.js";

import * as userRepository from "../data/auth.js";

const AUTH_ERROR = { message: "Authentication Error" };

const isAuth = async (req, res, next) => {
  console.log("token");
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = userRepository.findByUsername(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }

    req.token = token;
    req.userId = user.id;
    next();
  });
};

export default isAuth;
