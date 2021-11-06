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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    signInUser,
    authError,
    isLoading,
    signInWithGoogle,
    setIsLoading,
    setAuthError,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    signInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const destination = location?.state?.from || "/";

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInWithGoogle()
      .then((result) => {
        history.push(destination);
      })
      .catch((e) => setAuthError(e.message))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1">Login</Typography>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                onBlur={handleChange}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="email"
                label="Your Email"
                variant="standard"
              />
              <TextField
                onBlur={handleChange}
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="password"
                label="Your Password"
                type="password"
                variant="standard"
              />
              <Button sx={{ width: 1, m: 1 }} type="submit" variant="contained">
                Login
              </Button>
              <p>
                New user?{" "}
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">Please Signup</Button>
                </NavLink>
              </p>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login Successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
