import express from "express";
import dotenv from "dotenv";
import config from "./config/config.js";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import "./config/db.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = config.app.port;
// const PORT = process.env.PORT || 3000;
// const URI = process.env.mongoDbURI;
// connect to database

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
