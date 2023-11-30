import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useState } from "react";
import Scholarships from "./Scholarships";

function SearchScholarship() {
  const [scholarships, setScholarships] = useState([]);
  const phone = useMediaQuery("(max-width:600px)");
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
          width: phone ? 300 : 480,
          p: 4,
          my: 5,
          pb: 7,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" mb={phone ? 1 : 2}>
          Find your scholarship
        </Typography>
        <Typography mb={4}>Enter your details here</Typography>
        <Form setScholarships={setScholarships} phone={phone} />
      </Card>
      <Scholarships scholarships={scholarships} phone={phone} />
    </Box>
  );
}

export default SearchScholarship;
