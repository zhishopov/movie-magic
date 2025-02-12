import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/search", async (req, res) => {
  const filter = req.query;

  const movies = await movieService.getAll(filter).lean();
  res.render("search", { movies, filter });
});

movieController.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  res.render("details", { movie });
});

movieController.post("/create", (req, res) => {
  const newMovie = req.body;

  movieService.createMovie(newMovie);

  res.redirect("/");
});

export default movieController;
