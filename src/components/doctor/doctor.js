import { Link, useNavigate } from "react-router-dom";
import { Patientsdata } from "../../data";
import React from "react";
import DoctorList from "./doctorlist";

export default function Doctor() {
  let navigate = useNavigate();

  let patients = Patientsdata.map((e) => {
    return (
      <li
        className="doctor-patient"
        key={e.id}
        onClick={() => {
          navigate(`/doctor/${e.id}`);
        }}
      >
        <span className="doctor-item-image"></span>
        <span className="doctor-item-contact">
          <h4>{e.name}</h4>
          <p>mokuaenock0@gmail.com</p>
        </span>
        <span className="doctor-item-age">27 years</span>
        <span className="doctor-item-sex">Male</span>
        <span className="doctor-item-type">Outpatient</span>
        <span className="doctor-item-disease">Malaria</span>
      </li>
    );
  });

  return (
    <main id="doctor">
      <span id="doctor-header">
        <Link to="doctor/search">Search</Link>
        <Link to="doctor/home">Home</Link>
      </span>

      <section id="doctor-section">
        <div id="doctor-container">
          <span id="doctor-container-header">
            <h2 id="doctor-title">Patients</h2>
            <form id="doctor-search">
              <input type="text" placeholder="search ..." />
              <button type="submit">Submit</button>
            </form>
          </span>
          <DoctorList />
          <div id="doctor-list-footer">
            <button id="doctor-back" className="doctor-nav">
              Back
            </button>
            <button id="doctor-next" className="doctor-nav">
              Next
            </button>
          </div>
        </div>
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
