import "./App.css";
import Doctor from "./pages/doctor";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      {/* <Doctor /> */}
    </BrowserRouter>
  );
}

export default App;
