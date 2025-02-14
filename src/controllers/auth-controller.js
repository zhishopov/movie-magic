import { Router } from "express";
import bcrypt from "bcrypt";
import authService from "../services/auth-service.js";

const authController = Router();

authController.get("/register", (req, res) => {
  res.render("auth/register");
});

authController.post("/register", async (req, res) => {
  const userData = req.body;

  await authService.register(userData);

  res.redirect("/");
});

export default authController;
