import { useState } from "react";
import { Box, Button, TextField, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";

import axios from "axios";

const DogGallery = () => {
  const [amount, setAmount] = useState(1); 
  const [images, setImages] = useState<string[]>([]);

  const fetchDogs = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`);
      setImages(response.data.message);
    } catch (error) {
      console.error("Lỗi tải ảnh:", error);
    }
  };

  const clearImages = () => {
    setImages([]);
  };

  return (
    <Box sx={{ maxWidth: 1600, margin: "auto", textAlign: "left", mt: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="Amount *"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          inputProps={{ min: 1 }}
          sx={{ width: 100, mr: 2 }}
        />
        <Button variant="contained" sx={{ backgroundColor: "#1976D2", color: "white", mr: 1 }} onClick={fetchDogs}>
          LOAD 🐶
        </Button>
        <Button variant="outlined" sx={{ borderColor: "#9C27B0", color: "#9C27B0" }} onClick={clearImages}>
          CLEAR
        </Button>
      </Box>
      <hr />

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="200" image={src} alt={`Dog ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DogGallery;
