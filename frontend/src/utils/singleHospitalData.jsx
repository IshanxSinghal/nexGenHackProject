import { useEffect, useState, useContext } from "react";
import { HospitalAuthContext } from "../utils/hospitalCredential";

const singleHospitalData = () => {
  let [hospital, setHospital] = useState([]);
  const { hospitalId, hospitalPassword } = useContext(HospitalAuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      `http://localhost:8000/hospital/giveHospital/${hospitalId}`
    );
    let json = await data.json();
    // console.log(json);

    setHospital(json);
  };
  //   console.log(students);
  return hospital;
};

export default singleHospitalData;
