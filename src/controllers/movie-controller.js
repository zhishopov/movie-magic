import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.findMovie(movieId);

  res.render("details", { movie });
});

movieController.post("/create", (req, res) => {
  console.log("POST MOVIE");

  const newMovie = req.body;
  console.log(newMovie);

  res.end();
});

export default movieController;
