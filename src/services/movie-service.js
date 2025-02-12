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
    const movie = Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year: Number(movieData.year),
    });

    return movie._id;
  },
};
