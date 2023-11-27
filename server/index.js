import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello from Backend!!!"));

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
