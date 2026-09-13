import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Token not provided" });
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
      return res.status(401).json({ msg: "Invalid token" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};
