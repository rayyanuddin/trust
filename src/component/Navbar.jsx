import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import trustlogo from "../assets/trustlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const location = useLocation();

  const links = ["Home", "About", "Programs", "Events", "Contact"];

  const programItems = [
    { 
      name: "PG Diploma", 
      path: "/programs/pg-diploma" 
    },
    { 
      name: "Master's Courses", 
      path: "/master" 
    },
    { 
      name: "Practicum", 
      path: "/practium" 
    },
    { 
      name: "Experiential Learning", 
      path: "/expermential" 
    },
    { 
      name: "Corporate Trainings", 
      path: "/programs/corporate-trainings" 
    },
    { 
      name: "Establishment of Labs", 
      path: "/programs/establishment-of-labs" 
    },
    { 
      name: "Industrial Visits", 
      path: "/programs/industrial-visits" 
    },
  ];

  /* Lock body scroll on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setProgramOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={trustlogo} alt="logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-sky-400">Trust</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) =>
            link === "Programs" ? (
              <div key={link} className="relative group">
                <button className="px-3 py-2 rounded-md hover:bg-sky-500 transition">
                  Programs ▾
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {programItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={handleClose}
                      className={`block px-4 py-2 text-sm hover:bg-sky-500 transition ${
                        isActive(item.path) ? "bg-sky-600" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={`px-3 py-2 rounded-md transition ${
                  isActive(link === "Home" ? "/" : `/${link.toLowerCase()}`)
                    ? "bg-sky-500"
                    : "hover:bg-sky-500"
                }`}
                onClick={handleClose}
              >
                {link}
              </Link>
            )
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-slate-800 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {links.map((link) =>
            link === "Programs" ? (
              <div key={link} className="text-center">
                <button
                  onClick={() => setProgramOpen(!programOpen)}
                  className="inline-flex justify-center items-center px-4 py-2 rounded-md hover:bg-sky-500 w-full"
                >
                  Programs ▾
                </button>

                {programOpen && (
                  <div className="mt-2 space-y-1">
                    {programItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={handleClose}
                        className={`block px-4 py-2 rounded-md hover:bg-sky-500 text-center ${
                          isActive(item.path) ? "bg-sky-600" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md hover:bg-sky-500 text-center ${
                  isActive(link === "Home" ? "/" : `/${link.toLowerCase()}`) ? "bg-sky-500" : ""
                }`}
                onClick={handleClose}
              >
                {link}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;