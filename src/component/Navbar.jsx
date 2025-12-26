import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import trustlogo from "../assets/trustlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);
  const [businessActivityOpen, setBusinessActivityOpen] = useState(false);
  const [fundedActivityOpen, setFundedActivityOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  const links = ["Home", "About", "Activity", "Projects","Programs", "Events", "Contact"];

  const businessActivityItems = [
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

  const fundedActivityItems = [
    { 
      name: "ISEA Phase-III", 
      path: "/funded/isea-phase-iii" 
    },
    { 
      name: "FutureSkills Prime", 
      path: "/funded/futureskills-prime" 
    },
    { 
      name: "SC-ST IoT BLP Upskilling", 
      path: "/funded/sc-st-iot-blp" 
    },
    { 
      name: "Work-based Learning", 
      path: "/funded/work-based-learning" 
    },
    { 
      name: "C-HUK", 
      path: "/funded/c-huk" 
    },
  ];

  const projectsItems = [
    { 
      name: "MEPZ – C-DAC Skill Development Center", 
      path: "/projects/mepz-cdac" 
    },
    { 
      name: "IDoT", 
      path: "/projects/idot" 
    },
    { 
      name: "PKI IoT", 
      path: "/projects/pki-iot" 
    },
    { 
      name: "Experiential Center", 
      path: "/projects/experiential-center" 
    },
    { 
      name: "ACTS Management Systems – LMS development", 
      path: "/projects/acts-lms" 
    },
  ];

  /* Lock body scroll on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setActivityOpen(false);
    setBusinessActivityOpen(false);
    setFundedActivityOpen(false);
    setProjectsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={trustlogo} alt="logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-sky-400">TRUST</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            if (link === "Activity") {
              return (
                <div key={link} className="relative group">
                  <button className="px-3 py-2 rounded-md hover:bg-sky-500 transition flex items-center gap-1">
                    Activity 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  <div className="absolute left-0 top-full mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    
                    {/* Business Activity Section */}
                    <div className="relative group/business">
                      <button className="flex justify-between items-center w-full px-4 py-3 text-sm hover:bg-slate-700 transition border-b border-slate-700">
                        <span className="font-medium">Business Activity</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      
                      {/* Business Activity Submenu */}
                      <div className="absolute left-full top-0 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover/business:opacity-100 group-hover/business:visible transition-all duration-300 ml-1">
                        {businessActivityItems.map((item) => (
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

                    {/* Funded Activity Section */}
                    <div className="relative group/funded">
                      <button className="flex justify-between items-center w-full px-4 py-3 text-sm hover:bg-slate-700 transition">
                        <span className="font-medium">Funded Activity</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      
                      {/* Funded Activity Submenu */}
                      <div className="absolute left-full top-0 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover/funded:opacity-100 group-hover/funded:visible transition-all duration-300 ml-1">
                        {fundedActivityItems.map((item) => (
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
                  </div>
                </div>
              );
            } else if (link === "Projects") {
              return (
                <div key={link} className="relative group">
                  <button className="px-3 py-2 rounded-md hover:bg-sky-500 transition flex items-center gap-1">
                    Projects
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  <div className="absolute left-0 top-full mt-2 w-72 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {projectsItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={handleClose}
                        className={`block px-4 py-3 text-sm hover:bg-sky-500 transition border-b border-slate-700 last:border-b-0 ${
                          isActive(item.path) ? "bg-sky-600" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
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
              );
            }
          })}
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
          {links.map((link) => {
            if (link === "Activity") {
              return (
                <div key={link} className="text-center">
                  <button
                    onClick={() => setActivityOpen(!activityOpen)}
                    className="inline-flex justify-center items-center px-4 py-2 rounded-md hover:bg-sky-500 w-full gap-2"
                  >
                    Activity 
                    <svg className={`w-4 h-4 transition-transform ${activityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {activityOpen && (
                    <div className="mt-2 space-y-1 ml-4">
                      
                      {/* Business Activity Mobile */}
                      <div className="mb-2">
                        <button
                          onClick={() => setBusinessActivityOpen(!businessActivityOpen)}
                          className="inline-flex justify-between items-center px-4 py-2 rounded-md hover:bg-slate-700 w-full"
                        >
                          <span>Business Activity</span>
                          <svg className={`w-4 h-4 transition-transform ${businessActivityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        
                        {businessActivityOpen && (
                          <div className="mt-1 ml-4 space-y-1">
                            {businessActivityItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleClose}
                                className={`block px-4 py-2 rounded-md hover:bg-sky-500 text-sm ${
                                  isActive(item.path) ? "bg-sky-600" : ""
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Funded Activity Mobile */}
                      <div>
                        <button
                          onClick={() => setFundedActivityOpen(!fundedActivityOpen)}
                          className="inline-flex justify-between items-center px-4 py-2 rounded-md hover:bg-slate-700 w-full"
                        >
                          <span>Funded Activity</span>
                          <svg className={`w-4 h-4 transition-transform ${fundedActivityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        
                        {fundedActivityOpen && (
                          <div className="mt-1 ml-4 space-y-1">
                            {fundedActivityItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleClose}
                                className={`block px-4 py-2 rounded-md hover:bg-sky-500 text-sm ${
                                  isActive(item.path) ? "bg-sky-600" : ""
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            } else if (link === "Projects") {
              return (
                <div key={link} className="text-center">
                  <button
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className="inline-flex justify-center items-center px-4 py-2 rounded-md hover:bg-sky-500 w-full gap-2"
                  >
                    Projects
                    <svg className={`w-4 h-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {projectsOpen && (
                    <div className="mt-2 ml-4 space-y-1">
                      {projectsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={handleClose}
                          className={`block px-4 py-2 rounded-md hover:bg-sky-500 text-sm ${
                            isActive(item.path) ? "bg-sky-600" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
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
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;