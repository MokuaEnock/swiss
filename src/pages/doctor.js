export default function Doctor() {
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
            <p className="doctor-stat-par">1000</p>
          </span>
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
