import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", async (req, res) => {
  const newMovie = req.body;

  await movieService.createMovie(newMovie);

  res.redirect("/");
});

movieController.get("/search", async (req, res) => {
  const filter = req.query;

  const movies = await movieService.getAll(filter).lean();
  res.render("search", { movies, filter });
});

movieController.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  res.render("movie/details", { movie });
});

movieController.get("/:movieId/attach-cast", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();
  res.render("movie/attach-cast", { movie });
});

export default movieController;
