export default function HowItWorks() {
    const steps = [
      {
        number: 1,
        title: "Register",
        desc: "Donors register with blood type and location. Hospitals submit emergency requests.",
        color: "bg-blue-500",
      },
      {
        number: 2,
        title: "Match",
        desc: "AI instantly matches compatible donors with nearby hospitals based on urgency.",
        color: "bg-cyan-500",
      },
      {
        number: 3,
        title: "Notify",
        desc: "Donors receive instant alerts and can accept or decline donation requests.",
        color: "bg-yellow-500",
      },
      {
        number: 4,
        title: "Save Lives",
        desc: "Direct communication between hospitals and donors for quick, life-saving donations.",
        color: "bg-green-500",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How BloodLink Works</h2>
          <p className="text-gray-600">
            Simple, fast, and secure blood donation coordination
          </p>
        </div>
  
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-xl font-bold mx-auto mb-4 ${s.color}`}
              >
                {s.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
  
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 text-center rounded-xl max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Save Lives?</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of heroes who are making a difference in their communities. 
            Every donation can save up to 3 lives.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              💙 Register as Donor
            </button>
            <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center gap-2">
              ℹ️ Learn More
            </button>
          </div>
        </div>
      </section>
    );
  }
  