export const scholarships = (req, res) => {
  try {
    res.sendFile("/JIS_COLLEGE_PROJECT/server/scholarships.json");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
