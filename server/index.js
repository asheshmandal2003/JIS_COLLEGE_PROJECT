import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import scholarshipsRoute from "./routes/scholarships.js";
import checkEligibilityRoute from "./routes/checkEligibility.js";

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
app.use(express.json());
app.use("/", scholarshipsRoute);
app.use("/", checkEligibilityRoute);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
