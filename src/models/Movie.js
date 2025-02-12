import { Schema, model } from "mongoose";

// Create Schema
const movieSchema = new Schema({
  title: String,
  category: String,
  genre: String,
  director: String,
  year: Number,
  imageURL: String,
  rating: Number,
  description: String,
});

// Create Model
const Movie = model("Movie", movieSchema);

export default Movie;
