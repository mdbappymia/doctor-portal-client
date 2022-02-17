import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jvo25G1rYfvGTLC826HPIwur4z9xpmpFIsXrQ6Z34IaT4rVwKwTFTVHbO9ZjGezhwIXZFyY9MVoEo00XC86oxL500U04wUYkl"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h3>
        Payment for: {appointment.patientName} for {appointment.serviceName}
      </h3>
      <h4>Pay: ${appointment.price}</h4>
      {appointment.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
