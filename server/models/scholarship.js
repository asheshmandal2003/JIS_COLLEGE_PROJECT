import mongoose from "mongoose";

const { Schema } = mongoose;

const scholarshipSchema = new Schema({
  name: String,
  description: String,
  residence: String,
  minMarks: Number,
  studentof: {
    type: [String],
    enum: ["pre-matric", "post-matric", "merit-cum-means"],
  },
  maxIncome: Number,
  caste: {
    type: [String],
    enum: ["General", "OBC", "SC", "ST"],
  },
  religion: {
    type: [String],
    enum: ["Hindu", "Minority"],
  },
  website: String,
});

export const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
