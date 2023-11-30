import { Box, Card, Typography } from "@mui/material";
import Form from "./Form";
import { useState } from "react";
import Scholarships from "./Scholarships";

function SearchScholarship() {
  const [scholarships, setScholarships] = useState([]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mb: 7,
      }}
    >
      <Card
        sx={{
          width: 480,
          p: 4,
          my: 5,
          pb: 7,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" mb={2}>
          Find your scholarship
        </Typography>
        <Typography mb={4}>Enter your details here</Typography>
        <Form setScholarships={setScholarships} />
      </Card>
      <Scholarships scholarships={scholarships} />
    </Box>
  );
}

export default SearchScholarship;
