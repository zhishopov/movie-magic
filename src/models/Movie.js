import { Schema, model, Types } from "mongoose";

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
  casts: [
    {
      type: Types.ObjectId,
      ref: "Cast",
    },
  ],
});

// Create Model
const Movie = model("Movie", movieSchema);

export default Movie;
