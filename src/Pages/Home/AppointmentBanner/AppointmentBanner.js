import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Box, display } from "@mui/system";
import doctor from "./../../../images/doctor.png";
import bg from "./../../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.85)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ mb: 4 }}
              variant="h6"
              style={{ color: "#33F6FF" }}
            >
              APPOINTMENT
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an appointment Today
            </Typography>
            <Typography
              variant="h4"
              sx={{ my: 4 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate repellat repellendus beatae quo sapiente quasi. Lorem
              ipsum dolor sit amet.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#33F6FF" }}>
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
