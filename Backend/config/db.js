import mongoose from "mongoose";
import config from "./config.js";

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to mongodb atlast");
  })
  .catch((error) => {
    console.log("Error :", error);
    process.exit(1);
  });
