import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token)
      return res.status(403).json({ message: "You are not authorized" });
    const decodedData = jwt.verify(token, process.env.Jwt_Sec);
    req.user = await User.findById(decodedData._id);
    next();
  } catch (error) {
    res.status(500).json({ message: "You are not authorized" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "You are not authorized" });
  }
};
