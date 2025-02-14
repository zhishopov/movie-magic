import { Router } from "express";
import bcrypt from "bcrypt";

const authController = Router();

authController.get("/register", (req, res) => {
  res.render("auth/register");
});

authController.post("/register", async (req, res) => {
  const userData = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password, salt);

  // console.log(salt);
  // console.log(hash);
  res.redirect("/");
});

export default authController;
