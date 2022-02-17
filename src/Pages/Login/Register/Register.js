import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import login from "./../../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerUser, isLoading, user, authError } = useAuth();
  const [signUpData, setSignUpData] = useState({});
  const navigate = useNavigate();
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.password2) {
      alert("Your password did not matched");
      return;
    }
    registerUser(
      signUpData.email,
      signUpData.password,
      signUpData.name,
      navigate
    );
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1">Sign Up</Typography>
          {!isLoading && (
            <form onSubmit={handleSignUpSubmit}>
              <TextField
                onBlur={handleBlur}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="name"
                type="text"
                label="Your Name"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="email"
                type="email"
                label="Your Email"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="password"
                label="Your Password"
                type="password"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="password2"
                label="Retype Password"
                type="password"
                variant="standard"
              />
              <Button sx={{ width: 1, m: 1 }} type="submit" variant="contained">
                Sign Up
              </Button>
              <p>
                Already Registered?{" "}
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">Please Login</Button>
                </NavLink>
              </p>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Create Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
