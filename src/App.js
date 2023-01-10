import "./App.css";
import Doctor from "./pages/doctor";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Patient from "./pages/Patient";
import Aside from "./components/aside";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
