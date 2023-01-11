import { useNavigate } from "react-router-dom";
import { Patientsdata } from "../../data";

export default function DoctorList() {
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

  return <ul>{patients}</ul>;
}
