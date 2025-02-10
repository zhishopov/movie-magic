import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/search", (req, res) => {
  const filter = req.query;

  const movies = movieService.getAll(filter);
  res.render("search", { movies });
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.findMovie(movieId);

  res.render("details", { movie });
});

movieController.post("/create", (req, res) => {
  const newMovie = req.body;

  movieService.createMovie(newMovie);

  res.redirect("/");
});

export default movieController;
