import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <nav className=" px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      
      </nav>
      <Link
        to="/"
        className="flex items-center  text-xl font-bold text-red-600 my-0"
      >
        
          <img className="size-40" id="image" src="/logo.png" alt="BloodCircle Logo" />
        
     
      </Link>
      <h1 className="text-5xl font-bold mb-4 mt-0" style={{ marginTop: "-40px" }}>BloodCircle</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Smart Blood Donation Matchmaker <br />
        Connecting donors with hospitals instantly. AI-powered logistics,
        myth-busting education, and emergency response system to save lives
        efficiently.
      </p>

      <div className="flex gap-4">
        <Link to="/donor-registration">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            Continue As Donor
          </button>
        </Link>
        <Link to="/hospital-registration">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
            Continue As Hospital
          </button>
        </Link>
      </div>
    </section>
  );
}
