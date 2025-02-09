import express from "express";
import handlebars from "express-handlebars";
import homeController from "./controllers/home-controller.js";

// import movies from "../movies.js";

const app = express();

app.use("/static", express.static("src/public"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(homeController);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
