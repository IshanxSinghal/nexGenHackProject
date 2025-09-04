import {Link} from 'react-router-dom';
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="mb-6">
          <span className="text-blue-600 text-5xl">💙</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">BloodLink</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Smart Blood Donation Matchmaker <br />
          Connecting donors with hospitals instantly. AI-powered logistics,
          myth-busting education, and emergency response system to save lives
          efficiently.
        </p>
  
        <div className="flex gap-4">
           <Link to="/donor-registration"><button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            💙 Become a Donor
          </button></Link>
          <Link to="/hospital-request"><button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
            🚨 Emergency Request
          </button></Link>
        </div>
      </section>
    );
  }
  