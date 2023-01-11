import "./home.css";

export default function Services() {
  return (
    <>
      <section className="services">
        <h3 className="services-header">Services</h3>
        <div className="services-container">
          <span className="services-card"></span>
          <span className="services-card"></span>
          <span className="services-card"></span>
          <span className="services-card"></span>
        </div>
        <div className="services-footer">
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
        </div>
      </section>

      <section className="services">
        <h3 className="services-header">Meet Our Doctors</h3>
        <div className="services-container">
          <span className="doctor-card">
            <img className="doctor-card-image" src="" alt="doctor" />
            <p className="doctor-crad-doc"></p>
            <p className="doctor-crad-par"></p>
            <button>Read More</button>
          </span>
          <span className="doctor-card"></span>
          <span className="doctor-card"></span>
        </div>

        <div className="services-footer">
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
        </div>
      </section>
    </>
  );
}
