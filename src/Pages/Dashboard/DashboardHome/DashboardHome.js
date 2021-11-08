import { Grid } from "@mui/material";
import React from "react";
import Calender from "../../Shared/Calender/Calender";
import Appointments from "../Appointments/Appointments";
import { useState } from "react";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid xs={12} md={6}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
