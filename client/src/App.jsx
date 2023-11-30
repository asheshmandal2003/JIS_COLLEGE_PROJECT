import { Box } from "@mui/material";
import SearchScholarship from "./components/search/SearchScholarship";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SearchScholarship />
    </Box>
  );
}

export default App;
