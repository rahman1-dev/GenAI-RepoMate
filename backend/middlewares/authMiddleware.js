import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const authMidleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "Invalid user" });
    }

    const payload = token.verify(token, process.env.JWT_SECRET);

    // Store decoded user information in req.user
    req.user = payload;

    // Continue to the next middleware/controller
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};
