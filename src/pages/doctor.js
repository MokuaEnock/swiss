export default function Doctor() {
  return (
    <main id="doctor">
      <header id="doctor-header">
        <span id="doctor-logo">Swiss Medicare</span>
        <span className="doctor-links">Home</span>
        <span className="doctor-links">Patients</span>
        <span className="doctor-links">Profile</span>
        {/* <span className="doctor-links"></span> */}
        <span id="doctor-logout">Log Out</span>
      </header>

      <section id="doctor-section">
        <div id="doctor-stats">
          <span className="doctor-stat"></span>
          <span className="doctor-stat"></span>
          <span className="doctor-stat"></span>
          <span className="doctor-stat"></span>
        </div>
        <div id="doctor-container"></div>
      </section>

      <aside id="doctor-aside">aside</aside>
    </main>
  );
}
