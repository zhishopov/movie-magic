import express from "express";
import handlebars from "express-handlebars";

import movies from "../movies.js";

const app = express();

app.use(express.static("public"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("homeView", { movies });
});

app.get("/create", (req, res) => {
  res.render("createView");
});

app.get("/search", (req, res) => {
  res.render("searchView");
});

app.get("/about", (req, res) => {
  res.render("aboutView");
});

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
