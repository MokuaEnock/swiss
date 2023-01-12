import "./patient.css";
import { useState } from "react";

export default function DoctorSearch() {
  let [search, setSearch] = useState("");

  function handleSubmit(){
    
  }
  return (
    <section id="doctor-search">
      <form id="doctor-search-form">
        <input
          type="text"
          placeholder="Search patient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div id="doctor-search-cont"></div>
    </section>
  );
}
