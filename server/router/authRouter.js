import express from "express";
import "express-async-errors";

import { body } from "express-validator";
import validate from "../middleware/validator.js";

import * as authController from "../controller/auth.js";
import isAuth from "../middleware/auth.js";

const validateCredential = [
  body("username")
    .trim()
    .isLength({ min: 5 })
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
  body("url")
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

const router = express.Router();

router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredential, authController.login);

router.get("/me", isAuth, authController.me);

export default router;
