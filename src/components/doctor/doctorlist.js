import { useNavigate } from "react-router-dom";
import { Patientsdata } from "../../data";
import { useState, useEffect } from "react";

export default function DoctorList() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [pats, setPats] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   let fetchData = asyc ()=>{
  //     setIsLoading(true);
  //     try{
  //       let response = await fetch("http://localhost:3000/api/v1/users");
  //       let data = await response.json()
  //       setData(data)
  //     }catch(error){
  //       console.log(error)
  //     }finally{
  //       setIsLoading(false)
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/v1/users");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // let patients = data.map((e) => {
  //   return (
  //     <li
  //       className="doctor-patient"
  //       key={e.id}
  //       onClick={() => {
  //         navigate(`${e.id}`);
  //       }}
  //     >
  //       <span className="doctor-item-name">{e.name}</span>
  //       <span className="doctor-item-email">mok@gmail.com</span>
  //       <span className="doctor-item-age">25</span>
  //       <span className="doctor-item-sex">Male</span>
  //       <span className="doctor-item-bmi">19</span>
  //     </li>
  //   );
  // });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <>
      <h2 id="doctor-container-header">Patients</h2>
      <div id="doctor-item-header">
        <span className="doctor-item-name">Name</span>
        <span className="doctor-item-email">Email</span>
        <span className="doctor-item-age">Age</span>
        <span className="doctor-item-sex">Sex</span>
        <span className="doctor-item-bmi">B.M.I</span>
      </div>
      <ul id="doctor-patient-list">
        {data.map((e) => {
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
        })}
      </ul>
      ;
      <div id="doctor-list-footer">
        <button id="doctor-back" className="doctor-nav">
          Back
        </button>
        <button id="doctor-next" className="doctor-nav">
          Next
        </button>
      </div>
    </>
  );
}
