import jwt from "jsonwebtoken";

import * as userRepository from "../data/auth.js";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorizatoin");
  if (!(authHeader && authHeader.startWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = await userRepository.findByUsername(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }

    req.userId = user.id;
    next();
  });
};
