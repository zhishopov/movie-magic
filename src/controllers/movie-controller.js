import { Router } from "express";
import movieService from "../services/movie-service.js";
import castService from "../services/cast-service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", async (req, res) => {
  const newMovie = req.body;
  const newId = req.user?.id;

  await movieService.createMovie(newMovie, newId);

  res.redirect("/");
});

movieController.get("/search", async (req, res) => {
  const filter = req.query;

  const movies = await movieService.getAll(filter).lean();
  res.render("search", { movies, filter });
});

movieController.get("/:movieId/details", async (req, res) => {
  console.log(req.user);

  const movieId = req.params.movieId;
  const movie = await movieService.getOneWithCasts(movieId).lean();
  const isCreator = movie.creator?.equals(req.user?.id);

  res.render("movie/details", { movie, isCreator });
});

movieController.get("/:movieId/attach-cast", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();
  const casts = await castService.getAll({ exclude: movie.casts }).lean();

  res.render("movie/attach-cast", { movie, casts });
});

movieController.post("/:movieId/attach-cast", async (req, res) => {
  const castId = req.body.cast;
  const movieId = req.params.movieId;

  await movieService.attachCast(movieId, castId);

  res.redirect(`/movies/${movieId}/details`);
});

movieController.get("/:movieId/delete", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);

  if (!movie.creator?.equals(req.user?.id)) {
    return res.redirect("/404");
  }

  await movieService.delete(movieId);

  res.redirect("/");
});

movieController.get("/:movieId/edit", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  const categories = getCategoriesViewData(movie.category);
  console.log(categories);

  res.render("movie/edit", { movie, categories });
});

movieController.post("/:movieId/edit", async (req, res) => {
  const movieData = req.body;
  const movieId = req.params.movieId;

  // TODO: Check if creator (req.user.id -> take creator)

  await movieService.update(movieId, movieData);

  res.redirect(`/movies/${movieId}/details`);
});

function getCategoriesViewData(category) {
  const categoriesMap = {
    "tv-show": "TV Show",
    animation: "Animation",
    movie: "Movie",
    documentary: "Documentary",
    "short-film": "Short Film",
  };

  const categories = Object.keys(categoriesMap).map((value) => ({
    value,
    label: categoriesMap[value],
    selected: value === category ? "selected" : "",
  }));

  return categories;
}

export default movieController;
