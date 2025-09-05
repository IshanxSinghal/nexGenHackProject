import { Link } from "react-router-dom";

// export default function Ecosystem() {
//     const features = [
//       {
//         icon: "💙",
//         title: "Donor Registration",
//         desc: "Register as a donor and join our lifesaving network.",
//         color: "bg-blue-100 text-blue-600",
//       },
//       {
//         icon: "📋",
//         title: "Hospital Request",
//         desc: "Emergency blood requests with instant donor matching.",
//         color: "bg-red-100 text-red-600",
//       },
//       {
//         icon: "🔔",
//         title: "Donor Response",
//         desc: "Respond to blood donation requests in your area.",
//         color: "bg-cyan-100 text-cyan-600",
//       },
//     ];
  
//     return (
//       <section className="py-20 text-center bg-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Complete Blood Donation Ecosystem
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           From donor registration to AI-powered logistics, our platform handles
//           every aspect of blood donation with safety, efficiency, and care.
//         </p>
  
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
//             >
//               <div
//                 className={`w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 ${f.color}`}
//               >
//                 <span className="text-2xl">{f.icon}</span>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
//               <p className="text-gray-600">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  

export default function Ecosystem() {
    const features = [
      {
        icon: "💙",
        title: "Donor Registration",
        desc: "Register as a blood donor and help save lives in your community",
        color: "text-blue-600",
        link: "/donor-registration",
      },
      {
        icon: "📋",
        title: "Hospital Request",
        desc: "Emergency blood requests with instant donor notifications",
        color: "text-red-600",
        link: "/hospital-request",
      },
      {
        icon: "🔔",
        title: "Donor Response",
        desc: "Respond to blood donation requests in your area",
        color: "text-cyan-600",
        link: "/donor-response",
      },
      {
        icon: "📊",
        title: "AI Dashboard",
        desc: "Smart logistics and inventory management for blood banks",
        color: "text-green-600",
        link: "/dashboard",
      },
      {
        icon: "💬",
        title: "Education Bot",
        desc: "Learn about blood donation and bust common myths",
        color: "text-yellow-600",
        link: "/education-bot",
      },
    ];
  
    return (
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Complete Blood Donation Ecosystem
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From donor registration to AI-powered logistics, our platform handles
          every aspect of blood donation with safety, efficiency, and care.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <span className={`text-3xl ${f.color}`}>{f.icon}</span>
                <h3 className="text-lg font-semibold mt-4">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
              <Link
                to={f.link}
                className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
