// // components/HospitalRegistration.jsx

// import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import { HospitalAuthContext } from "../utils/hospitalCredential.jsx";

// export default function HospitalRegistration() {
//   const { login } = useContext(HospitalAuthContext);
//   const [id, setId] = useState();
//   const [password, setPassword] = useState();
//   const [data, setData] = useState();
//   const [form, setForm] = useState({
//     hospitalId: "",
//     hospitalPassword: "",
//     name: "",
//     email: "",
//     location: "",
//     phoneNo: "",
//     bloodBankName: "",
//   });
//   const [logForm, setLogForm] = useState({
//     hospitalId: "",
//     hospitalPassword: "",
//   });

//   // for login

//   const handleChangeLogin = (e) => {
//     setLogForm({ ...logForm, [e.target.name]: e.target.value });
//   };

//   // for login

//   const handleSubmitLog = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:8000/hospital/hospitalLogIn", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(logForm),
//       });
//       const hospitalData = await res.json();
//       setData(hospitalData);
//       if (!data) setSuccess(`Hospital not found: ${data?.name}`);
//       else {
//         setSuccess(`Hospital Logged in: ${data?.name}`);
//         login(data?.hospitalId, data?.hospitalPassword);
//       }

//       setForm({
//         hospitalId: "",
//         hospitalPassword: "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // for register

//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     // console.log("hiiiii");

//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:8000/hospital/newHospital", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const hospitalData = await res.json();
//       setSuccess(`Hospital Registered: ${data?.name}`);

//       setForm({
//         hospitalId: "",
//         hospitalPassword: "",
//         name: "",
//         email: "",
//         location: "",
//         phoneNo: "",
//         bloodBankName: "",
//       });

//       setData(hospitalData);
//       login(data?.hospitalId, data?.hospitalPassword);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-4 border rounded shadow  mx-auto mt-2  w-9/12 ">
//       <div className="flex">
//         <div className="w-6/12 me-9 ">
//           <h2 className="text-xl font-bold mb-3">Hospital Registration</h2>
//           {success && <p className="text-green-600 mb-3">{success}</p>}
//           <form onSubmit={handleSubmit} className="space-y-2">
//             <input
//               name="hospitalId"
//               placeholder="Hospital ID"
//               value={form.hospitalId}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="hospitalPassword"
//               type="password"
//               placeholder="Hospital Password"
//               value={form.hospitalPassword}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="name"
//               placeholder="Hospital Name"
//               value={form.name}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="location"
//               placeholder="Location"
//               value={form.location}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="phoneNo"
//               placeholder="Contact Number"
//               value={form.phoneNo}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="bloodBankName"
//               placeholder="Blood Bank Name (optional)"
//               value={form.bloodBankName}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Register
//             </button>
//           </form>
//         </div>

//         <div className="w-6/12 ms-2">
//           <h2 className="text-xl font-bold mb-3">Hospital Login</h2>
//           {success && <p className="text-green-600 mb-3">{success}</p>}
//           <form onSubmit={handleSubmitLog} className="space-y-2">
//             <input
//               name="hospitalId"
//               placeholder="Hospital ID"
//               value={logForm.hospitalId}
//               onChange={handleChangeLogin}
//               className="border p-2 w-full rounded"
//               required
//             />
//             <input
//               name="hospitalPassword"
//               type="password"
//               placeholder="Hospital Password"
//               value={logForm.hospitalPassword}
//               onChange={handleChangeLogin}
//               className="border p-2 w-full rounded"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>

//       {!data ? (
//         ""
//       ) : (
//         <div className="mt-4 w-11/12">
//           <Link to={"/hospital-dashboard"}>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 ">
//               Get Data
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { HospitalAuthContext } from "../utils/hospitalCredential";

export default function HospitalRegistration() {
  const { login } = useContext(HospitalAuthContext);

  const [data, setData] = useState(null);
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    hospitalId: "",
    hospitalPassword: "",
    name: "",
    email: "",
    location: "",
    phoneNo: "",
    bloodBankName: "",
  });

  const [logForm, setLogForm] = useState({
    hospitalId: "",
    hospitalPassword: "",
  });

  // ===== Registration =====
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/hospital/newHospital", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const hospitalData = await res.json();
      setData(hospitalData);
      setSuccess(`Hospital Registered: ${hospitalData?.name}`);

      // Set global hospital ID and password
      login(hospitalData?.hospitalId, hospitalData?.hospitalPassword);

      setForm({
        hospitalId: "",
        hospitalPassword: "",
        name: "",
        email: "",
        location: "",
        phoneNo: "",
        bloodBankName: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  // ===== Login =====
  const handleChangeLogin = (e) =>
    setLogForm({ ...logForm, [e.target.name]: e.target.value });

  const handleSubmitLog = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/hospital/hospitalLogIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logForm),
      });

      const hospitalData = await res.json();
      setData(hospitalData);

      if (!hospitalData) setSuccess("Hospital not found");
      else {
        setSuccess(`Hospital Logged in: ${hospitalData?.name}`);
        login(hospitalData?.hospitalId, hospitalData?.hospitalPassword);
      }

      setLogForm({ hospitalId: "", hospitalPassword: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded shadow mx-auto mt-2 w-9/12">
      <div className="flex gap-6">
        {/* Registration Form */}
        <div className="w-6/12">
          <h2 className="text-xl font-bold mb-3">Hospital Registration</h2>
          {success && <p className="text-green-600 mb-3">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              name="hospitalId"
              placeholder="Hospital ID"
              value={form.hospitalId}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="hospitalPassword"
              type="password"
              placeholder="Hospital Password"
              value={form.hospitalPassword}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="name"
              placeholder="Hospital Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="phoneNo"
              placeholder="Contact Number"
              value={form.phoneNo}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="bloodBankName"
              placeholder="Blood Bank Name (optional)"
              value={form.bloodBankName}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Register
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div className="w-6/12">
          <h2 className="text-xl font-bold mb-3">Hospital Login</h2>
          {success && <p className="text-green-600 mb-3">{success}</p>}
          <form onSubmit={handleSubmitLog} className="space-y-2">
            <input
              name="hospitalId"
              placeholder="Hospital ID"
              value={logForm.hospitalId}
              onChange={handleChangeLogin}
              className="border p-2 w-full rounded"
              required
            />
            <input
              name="hospitalPassword"
              type="password"
              placeholder="Hospital Password"
              value={logForm.hospitalPassword}
              onChange={handleChangeLogin}
              className="border p-2 w-full rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {data && (
        <div className="mt-4 w-11/12">
          <Link to={"/hospital-dashboard"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-11/12">
              Go to Dashboard
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
