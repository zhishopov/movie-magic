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

  createMovie(movieData) {
    const movie = Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year: Number(movieData.year),
    });

    return movie._id;
  },

  async attachCast(movieId, castId) {
    // Attach Cast Method #1
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // await movie.save();
    // return movie;

    // Attach Cast Method #2
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } }); // TODO: Store character name and display it
  },
};
