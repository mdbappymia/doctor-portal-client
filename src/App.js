import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivetRoute path="/appointment">
              <Appointment></Appointment>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
