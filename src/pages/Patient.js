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

          <div id="patient-feeling">
            <h4>Patient's feeling</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae faucibus tortor. Nulla facilisi. Sed tristique fringilla
              lorem et vulputate. Suspendisse varius finibus ligula sit amet
              fermentum. Ut pellentesque semper posuere. Aenean a augue et ante
              tincidunt faucibus. Sed lorem elit, vestibulum et erat eget,
              tempor accumsan tortor. Suspendisse vitae enim id ante porta
              fermentum. Nullam dolor lorem, vulputate sed porttitor id,
              malesuada nec risus. Sed quis vestibulum arcu, at condimentum
              elit. Mauris et purus suscipit, fermentum dui at, aliquam elit.
              Aliquam ante tellus, vehicula in felis et, porta finibus lorem.
              Aliquam tempus sapien sed neque convallis ultrices at a.
            </p>
          </div>

          <div id="patient-diagnosis">
            <h4>Doctors Diagnosis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae faucibus tortor. Nulla facilisi. Sed tristique fringilla
              lorem et vulputate. Suspendisse varius finibus ligula sit amet
              fermentum. Ut pellentesque semper posuere. Aenean a augue et ante
              tincidunt faucibus. Sed lorem elit, vestibulum et erat eget,
              tempor accumsan tortor. Suspendisse vitae enim id ante porta
              fermentum. Nullam dolor lorem, vulputate sed porttitor id,
              malesuada nec risus. Sed quis vestibulum arcu, at condimentum
              elit. Mauris et purus suscipit, fermentum dui at, aliquam elit.
              Aliquam ante tellus, vehicula in felis et, porta finibus lorem.
              Aliquam tempus sapien sed neque convallis ultrices at a.
            </p>
          </div>
          <div id="patient-disease">
            <p>Possible disease:</p> &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Possible diseases" />
          </div>

          <button type="submit" id="patient-submit"></button>
        </form>
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
