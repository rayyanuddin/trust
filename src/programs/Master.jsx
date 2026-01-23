import { useState, useEffect } from "react";
import { GraduationCap, Users, Clock, BookOpen, Award, CheckCircle, FileText, Calendar, DollarSign, Shield, UserCheck, Lock, Phone, AlertTriangle, ClipboardCheck, Database, Briefcase, MessageSquare } from "lucide-react";

const Master = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "vision", label: "Vision & Goal", icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "structure", label: "Program Structure", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  
   
    { id: "modules", label: "Available Courses", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "collaborations", label: "Collaborations", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const availableModules = [
    {
      program: "PGCP-BDA (Post Graduate Certificate Programme in Big Data Analytics)",
      modules: [
        "Data Warehousing & Mining",
        "Big Data Technologies",
        "Machine Learning Algorithms",
        "Data Visualization",
        "Statistical Methods"
      ]
    },
    {
      program: "PGCP-AC (Post Graduate Certificate Programme in Advanced Computing)",
      modules: [
        "Advanced Algorithms",
        "Software Engineering",
        "Cloud Computing",
        "Web Technologies",
        "Database Management"
      ]
    },
    {
      program: "PGCP-ITISS (Post Graduate Certificate Programme in IT Infrastructure, Systems & Security)",
      modules: [
        "Network Security",
        "Cyber Defense Mechanisms",
        "System Administration",
        "Cryptography",
        "Incident Response"
      ]
    },
    {
      program: "PGCP-ESD (Post Graduate Certificate Programme in Embedded Systems Design)",
      modules: [
        "Embedded C Programming",
        "RTOS Concepts",
        "Hardware Design",
        "IoT Fundamentals",
        "Sensor Networks"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen mt-16 bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 text-center ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-300 mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Masters Courses
                  <span className="block text-xl sm:text-2xl md:text-3xl text-blue-200 mt-2 font-normal">
                    (M.Tech. / M.Sc. / MCA)
                  </span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Powered by C-DAC Bangalore
              </p>
              <p className="text-blue-300 mt-2 text-sm sm:text-base">
                Industry-aligned curriculum with university collaborations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Tabs Navigation */}
        <div className="mb-8 sm:mb-12">
          <div className={`transition-all duration-1000 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-200"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Program Overview</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border-l-4 border-blue-500">
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    C-DAC Bangalore introduces Master Courses designed for MTech and MSc students from external universities. 
                    These specialized modules are drawn from our core programs: DBDA, DAC, DITISS, and DESD.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Target Audience */}
                  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Target Audience</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "MTech students from affiliated universities",
                        "MSc students pursuing technology-related degrees",
                        "Students attending one semester of their academic program"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Features */}
                  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Program Features</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">One semester duration</span>
                      </li>
                      <li className="flex items-start">
                        <Briefcase className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Industry professionals as faculty</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Structured evaluation and certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vision & Goal Tab */}
          {activeTab === "vision" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Vision & Goal</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Vision Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Vision</h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Establish C-DAC as a hub of excellence in specialized technical education, 
                    recognized for producing industry-ready professionals adept at addressing 
                    contemporary challenges.
                  </p>
                  
                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">Key Focus Areas:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Hub of technical education excellence",
                        "Industry-ready professionals",
                        "Addressing contemporary challenges",
                        "Recognition in specialized education"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Goal Card */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 sm:p-8 shadow-lg border border-indigo-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Goal</h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Enhancing technical proficiency, fostering innovation through applied learning, 
                    and achieving a high employment rate post-program completion.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: "🎯", title: "Technical Proficiency", desc: "Advanced skill development" },
                      { icon: "💡", title: "Applied Learning", desc: "Fostering innovation" },
                      { icon: "📈", title: "High Employment", desc: "Post-program success rate" }
                    ].map((item, index) => (
                      <div key={index} className="text-center bg-white/80 rounded-lg p-4">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Program Structure Tab */}
          {activeTab === "structure" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Program Structure</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Course Structure */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Course Structure</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-3 text-base">Duration</h4>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-800 text-center text-lg font-semibold">One Semester (4-6 months)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-3 text-base">Module Selection</h4>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-700 text-sm">
                          Students choose specialized modules from C-DAC's core programs (DBDA, DAC, DITISS, DESD)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Project Module */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                      <Briefcase className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Mini Project Module</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-3 text-base">Project Timeline</h4>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          Project topics identified within first three months with faculty consultation
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-3 text-base">Evaluation Phases</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { percent: "20%", label: "Phase I", color: "bg-blue-100 text-blue-800" },
                          { percent: "20%", label: "Mid Evaluation", color: "bg-amber-100 text-amber-800" },
                          { percent: "60%", label: "Final Evaluation", color: "bg-green-100 text-green-800" }
                        ].map((phase, index) => (
                          <div key={index} className={`rounded-lg p-3 text-center ${phase.color}`}>
                            <div className="text-lg font-bold">{phase.percent}</div>
                            <div className="text-xs">{phase.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

       
          {/* Available Modules Tab */}
          {activeTab === "modules" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Available Courses</h2>
              
              <div className="mb-8">
                <p className="text-slate-600 text-base leading-relaxed">
                  Universities can select modules from these core C-DAC programs for their Master's students.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {availableModules.map((program, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                        index === 0 ? 'bg-purple-100' : 
                        index === 1 ? 'bg-blue-100' : 
                        index === 2 ? 'bg-green-100' : 'bg-amber-100'
                      }`}>
                        <Database className={`w-5 h-5 ${
                          index === 0 ? 'text-purple-600' : 
                          index === 1 ? 'text-blue-600' : 
                          index === 2 ? 'text-green-600' : 'text-amber-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight">{program.program}</h3>
                        <p className="text-slate-500 text-sm mt-1">Select modules from this program</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium text-slate-800 mb-3 text-sm">Sample Modules:</h4>
                      <ul className="space-y-2">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Registration Info */}
              <div className="mt-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">For Universities</h3>
                    <p className="text-slate-600 text-sm">
                      Universities interested in enrolling their students should contact the 
                      C-DAC Academic Coordination Team for detailed module offerings and scheduling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Information</h3>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 text-blue-600 mr-2" />
                        <a href="mailto:bd-blr@cdac.in" className="text-blue-600 hover:underline">
                          bd-blr@cdac.in
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-blue-600 mr-2" />
                        <span>+91-80-2854-3000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Collaborations Tab */}
          {activeTab === "collaborations" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">University Collaborations</h2>
              
              <div className="space-y-8">
                {/* Current Collaborations */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 border border-green-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Active Collaborations</h3>
                      <p className="text-emerald-600 text-sm">Official partnerships with leading universities</p>
                    </div>
                  </div>
                  
                  {/* CHRIST University */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center mr-4">
                        <span className="text-2xl">🏫</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">CHRIST University</h4>
                        <p className="text-slate-600 text-sm">Official Partner for M.Tech. & M.Sc. Courses</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-3 text-base">Collaboration Scope:</h5>
                        <ul className="space-y-2">
                          {[
                            "Joint M.Tech. programs with C-DAC modules",
                            "M.Sc. courses with industry-relevant curriculum",
                            "Shared faculty and resource exchange"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-slate-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-3 text-base">Program Benefits:</h5>
                        <ul className="space-y-2">
                          {[
                            "Dual certification opportunities",
                            "Industry internships and placements",
                            "Research collaboration opportunities"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-slate-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership Inquiry */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border border-blue-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Become a Partner University</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 text-base">Benefits for Partner Universities:</h4>
                      <ul className="space-y-3">
                        {[
                          "Access to C-DAC's industry-aligned curriculum",
                          "Enhanced student employability rates",
                          "Faculty development opportunities",
                          "Joint research and project opportunities"
                        ].map((benefit, index) => (
                          <li key={index} className="flex items-start text-slate-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 text-base">Contact for Collaboration:</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MessageSquare className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-slate-700 text-sm font-medium">Academic Partnerships Team</p>
                            <a href="mailto:bd-blr@cdac.in" className="text-blue-600 hover:underline text-sm">
                              bd-blr@cdac.in
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-slate-700 text-sm font-medium">Phone Support</p>
                            <p className="text-slate-700 text-sm">+91-80-2854-3000</p>
                          </div>
                        </div>
                        <div className="pt-4">
                          <a 
                            href="mailto:bd-blr@cdac.in"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                          >
                            Request Partnership Information
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-10 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Enroll Your Students?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
              Partner with C-DAC Bangalore to provide industry-aligned Master Courses for your MTech and MSc students.
            </p>
            <a 
              href="mailto:bd-blr@cdac.in"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-base shadow-lg"
            >
              Contact Academic Team
            </a>
          </div>
        </div>

        {/* C-DAC Footer */}
        <div className={`mt-8 sm:mt-12 transition-all duration-1000 delay-800 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center pt-6 sm:pt-8 border-t border-slate-200">
            <div className="inline-flex items-center bg-blue-50 px-6 py-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-4">
                <span className="text-white font-bold text-base">C</span>
              </div>
              <div className="text-left">
                <p className="text-slate-700 font-medium text-base">© C-DAC Bangalore</p>
                <p className="text-slate-500 text-sm">Ministry of Electronics & Information Technology (MeitY)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;