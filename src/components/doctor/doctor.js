import { useNavigate } from "react-router-dom";
import { Patientsdata } from "../../data";

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
      <header id="doctor-header">
        <span id="doctor-logo">Swiss Medicare</span>
        <span className="doctor-links">Home</span>
        <span className="doctor-links">Patients</span>
        <span className="doctor-links">Profile</span>
        <span id="doctor-logout">Log Out</span>
      </header>

      <section id="doctor-section">
        <div id="doctor-stats">
          <span className="doctor-stat">
            <h3 className="doctor-stat-header">Patients</h3>
            <span className="doctor-stat-par">
              <p>1000</p>
              <button>See All</button>
            </span>
          </span>

          <span className="doctor-stat">
            <h3 className="doctor-stat-header">In-Patient</h3>
            <span className="doctor-stat-par">
              <p>500</p>
              <button>See All</button>
            </span>
          </span>

          <span className="doctor-stat">
            <h3 className="doctor-stat-header">Out-Patient</h3>
            <span className="doctor-stat-par">
              <p>500</p>
              <button>See All</button>
            </span>
          </span>
        </div>

        <div id="doctor-container">
          <span id="doctor-container-header">
            <h2 id="doctor-title">Patients</h2>
            <form id="doctor-search">
              <input type="text" placeholder="search ..." />
              <button type="submit">Submit</button>
            </form>
          </span>

          <ul className="doctor-list">{patients}</ul>

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
