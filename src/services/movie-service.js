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
    const result = Movie.findById(movieId);

    return result;
  },
  getOneWithCasts(movieId) {
    return this.getOne(movieId).populate("casts");
  },

  createMovie(movieData, creatorId) {
    const movie = Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year: Number(movieData.year),
      creator: creatorId,
    });

    return movie._id;
  },

  async attachCast(movieId, castId) {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } }); // TODO: Store character name and display it
  },

  delete(movieId) {
    return Movie.findByIdAndDelete(movieId);
  },

  update(movieId, movieData) {
    return Movie.findByIdAndUpdate(movieId, movieData);
  },
};
