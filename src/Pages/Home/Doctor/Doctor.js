import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, image } = doctor;
  return (
    <Grid item xs={12} md={4} sm={6}>
      <img
        style={{ width: "200px", height: "300px" }}
        src={`data:image/jpeg;base64,${image}`}
        alt=""
      />
      <h3>{name}</h3>
    </Grid>
  );
};

export default Doctor;
