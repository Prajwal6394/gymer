import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "24px" } }}
        mb="23px" mt = "30px"
      >
        Eat, Excrete <br /> and Exercise
      </Typography>
      <Typography fontSize="22px" LineHeight="35px" mb={3}>
        Check out the most effective exercises.
      </Typography>
      <Button href="#exercises" variant="contained" color="error" mb="4px" sx={{backgroundcolor:"#ff2625", padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Banner-Image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
