import { useContext } from "react";
import { HospitalAuthContext } from "../utils/hospitalCredential";
import { Droplet, Users, Bell, AlertCircle, Plus } from "lucide-react";
import singleHospitalData from "../utils/singleHospitalData";
import { Link } from "react-router-dom";

const HospitalDashBoard = () => {
  const { hospitalId, hospitalPassword } = useContext(HospitalAuthContext);
  const singleHospital = singleHospitalData();

  console.log(singleHospital);

  const bloodInventory = [
    { type: "A+", units: 15, min: 20, status: "low" },
    { type: "A-", units: 8, min: 10, status: "critical" },
    { type: "B+", units: 25, min: 15, status: "good" },
    { type: "B-", units: 5, min: 8, status: "critical" },
    { type: "AB+", units: 12, min: 10, status: "good" },
    { type: "AB-", units: 3, min: 5, status: "critical" },
    { type: "O+", units: 30, min: 25, status: "good" },
    { type: "O-", units: 18, min: 20, status: "low" },
  ];

  const aiSuggestions = [
    {
      title: "Transfer 5 units of O- from Central Bank to City Hospital",
      reason: "City Hospital is running low and Central Bank has excess",
      impact: "Will prevent stockout for next 3 days",
      priority: "high",
    },
    {
      title: "Launch targeted donation drive for A- and B- blood types",
      reason: "Both types are critically low across all locations",
      impact: "Could increase inventory by 40% within 2 weeks",
      priority: "medium",
    },
    {
      title: "Schedule routine collections from high-frequency donors",
      reason: "Predictive model shows optimal donation timing",
      impact: "Maintains steady inventory levels",
      priority: "low",
    },
  ];

  const priorityColors = {
    high: "border-red-500 bg-red-50 text-red-700",
    medium: "border-yellow-500 bg-yellow-50 text-yellow-700",
    low: "border-blue-500 bg-blue-50 text-blue-700",
  };

  const statusColors = {
    good: "text-green-600",
    low: "text-yellow-600",
    critical: "text-red-600",
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header with button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            {singleHospital?.name} HOSPITAL
          </h1>
          <p className="text-gray-600">
            Monitor blood inventory, manage donor responses, and get AI-powered
            logistics insights.
          </p>
        </div>
        <Link to={"/hospital-request"}>
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            <Plus size={18} />
            Request Blood
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <Droplet className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Total Requests</p>
            <p className="text-xl font-bold">2</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <Users className="text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Accepted Donors</p>
            <p className="text-xl font-bold">0</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <Droplet className="text-purple-500" />
          <div>
            <p className="text-sm text-gray-500">Blood Types</p>
            <p className="text-xl font-bold">8</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <Bell className="text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Critical Alerts</p>
            <p className="text-xl font-bold">3</p>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blood Inventory Status */}
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-4">Blood Inventory Status</h2>
          <div className="space-y-3">
            {bloodInventory.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border rounded-lg p-2"
              >
                <span className="font-semibold">{item.type}</span>
                <div className="text-sm">
                  {item.units} units
                  <span className="text-gray-500 ml-2">Min: {item.min}</span>
                </div>
                <span
                  className={`capitalize font-semibold ${
                    statusColors[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-4">
            AI-Powered Logistics Suggestions
          </h2>
          <div className="space-y-4">
            {aiSuggestions.map((s, idx) => (
              <div
                key={idx}
                className={`border-l-4 p-3 rounded ${
                  priorityColors[s.priority]
                }`}
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm">Reason: {s.reason}</p>
                <p className="text-sm">Impact: {s.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accepted Donors */}
      <div className="bg-white shadow rounded-xl p-4 text-center text-gray-500">
        <h2 className="font-semibold text-lg mb-2">
          Accepted Donors by Request
        </h2>
        <AlertCircle className="mx-auto mb-2 text-gray-400" size={32} />
        <p>No Accepted Donors Yet</p>
        <p className="text-sm">
          Donors will appear here once they accept hospital requests.
        </p>
      </div>
    </div>
  );
};

export default HospitalDashBoard;
