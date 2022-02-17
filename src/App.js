import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Payment from "./Pages/Dashboard/Payment/Payment";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route
              path="/appointment"
              element={
                <PrivetRoute>
                  <Appointment></Appointment>
                </PrivetRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivetRoute>
                  <Dashboard></Dashboard>
                </PrivetRoute>
              }
            >
              <Route
                path="/dashboard"
                element={<DashboardHome></DashboardHome>}
              />
              <Route
                path={`/dashboard/payment/:appointmentId`}
                element={<Payment></Payment>}
              />
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              />
              <Route
                path={`/dashboard/addDoctor`}
                element={
                  <AdminRoute>
                    <AddDoctor></AddDoctor>
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
