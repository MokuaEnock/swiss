import "./patient.css";
export default function Patient() {
  return (
    <main id="doctor">
      <header id="doctor-header">
        <span id="doctor-logo">Swiss Medicare</span>
        <span className="doctor-links">Home</span>
        <span className="doctor-links">Patients</span>
        <span className="doctor-links">Profile</span>
        <span id="doctor-logout">Log Out</span>
      </header>

      <section id="patient-section">
        <div id="patient-bio">

        </div>
        {/* <div id="patient-bio"></div>
        <div id="patient-bio"></div>
        <div id="patient-bio"></div>
        <div id="patient-bio"></div> */}
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
