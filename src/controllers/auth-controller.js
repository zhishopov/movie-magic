import { Router } from "express";

const authController = Router();

authController.get("/register", (req, res) => {
  res.render("auth/register");
});

authController.post("/register", (req, res) => {
  const { email, password, repass } = req.body;

  res.redirect("/");
});

export default authController;
