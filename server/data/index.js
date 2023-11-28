import mongoose from "mongoose";
import dotenv from "dotenv";
import { Scholarship } from "../models/scholarship.js";
import { scholarships } from "./scholarships.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const scholarshipsEntry = async () => {
  try {
    await Scholarship.deleteMany({});
    scholarships.map(async (scholarship) => {
      const newScholarship = new Scholarship({
        name: scholarship.name,
        description: scholarship.description,
        residence: scholarship.eligibility.residence,
        minMarks: scholarship.eligibility.minmarks,
        maxIncome: scholarship.eligibility.maxincome,
        website: scholarship.website,
      });
      scholarship.eligibility.studentof.map((studentType) =>
        newScholarship.studentof.push(studentType)
      );
      scholarship.eligibility.castecriteria.map((caste) =>
        newScholarship.caste.push(caste)
      );
      scholarship.eligibility.religioncriteria.map((religion) =>
        newScholarship.religion.push(religion)
      );
      await newScholarship.save();
    });
  } catch (error) {
    console.log(error);
  }
};

mongoose
  .connect("mongodb://127.0.0.1:27017/pr501")
  .then(() => console.log("DB connected"))
  .then(() => {
    scholarshipsEntry().then(() => console.log("Done!"));
  })
  .catch((err) => console.log(err.message));
