import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("homeView");
});

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
