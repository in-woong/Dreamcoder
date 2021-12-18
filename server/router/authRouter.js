import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { body } from "express-validator";
import validate from "../middleware/validator";

import * as authController from "../controller/auth";

const validateCredential = [
  body("username")
    .trim()
    .isEmpty()
    .isLength({ min: 3 })
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
  body("email").isEmail().normalizeEmail().normalizeEmail("invalid email"),
  body("url")
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

const router = express.Router();


router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredential, authController.login);

router.get("/me", authController.me);

export default router;
