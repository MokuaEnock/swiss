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

        <div id="doctor-container">
          <span id="doctor-container-header">
            <h2 id="doctor-title">Patients</h2>
            <form id="doctor-search">
              <input type="text" placeholder="search ..." />
              <button type="submit">Submit</button>
            </form>
          </span>
          <ul className="doctor-list">
            <li className="doctor-patient"></li>
          </ul>
        </div>
      </section>

      <aside id="doctor-aside">aside</aside>
    </main>
  );
}
