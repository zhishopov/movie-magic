import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let query = {};

    if (filter.search) {
      // TODO: Fix partial case insensitive search
      query.title = { $regex: filter.search, $options: "i" };
    }

    if (filter.genre) {
      query.genre = filter.genre;
    }

    if (filter.year) {
      query.year = Number(filter.year);
    }

    return Movie.find(query);
  },

  getOne(movieId) {
    // TODO: handle logic if there is no movie in colelction
    const movie = Movie.findById(movieId);
    return movie;
  },

  createMovie(movieData) {
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });

    return newId;
  },
};
