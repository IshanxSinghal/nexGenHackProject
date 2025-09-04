import { useState } from "react";

export default function HospitalRequest() {
  const [urgency, setUrgency] = useState("Immediate (Emergency)");

  return (
    <section className="py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-red-600">
        Emergency Blood Request
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Connect with nearby donors quickly and efficiently
      </p>

      <form className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl space-y-6">
        {/* Hospital Name */}
        <div>
          <label className="block text-gray-700 mb-1">Hospital Name</label>
          <input
            type="text"
            placeholder="Enter hospital name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Blood Group + Units */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1">Blood Group Needed</label>
            <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none">
              <option>Select blood group</option>
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
          <div>
            <label className="block text-gray-700 mb-1">Units Needed</label>
            <input
              type="number"
              placeholder="Number of units"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Hospital Location</label>
          <input
            type="text"
            placeholder="Enter hospital address/area"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-gray-700 mb-1">Urgency Level</label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option>Immediate (Emergency)</option>
            <option>High (Within 6 hours)</option>
            <option>Medium (Within 24 hours)</option>
            <option>Low (Scheduled)</option>
          </select>
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-gray-700 mb-1">Contact Person</label>
          <input
            type="text"
            placeholder="Name and phone number"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-gray-700 mb-1">Additional Notes (Optional)</label>
          <textarea
            placeholder="Any additional information..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Emergency Priority Banner */}
        {urgency === "Immediate (Emergency)" && (
          <div className="bg-red-100 border border-red-300 text-red-600 p-4 rounded-lg text-sm">
            <strong>⚠ Emergency Priority:</strong> Your request will be marked as
            high priority and donors will receive immediate notifications.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 hover:shadow-lg transition"
        >
          Send Emergency Request
        </button>
      </form>

      {/* How It Works */}
      <div className="mt-10 bg-gray-50 border rounded-lg p-6 w-full max-w-2xl">
        <h3 className="text-lg font-semibold mb-3">How It Works</h3>
        <ul className="list-decimal list-inside text-gray-600 space-y-1 text-sm">
          <li>Submit your blood request with urgency level</li>
          <li>Our system automatically notifies compatible nearby donors</li>
          <li>Donors receive instant alerts and can respond immediately</li>
          <li>Track responses in real-time through the dashboard</li>
        </ul>
      </div>
    </section>
  );
}
