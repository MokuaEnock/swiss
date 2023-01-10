import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import DoctorView from "./components/doctor/Patient";
import Doctor from "./components/doctor/doctor";
import Patient from "./components/patient/patient";
import Admin from "./components/admin/admin";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Doctor />}>
          <Route path=":id" element={<DoctorView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
