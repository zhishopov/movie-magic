import { v4 as uuid } from "uuid";
import movies from "../movies.js";

export default {
  getAll(filter = {}) {
    let result = movies;

    if (filter.search) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    if (filter.genre) {
      result = result.filter((movie) =>
        movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
      );
    }

    return result;
  },

  findMovie(movieId) {
    // TODO: handle logic if there is no movie in colelction
    const movie = movies.find((movie) => movie.id === movieId);
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
