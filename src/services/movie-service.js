import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let query = Movie.find({});

    if (filter.search) {
      // TODO: Fix partial case insensitive search
      query = query.find({ title: filter.search });
    }

    if (filter.genre) {
      query = query.find({ genre: filter.genre });
    }

    if (filter.year) {
      query = query.find({ year: Number(filter.year) });
    }

    return query;
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
