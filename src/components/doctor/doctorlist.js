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
          navigate(`${e.id}`);
        }}
      >
        <span className="doctor-item-name">{e.name}</span>
        <span className="doctor-item-email">mok@gmail.com</span>
        <span className="doctor-item-age">25</span>
        <span className="doctor-item-sex">Male</span>
        <span className="doctor-item-bmi">19</span>
      </li>
    );
  });

  return <ul id="doctor-patient-list">{patients}</ul>;
}
