import "./App.css";
import Doctor from "./pages/doctor";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Patient from "./pages/Patient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor" element={<Patient />} />
      </Routes>
      {/* <Doctor /> */}
    </BrowserRouter>
  );
}

export default App;
