import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js";
import showRatingHelper from "./helpers/rating-helper.js";

// import movies from "../movies.js";

const app = express();

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
