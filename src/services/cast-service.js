import Cast from "../models/Cast.js";

export default {
  getAll() {
    return Cast.find({});
  },

  createCast(castData) {
    return Cast.create(castData);
  },
};
