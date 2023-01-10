import "./App.css";
import Doctor from "./pages/doctor";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Patient from "./pages/Patient";
import Home from "./pages/home";
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
          <Route path=":id" element={<Patient />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
