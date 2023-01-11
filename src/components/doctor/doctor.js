import { Link } from "react-router-dom";
import React from "react";
import DoctorList from "./doctorlist";

export default function Doctor() {
  return (
    <main id="doctor">
      <span id="doctor-header">
        <Link to="/doctor/search">Search</Link>
        <Link to="/doctor/list">List</Link>
      </span>

      <section id="doctor-container">
        <h2 id="doctor-container-header">Patients</h2>

        <div id="doctor-item-header">
          <span className="doctor-item-name">Name</span>
          <span className="doctor-item-email">Email</span>
          <span className="doctor-item-age">Age</span>
          <span className="doctor-item-sex">Sex</span>
          <span className="doctor-item-bmi">B.M.I</span>
        </div>
        <DoctorList />

        <div id="doctor-list-footer">
          <button id="doctor-back" className="doctor-nav">
            Back
          </button>
          <button id="doctor-next" className="doctor-nav">
            Next
          </button>
        </div>
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
