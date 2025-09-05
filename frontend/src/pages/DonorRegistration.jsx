import { useState } from "react";

export default function DonorRegistration() {
  const [available, setAvailable] = useState(false);

  async function formSubmit() {
    const donarData = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      bloodGroup: document.getElementById("bloodGroup").value,
      location: document.getElementById("location").value,
      phoneNo: document.getElementById("phoneNo").value,
      availabilityStatus: available,
    };

    console.log(donarData);

    try {
      const res = await fetch(`http://localhost:8000/donar/newDonar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donarData),
      });

      // const result = await res.json();

      // alert(result.result);
    } catch (err) {
      console.error("Error:", err);
      // alert();
    }
  }

  return (
    <section className="py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Become a Life Saver</h2>
      <p className="text-gray-600 mb-8 text-center">
        Register as a blood donor and help save lives in your community
      </p>

      <form className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg space-y-6">
        {/* adhar no as id*/}

        <div>
          <label className="block text-gray-700 mb-1">ID</label>
          <input
            type="number"
            id="id"
            placeholder="Enter your Adhar No. as ID"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700 mb-1">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Blood Group */}
        <div>
          <label className="block text-gray-700 mb-1">Blood Group</label>
          <select
            id="bloodGroup"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Select your blood group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter your city/area"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 mb-1">Contact Number</label>
          <input
            type="number"
            id="phoneNo"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Availability Toggle */}
        <div className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition">
          <div>
            <p className="font-medium">Availability Status</p>
            <p className="text-gray-500 text-sm">
              Toggle to control when you receive donation requests
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAvailable(!available)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
              available ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                available ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`ml-2 text-sm font-medium ${
              available ? "text-green-600" : "text-gray-500"
            }`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transition"
          onClick={() => {
            formSubmit();
          }}
        >
          Register as Donor
        </button>
      </form>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl w-full">
        <div className="bg-green-100 p-6 rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-green-700 mb-2">
            Why Donate Blood?
          </h3>
          <p className="text-gray-700 text-sm">
            One donation can save up to 3 lives. Help patients in emergencies,
            surgeries, and treatments.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-blue-700 mb-2">Safe & Quick</h3>
          <p className="text-gray-700 text-sm">
            The donation process takes only 10–15 minutes and follows strict
            safety protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
