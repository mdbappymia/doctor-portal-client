import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://doctors-portal-bappy.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make admin</h2>
      {success && <Alert severity="success">Make Admin Successfully</Alert>}
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          name="email"
          type="email"
          label="Email"
          onBlur={handleBlur}
          variant="standard"
        />

        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
