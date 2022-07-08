import React from "react";
// Gives paper feel to components
import Paper from '@mui/material/Paper';
// Use grid format
import Grid from '@mui/material/Grid';
// Font types
import Typography from '@mui/material/Typography';
// Used to wrap other components
import Box from "@mui/material/Box";
// Library for icons
import AccessTime from "@mui/icons-material/AccessTime"
// Used for star ratings.
import Rating from '@mui/material/Rating';
// Create custom themes for styles. Provider wraps around areas of use.
import { createTheme, ThemeProvider } from "@mui/material";


// Create a theme object
const theme = createTheme({
    // customize the typography component.
    components: {
        // declare which mui component to customize
        MuiTypography: {
            // array of objects as variants.
            variants: [
                {
                    // prop handle on 'variant="body2"'
                    props: {
                        variant: "body2"
                    },
                    // if matched, Change to: 
                    style: {
                        fontSize: 11
                    }
                },
                {
                    // prop handle on 'variant="body3"'
                    props: {
                        variant: "body3"
                    },
                    // if matched, Change to: 
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

// Tour card component, accept passed param: tour.
const TourCard = ({tour}) => {
    return (
        // {3} out of a MAX 12. 
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img 
                    src={tour.image}
                    alt=""
                    className="img" 
                    />
                    {/* padding of {1} in x axis */}
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box
                            // sx to define custome styles of this 'Box' component.
                            // Flex to grow/shrink in custom space.
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            {/* Render time icon */}
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: 3
                            }}
                        >
                            {/* precision allows for % values */}
                            <Rating name="read-only" value={tour.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From €{tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

// Export component.
export default TourCard