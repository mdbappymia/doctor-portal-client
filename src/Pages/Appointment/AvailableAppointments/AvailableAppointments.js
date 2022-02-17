import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Container, Typography, Alert } from "@mui/material";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 30,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price: 20,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price: 25,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    price: 20,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    price: 15,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    price: 10,
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography sx={{ color: "info.main", mb: 3 }} variant="h4">
        Available appointment on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert severity="success">Booking Appointment successfully</Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            date={date}
            key={booking.id}
            booking={booking}
            setBookingSuccess={setBookingSuccess}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
