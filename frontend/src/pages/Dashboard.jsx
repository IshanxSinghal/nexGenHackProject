import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    BarChart,
    Bar,
  } from "recharts";
  
  export default function Dashboard() {
    // Example data for donations per day
    const donationData = [
      { day: "Mon", donations: 25 },
      { day: "Tue", donations: 40 },
      { day: "Wed", donations: 30 },
      { day: "Thu", donations: 50 },
      { day: "Fri", donations: 60 },
      { day: "Sat", donations: 35 },
      { day: "Sun", donations: 45 },
    ];
  
    // Example data for blood stock
    const stockData = [
      { type: "A+", units: 120 },
      { type: "A-", units: 40 },
      { type: "B+", units: 95 },
      { type: "B-", units: 30 },
      { type: "O+", units: 150 },
      { type: "O-", units: 25 },
      { type: "AB+", units: 60 },
      { type: "AB-", units: 20 },
    ];
  
    return (
      <section className="py-10 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">AI Dashboard</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl">
          Smart logistics and inventory management for blood banks.  
          Track real-time donations, requests, and stock levels.
        </p>
  
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Total Donations</h3>
            <p className="text-2xl font-bold text-blue-600">2,340</p>
            <p className="text-xs text-gray-400">+12% this week</p>
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Lives Saved</h3>
            <p className="text-2xl font-bold text-green-600">6,920</p>
            <p className="text-xs text-gray-400">+8% this month</p>
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Pending Requests</h3>
            <p className="text-2xl font-bold text-red-600">14</p>
            <p className="text-xs text-gray-400">Urgent: 3</p>
          </div>
        </div>
  
        {/* Donations Trend */}
        <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow mb-10 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Weekly Donations
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="donations"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Blood Stock */}
        <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Blood Stock Levels
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="units" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    );
  }
  