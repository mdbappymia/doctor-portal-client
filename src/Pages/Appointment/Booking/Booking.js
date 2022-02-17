import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleBookingClose = () => setOpenModal(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ color: "info.main", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ py: 1 }}>
            {time}
          </Typography>
          <Typography variant="body1">Price: ${price}</Typography>
          <Typography variant="body1">{space} SPACE AVAILABLE</Typography>
          <Button onClick={handleOpenModal} sx={{ mt: 1 }} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        openModal={openModal}
        handleBookingClose={handleBookingClose}
        booking={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
