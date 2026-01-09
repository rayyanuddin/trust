import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import trustlogo from "../assets/trustlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);
  const [businessActivityOpen, setBusinessActivityOpen] = useState(false);
  const [fundedActivityOpen, setFundedActivityOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  const links = ["Home", "About", "Activity", "Programs", "Projects", "Events", "Contact"];

  const businessActivityItems = [
    { 
      name: "PG Certificate Programmes", 
      path: "/pgdiploma" 
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
      path: "/coporate" 
    },
    { 
      name: "Establishment of Labs", 
      path: "/elabs" 
    },
    { 
      name: "Industrial Visits", 
      path: "/industries" 
    },
  ];

  const fundedActivityItems = [
    { 
      name: "ISEA Phase-III", 
      path: "/isea" 
    },
    { 
      name: "FutureSkills Prime", 
      path: "/future" 
    },
    { 
      name: "Work-based Learning", 
      path: "/wbl" 
    },
    { 
      name: " C-HUK", 
      path: "/chuk" 
    },
  ];

  const projectsItems = [
    { 
      name: "MEPZ – C-DAC Skill Development Center", 
      path: "/mepz" 
    },
    { 
      name: "IDoT", 
      path: "/idot" 
    },
    { 
      name: "PKI IoT", 
      path: "/pkiot" 
    },
    { 
      name: "Experiential Center", 
      path: "/centre" 
    },
    { 
      name: "ACTS Management Systems – LMS development", 
      path: "/acts" 
    },
  ];

  const programsItems = [
    { 
      name: "I-LABS", 
      path: "/labs" 
    },
    { 
      name: "Faculty Industrial Immersion Program (FIIP)", 
      path: "/fiip" 
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
    setProgramsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={trustlogo} alt="logo" className="h-9 w-9" />
          <span className="text-xl font-bold  bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">TRUST</span>
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
            } else if (link === "Programs") {
              return (
                <div key={link} className="relative group">
                  <button className="px-3 py-2 rounded-md hover:bg-sky-500 transition flex items-center gap-1">
                    Programs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  <div className="absolute left-0 top-full mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {programsItems.map((item) => (
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
        className={`md:hidden fixed inset-0 top-16 bg-slate-900 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 h-[calc(100vh-64px)] overflow-y-auto" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-4 flex flex-col items-center h-full">
          {links.map((link) => {
            if (link === "Activity") {
              return (
                <div key={link} className="w-full max-w-xs">
                  <button
                    onClick={() => setActivityOpen(!activityOpen)}
                    className="flex justify-between items-center px-6 py-4 rounded-lg hover:bg-slate-800 w-full text-lg font-medium"
                  >
                    {link}
                    <svg className={`w-5 h-5 transition-transform ${activityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {activityOpen && (
                    <div className="mt-3 space-y-3 ml-4">
                      
                      {/* Business Activity Mobile */}
                      <div>
                        <button
                          onClick={() => setBusinessActivityOpen(!businessActivityOpen)}
                          className="flex justify-between items-center px-4 py-3 rounded-md hover:bg-slate-800 w-full text-left text-base"
                        >
                          Business Activity
                          <svg className={`w-4 h-4 transition-transform ${businessActivityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        
                        {businessActivityOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            {businessActivityItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleClose}
                                className={`block px-4 py-3 rounded-md hover:bg-sky-600 text-sm ${
                                  isActive(item.path) ? "bg-sky-700" : ""
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
                          className="flex justify-between items-center px-4 py-3 rounded-md hover:bg-slate-800 w-full text-left text-base"
                        >
                          Funded Activity
                          <svg className={`w-4 h-4 transition-transform ${fundedActivityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        
                        {fundedActivityOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            {fundedActivityItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleClose}
                                className={`block px-4 py-3 rounded-md hover:bg-sky-600 text-sm ${
                                  isActive(item.path) ? "bg-sky-700" : ""
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
            } else if (link === "Programs") {
              return (
                <div key={link} className="w-full max-w-xs">
                  <button
                    onClick={() => setProgramsOpen(!programsOpen)}
                    className="flex justify-between items-center px-6 py-4 rounded-lg hover:bg-slate-800 w-full text-lg font-medium"
                  >
                    {link}
                    <svg className={`w-5 h-5 transition-transform ${programsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {programsOpen && (
                    <div className="mt-3 ml-4 space-y-2">
                      {programsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={handleClose}
                          className={`block px-4 py-3 rounded-md hover:bg-sky-600 text-sm ${
                            isActive(item.path) ? "bg-sky-700" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (link === "Projects") {
              return (
                <div key={link} className="w-full max-w-xs">
                  <button
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className="flex justify-between items-center px-6 py-4 rounded-lg hover:bg-slate-800 w-full text-lg font-medium"
                  >
                    {link}
                    <svg className={`w-5 h-5 transition-transform ${projectsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {projectsOpen && (
                    <div className="mt-3 ml-4 space-y-2">
                      {projectsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={handleClose}
                          className={`block px-4 py-3 rounded-md hover:bg-sky-600 text-sm ${
                            isActive(item.path) ? "bg-sky-700" : ""
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
                  className={`block px-6 py-4 rounded-lg hover:bg-slate-800 w-full max-w-xs text-center text-lg font-medium ${
                    isActive(link === "Home" ? "/" : `/${link.toLowerCase()}`) ? "bg-sky-600" : ""
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