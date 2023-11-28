import { Scholarship } from "../models/scholarship.js";

export const checkEligibility = async (req, res) => {
  try {
    const { minMarks, studentof, maxIncome, caste, religion } = req.body;
    const elligibleScholarships = await Scholarship.find({
      minMarks: { $lte: minMarks },
      studentof,
      maxIncome: { $gte: maxIncome },
      caste,
      religion,
    });
    res.status(200).json(elligibleScholarships);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
