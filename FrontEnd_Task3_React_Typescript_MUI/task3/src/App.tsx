import React from "react";
import DogGallery from "./components/DogGallery";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{  textAlign: "center" }}>
        🐶 
      </Typography>
      <DogGallery />
    </Container>
  );
};

export default App;
