import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Acts = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);
  const [systemMetrics, setSystemMetrics] = useState({
    users: 0,
    courses: 0,
    batches: 0,
    transactions: 0
  });

  const targetMetrics = {
    users: 1250,
    courses: 45,
    batches: 120,
    transactions: 8500
  };

  const animateCount = (start, end, duration, setter, metricKey) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      setter(prev => ({
        ...prev,
        [metricKey]: currentValue
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      // Animate each metric with different durations and delays
      animateCount(0, targetMetrics.users, 2000, setSystemMetrics, "users");
      
      setTimeout(() => {
        animateCount(0, targetMetrics.courses, 1500, setSystemMetrics, "courses");
      }, 300);
      
      setTimeout(() => {
        animateCount(0, targetMetrics.batches, 1800, setSystemMetrics, "batches");
      }, 500);
      
      setTimeout(() => {
        animateCount(0, targetMetrics.transactions, 2500, setSystemMetrics, "transactions");
      }, 700);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const systemFeatures = [
    {
      id: "login",
      title: "Login & Role-Based Access",
      description: "Unified login with role-based dashboards for all stakeholders",
      icon: "🔐",
      color: "from-blue-500 to-cyan-400",
      roles: ["Student", "Faculty", "Coordinator", "Admin", "Verifier"]
    },
    {
      id: "attendance",
      title: "Attendance Management",
      description: "QR Code & Biometric based attendance tracking with automated notifications",
      icon: "📱",
      color: "from-green-500 to-emerald-400",
      features: ["QR Code Scanning", "Biometric Integration", "Auto Absentee Notifications"]
    },
    {
      id: "hostel",
      title: "Hostel Management",
      description: "Complete hostel allocation system with room management",
      icon: "🏠",
      color: "from-purple-500 to-pink-400",
      flow: ["Registration Request", "FCFS Allocation", "Fee Payment", "Room Assignment"]
    },
    {
      id: "certificates",
      title: "Certificate Generation",
      description: "Automated certificate generation with blockchain verification",
      icon: "📜",
      color: "from-amber-500 to-orange-400",
      tech: ["Blockchain", "Auto Mailing", "Digital Verification"]
    },
    {
      id: "proctoring",
      title: "AI Proctoring System",
      description: "AI-powered exam proctoring with real-time monitoring",
      icon: "👁️",
      color: "from-red-500 to-rose-400",
      capabilities: ["Face Detection", "Tab Switching", "Gadget Detection", "Audio Analysis"]
    },
    {
      id: "iv-management",
      title: "Industrial Visit Management",
      description: "End-to-end industrial visit scheduling and management",
      icon: "🏭",
      color: "from-indigo-500 to-blue-400",
      process: ["Request Submission", "Coordinator Approval", "Payment", "Execution"]
    }
  ];

  const userRoles = [
    {
      role: "Student",
      icon: "👨‍🎓",
      description: "Access to dashboard, assignments, attendance, certificates",
      color: "bg-gradient-to-r from-blue-100 to-cyan-100 border-blue-200",
      capabilities: ["View Grades", "Submit Assignments", "Check Attendance", "Give Feedback", "Access E-Labs"]
    },
    {
      role: "Faculty",
      icon: "👨‍🏫",
      description: "Course management, grading, content upload, feedback",
      color: "bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200",
      capabilities: ["Create Assignments", "Grade Submissions", "Upload Notes", "Schedule Sessions", "View Feedback"]
    },
    {
      role: "Coordinator",
      icon: "👨‍💼",
      description: "Batch management, reports, verification, approvals",
      color: "bg-gradient-to-r from-green-100 to-emerald-100 border-green-200",
      capabilities: ["Manage Batches", "Generate Reports", "Verify Documents", "Approve Leaves", "Schedule IVs"]
    },
    {
      role: "Admin",
      icon: "👨‍💻",
      description: "System configuration, user management, overall control",
      color: "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200",
      capabilities: ["Create Users", "Configure System", "Manage Templates", "Generate Analytics", "System Monitoring"]
    }
  ];

  const industrialVisitFlow = [
    { step: 1, title: "Institution Request", description: "Staff member submits IV request with participant details", icon: "📝" },
    { step: 2, title: "Coordinator Review", description: "IV coordinator reviews and approves/rejects request", icon: "👁️" },
    { step: 3, title: "Payment Processing", description: "Institution makes payment for visit", icon: "💳" },
    { step: 4, title: "Schedule Confirmation", description: "Final schedule confirmation with technology selection", icon: "✅" },
    { step: 5, title: "Visit Execution", description: "2-hour industrial visit with presentations and Q&A", icon: "🏭" },
    { step: 6, title: "Report Generation", description: "Automated report generation for records", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg">⚙️</span>
                </div>
                <span className="font-semibold tracking-wide">C-DAC BANGALORE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  ACTS Management System
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 animate-fade-in delay-300">
                Integrated Learning Suite for Managing Training & Education Systems at C-DAC
              </p>
            </div>
          </div>

          {/* System Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Active Users", value: systemMetrics.users, icon: "👥", color: "from-blue-500 to-cyan-400", key: "users" },
              { label: "Courses", value: systemMetrics.courses, icon: "📚", color: "from-purple-500 to-pink-400", key: "courses" },
              { label: "Active Batches", value: systemMetrics.batches, icon: "🎯", color: "from-green-500 to-emerald-400", key: "batches" },
              { label: "Transactions", value: systemMetrics.transactions, icon: "🔄", color: "from-amber-500 to-orange-400", key: "transactions" }
            ].map((metric, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 transform transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center text-white shadow-lg`}>
                    <span className="text-xl">{metric.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 transition-all duration-300">
                      {metric.value.toLocaleString()}+
                    </div>
                    <div className="text-sm text-slate-500">{metric.label}</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${targetMetrics[metric.key] > 0 ? (metric.value / targetMetrics[metric.key]) * 100 : 0}%`,
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-1 rounded-2xl animate-fade-in delay-500">
              {["overview", "features", "workflow", "roles"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                >
                  <span className="text-lg">
                    {tab === "overview" ? "📊" : 
                     tab === "features" ? "⚙️" : 
                     tab === "workflow" ? "🔄" : "👥"}
                  </span>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* System Introduction */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow shadow-lg">
                    <span className="text-2xl text-white">🏢</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">System Overview</h2>
                    <p className="text-slate-600">Version 4.0 - Integrated Learning Suite</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-blue-500">🎯</span> Purpose & Scope
                    </h3>
                    <p className="text-slate-600 mb-4">
                      The ACTS Management System is designed to automate and streamline all training management processes at C-DAC ACTS, providing a comprehensive solution for managing various training programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        Complete automation of training processes
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        Integration with existing learning systems
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        Real-time monitoring and reporting
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-cyan-600">📈</span> Key Stakeholders
                    </h3>
                    <div className="space-y-3">
                      {["Prospective Students", "Onboarded Students", "Faculties", "Course Coordinators", "Course Administrators", "System Administrators", "Management Personnel"].map((stakeholder, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                          <span className="text-slate-700">{stakeholder}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                      <span className="text-xl text-white">🌐</span>
                    </div>
                    <h3 className="font-bold text-slate-900">Tech Stack</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-slate-700">Frontend: React.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-slate-700">Backend: Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-slate-700">Database: MySQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-slate-700">AI: Python/Hugging Face</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                      <span className="text-xl text-white">🔗</span>
                    </div>
                    <h3 className="font-bold text-slate-900">Integrations</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-700">FutureSkills Prime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-700">IEEE BLP Platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-700">Zoom/Google Meet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-700">Blockchain for Certificates</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center">
                      <span className="text-xl text-white">🎯</span>
                    </div>
                    <h3 className="font-bold text-slate-900">Training Types</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-slate-700">PG Certificate programme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-slate-700">Corporate Training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-slate-700">FSP Bridge Course</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-slate-700">IEEE BLP Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  System Components & Features
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Comprehensive suite of integrated modules for complete training management
                </p>
              </div>

              {/* System Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systemFeatures.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className={`group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    
                    {feature.roles && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-500">User Roles:</div>
                        <div className="flex flex-wrap gap-2">
                          {feature.roles.map((role, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {feature.features && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-500">Key Features:</div>
                        <ul className="space-y-1">
                          {feature.features.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {feature.capabilities && (
                      <div className="space-y-2 mt-4">
                        <div className="text-sm font-medium text-slate-500">AI Capabilities:</div>
                        <div className="flex flex-wrap gap-2">
                          {feature.capabilities.map((cap, i) => (
                            <span key={i} className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Components */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Additional System Components</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: "Chatbot", icon: "🤖", desc: "AI-powered query resolution" },
                    { name: "Feedback System", icon: "💬", desc: "Multi-type feedback collection" },
                    { name: "E-Labs", icon: "🔬", desc: "Virtual lab environment" },
                    { name: "WBL Management", icon: "💼", desc: "Work Based Learning tracking" },
                    { name: "Analytics Dashboard", icon: "📊", desc: "Performance analytics" },
                    { name: "Payment System", icon: "💳", desc: "Online fee processing" },
                    { name: "Document Verification", icon: "✅", desc: "Automated document checks" },
                    { name: "Session Management", icon: "📅", desc: "Class scheduling" }
                  ].map((component, index) => (
                    <div key={index} className="bg-white/80 rounded-lg p-4 border border-slate-200 text-center hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">{component.icon}</div>
                      <div className="font-semibold text-slate-900 mb-1">{component.name}</div>
                      <div className="text-xs text-slate-500">{component.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Workflow Tab */}
          {activeTab === "workflow" && (
            <div className="space-y-12">
              {/* PG Diploma Registration Flow */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-2xl text-white">📝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">PG Certificate  Programme Registration Workflow</h2>
                    <p className="text-slate-600">Complete automated registration and verification process</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { step: 1, title: "Student Registration", description: "Fill registration form with documents upload", icon: "👤" },
                    { step: 2, title: "Document Upload", description: "Upload academic certificates, photo, signature", icon: "📎" },
                    { step: 3, title: "Verifier Review", description: "Admission data verifier checks documents", icon: "👁️" },
                    { step: 4, title: "PRN Generation", description: "System generates PRN for verified students", icon: "🔢" },
                    { step: 5, title: "Coordinator Approval", description: "Course coordinator final approval", icon: "✅" },
                    { step: 6, title: "System Access", description: "Student gets dashboard access with credentials", icon: "🚪" }
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                            <span className="font-bold">{step.step}</span>
                          </div>
                          <div className="text-2xl">{step.icon}</div>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                      {index < 5 && (
                        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial Visit Workflow */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center">
                    <span className="text-2xl text-white">🏭</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Industrial Visit Management</h2>
                    <p className="text-slate-600">Complete workflow for scheduling and managing industrial visits</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industrialVisitFlow.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl">{step.icon}</div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white text-sm font-bold">
                            {step.step}
                          </div>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                      {index < 5 && (
                        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/80 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-indigo-600">📋</span> IV Constraints & Requirements
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Min Participants: <strong>100</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Max Participants: <strong>250</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Days: <strong>Tuesday & Thursday</strong></span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Duration: <strong>2 Hours</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Technologies: <strong>2 Selections</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Faculty Count: <strong>2-5 Members</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Roles Tab */}
          {activeTab === "roles" && (
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Role-Based Access Control
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Different dashboards and capabilities for various system stakeholders
                </p>
              </div>

              {/* User Roles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {userRoles.map((role, index) => (
                  <div 
                    key={role.role}
                    className={`${role.color} rounded-2xl p-6 border shadow-lg transform transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl">{role.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{role.role}</h3>
                        <p className="text-slate-600">{role.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <span className="text-blue-500">⚡</span>
                        Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {role.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {role.role === "Admin" && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="text-amber-500">🔧</span>
                          System Administration Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["User Management", "System Configuration", "Database Backup", "Security Settings", "Audit Logs", "Performance Monitoring"].map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Dashboard Previews */}
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Role-Based Dashboard Previews</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <span className="text-xl">👨‍🎓</span>
                      </div>
                      <h4 className="font-bold">Student Dashboard</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-16 bg-white/10 rounded"></div>
                        <div className="h-16 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <span className="text-xl">👨‍🏫</span>
                      </div>
                      <h4 className="font-bold">Faculty Dashboard</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-2/3"></div>
                      <div className="flex gap-2 mt-4">
                        <div className="flex-1 h-20 bg-white/10 rounded"></div>
                        <div className="w-20 h-20 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <span className="text-xl">📊</span>
                      </div>
                      <h4 className="font-bold">Coordinator Dashboard</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-4/5"></div>
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-white/10 rounded"></div>
                        <div className="h-12 bg-white/10 rounded"></div>
                        <div className="h-12 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes countUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-count-up {
          animation: countUp 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
};

export default Acts;