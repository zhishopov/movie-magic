import { Router } from "express";
import movieService from "../services/movie-service.js";

const router = Router();

router.get("/", async (req, res) => {
  // Convert Documents to Array of objects
  const movies = await movieService.getAll().lean();

  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
