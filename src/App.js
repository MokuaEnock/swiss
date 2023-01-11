import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import DoctorView from "./components/doctor/Patient";
import Doctor from "./components/doctor/doctor";
import Patient from "./components/patient/patient";
import Admin from "./components/admin/admin";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import DoctorSearch from "./components/doctor/doctorsearch";
import DoctorList from "./components/doctor/doctorlist";
import Header from "./components/header";
import Footer from "./components/aside";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="doctor" element={<Doctor />}>
          <Route path="search" element={<DoctorSearch />} />
          <Route path="list" element={<DoctorList />} />
          <Route path=":id" element={<DoctorView />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
