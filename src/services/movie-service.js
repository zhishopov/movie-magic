import { v4 as uuid } from "uuid";
import movies from "../movies.js";

export default {
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
    });

    return newId;
  },
};
