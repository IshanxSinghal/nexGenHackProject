import { useState } from "react";

export default function DonorResponse() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      hospital: "City General Hospital",
      location: "Downtown Medical District - 1.2 km away",
      bloodType: "O+",
      units: 2,
      contact: "Dr. Sarah Johnson - (555) 123-4567",
      urgency: "Immediate",
      time: "5 minutes ago",
      status: "new",
    },
    {
      id: 2,
      hospital: "Metro Children's Hospital",
      location: "Westside Medical Center - 3.8 km away",
      bloodType: "O+",
      units: 1,
      contact: "Nurse Mike Davis - (555) 987-6543",
      urgency: "Scheduled",
      time: "2 hours ago",
      status: "new",
    },
  ]);

  const [previous, setPrevious] = useState([
    {
      id: 3,
      hospital: "Emergency Care Center",
      location: "East Side Hospital - 2.1 km away",
      bloodType: "O+",
      units: 3,
      urgency: "Accepted",
      time: "1 hour ago",
      status: "accepted",
    },
  ]);

  const handleResponse = (id, action) => {
    const updated = requests.find((req) => req.id === id);
    if (updated) {
      updated.status = action;
      setRequests(requests.filter((req) => req.id !== id));
      setPrevious([updated, ...previous]);
    }
  };

  return (
    <section className="py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-3 text-blue-600">
        Blood Donation Requests
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Respond to nearby hospitals that need your blood type
      </p>

      {/* New Requests */}
      <div className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-red-600">
          🔔 New Requests ({requests.length})
        </h3>

        {requests.length === 0 && (
          <p className="text-gray-500">No new requests at the moment.</p>
        )}

        {requests.map((req) => (
          <div
            key={req.id}
            className={`border rounded-xl p-6 mb-6 shadow-sm transition ${
              req.urgency === "Immediate"
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">{req.hospital}</h4>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  req.urgency === "Immediate"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {req.urgency}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{req.location}</p>
            <p className="text-gray-600 text-sm mb-1">
              Blood Type: <strong>{req.bloodType}</strong>
            </p>
            <p className="text-gray-600 text-sm mb-1">
              Units needed: <strong>{req.units}</strong>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              📞 {req.contact} · {req.time}
            </p>

            {req.urgency === "Immediate" && (
              <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
                ⚠ Emergency Request: This is an immediate emergency. Patient
                needs blood urgently.
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => handleResponse(req.id, "accepted")}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                ✅ Accept & Donate
              </button>
              <button
                onClick={() => handleResponse(req.id, "declined")}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                ❌ Can't Donate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Responses */}
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-xl font-semibold mb-4">Previous Responses</h3>
        {previous.map((req) => (
          <div
            key={req.id}
            className="border border-gray-200 bg-gray-50 rounded-xl p-5 mb-4 shadow-sm"
          >
            <h4 className="text-lg font-semibold">{req.hospital}</h4>
            <p className="text-gray-600 text-sm">{req.location}</p>
            <p className="text-gray-600 text-sm">
              {req.bloodType} · {req.units} units
            </p>
            <div className="flex justify-between items-center mt-3">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  req.urgency === "Accepted"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {req.urgency}
              </span>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                📞 Contact Hospital
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
