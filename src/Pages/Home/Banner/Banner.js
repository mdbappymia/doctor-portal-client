import React from "react";
import Grid from "@mui/material/Grid";
import chair from "./../../../images/chair.png";
import bg from "./../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  backgroundImage: `url(${bg})`,
};
const varticalAlign = {
  height: "400px",
  display: "flex",
  alignItems: "center",
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...varticalAlign, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h2">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, color: "gray", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quo at laboriosam voluptatibus iste non quis deserunt
              iusto doloribus natus?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#33F6FF" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={varticalAlign}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
