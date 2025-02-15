import User from "../models/User.js";
import bcrypt from "bcrypt";

export default {
  register(userData) {
    return User.create(userData);
  },

  async login(email, password) {
    // Check users exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password!");
    }

    // Check password is correct
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Invalid email or password!");
    }
    // Generate token
    // Return token
    return;
  },
};
