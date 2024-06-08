// auth.cjs
const express = require("express");
const { Register, Login } = require("../controllers/authController"); // Corrected import path

const authRouter = express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", Login)

module.exports = authRouter;
