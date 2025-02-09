import { Router } from "express";
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movie-controller.js";
import detailsController from "./controllers/details-controller.js";

const routes = Router();

routes.use(homeController);
routes.use("/movies", movieController);
routes.use("/movies", detailsController);

routes.get("*", (req, res) => {
  res.render("404");
});

export default routes;
