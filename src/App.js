import React from "react";
import './App.css';
import TourCard from './components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from "./components/AppBar";
import cities from "./data.json"
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{marginY: 5}}>
        {/* iterate over cities in json file. */}
        {cities.map((city) => (
          // wrap typography with fragment
          <>
            <Typography 
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {/* For each tour, return a TourCard, pass each tour as prop, get index for key */}
              {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/>)}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
