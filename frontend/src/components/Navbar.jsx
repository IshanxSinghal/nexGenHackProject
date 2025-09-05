import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Donor Registration", path: "/donor-registration" },
    { name: "Hospital Request", path: "/hospital-request" },
    { name: "Blood Requests", path: "/donor-response" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Education Bot", path: "/education-bot" },
    { name: "Hospital Registration ", path: "/hospital-registration" },
  ];

  return (
    <nav className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-1 text-xl font-bold text-red-600"
      >
        <span>
          <img className="size-16" src="/logo.png" alt="BloodCircle Logo" />
        </span>
        BloodCircle
      </Link>

      {/* Nav links */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-gray-600 hover:text-blue-600 transition ${
              pathname === item.path ? "font-semibold text-blue-600" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
