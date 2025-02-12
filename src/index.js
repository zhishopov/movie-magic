import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import routes from "./routes.js";
import showRatingHelper from "./helpers/rating-helper.js";

// import movies from "../movies.js";

const app = express();

// db configuration
try {
  const uri = "mongodb://localhost:27017/movie-magic";
  await mongoose.connect(uri);

  console.log("Connected to DB");
} catch (error) {
  console.log("Cannot connect to DB");

  console.log(error.message);
}

// handlebars configuration
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      showRating: showRatingHelper,
    },
  })
);

// Express Settings
app.set("view engine", "hbs");
app.set("views", "./src/views");

// Middlewares
app.use("/static", express.static("src/public")); // Take all static files (styles, images, etc)
app.use(express.urlencoded({ extended: false })); // Teach express to read form data

// Routing
app.use(routes);

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
