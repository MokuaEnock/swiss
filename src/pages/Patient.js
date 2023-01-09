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
        <form>
          <div id="patient-bio">
            <span id="patient-bio-image">
              <img src="#" alt="profile" />
            </span>

            <span id="patient-bio-contact">
              <p>Enock Mokua Nyanchoga</p>
              <p>mokuaenock0@gmail.com</p>
              <p>+25470010000</p>
            </span>
            <span id="patient-bio-"></span>
            <span id="patient-bio-"></span>
          </div>
          
          <div id="patient-details">
            <span>Nairobi, Kenya</span>
            <span>Male</span>
            <span>Outpatient</span>
            <span>Malaria</span>
          </div>
          <div id="patient-bio"></div>
          <div id="patient-bio"></div>
          <div id="patient-bio"></div>

          <button type="submit" id="patient-submit"></button>
        </form>
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
