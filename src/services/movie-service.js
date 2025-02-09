import movies from "../movies.js";

function findMovie(movieId) {
  // TODO: handle logic if there is no movie in colelction
  const movie = movies.find((movie) => movie.id === movieId);
  return movie;
}

export default {
  findMovie,
};
