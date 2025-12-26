import { useState, useEffect } from "react";
import { GraduationCap, Users, Clock, BookOpen, Award, CheckCircle, FileText, Calendar, DollarSign, Shield, UserCheck, Lock,Phone, AlertTriangle, ClipboardCheck, Database, Briefcase, MessageSquare } from "lucide-react";

const Master = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "structure", label: "Program Structure", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "registration", label: "Registration", icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "evaluation", label: "Evaluation", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "policies", label: "Policies", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "modules", label: "Available Modules", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const availableModules = [
    {
      program: "DBDA (Diploma in Big Data Analytics)",
      modules: [
        "Data Warehousing & Mining",
        "Big Data Technologies",
        "Machine Learning Algorithms",
        "Data Visualization",
        "Statistical Methods"
      ]
    },
    {
      program: "DAC (Diploma in Advanced Computing)",
      modules: [
        "Advanced Algorithms",
        "Software Engineering",
        "Cloud Computing",
        "Web Technologies",
        "Database Management"
      ]
    },
    {
      program: "DITISS (Diploma in IT Infrastructure, Systems & Security)",
      modules: [
        "Network Security",
        "Cyber Defense Mechanisms",
        "System Administration",
        "Cryptography",
        "Incident Response"
      ]
    },
    {
      program: "DESD (Diploma in Embedded Systems Design)",
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
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-300 mr-3 sm:mr-4" />
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Master Courses
              </h1>
            </div>
            <p className="text-base xs:text-lg sm:text-xl text-blue-200 text-center max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
              Powered by C-DAC Bangalore for MTech & MSc Students
            </p>
            <p className="text-center text-blue-300 mt-1 sm:mt-2 text-xs xs:text-sm sm:text-base px-2">
              Specialized modules from DBDA, DAC, DITISS, and DESD programs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">₹150/hour</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Per module fee</p>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">75%</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Minimum attendance required</p>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">40% Pass</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Minimum marks per component</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className={`transition-all duration-1000 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-4 sm:mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
                  }`}
                >
                  <span className="mr-1.5 sm:mr-2">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Program Overview</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    C-DAC Bangalore introduces Master Courses designed for MTech and MSc students from external universities. 
                    These specialized modules are drawn from our core programs: DBDA, DAC, DITISS, and DESD.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Target Audience
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">MTech students from affiliated universities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">MSc students pursuing technology-related degrees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Students attending one semester of their academic program</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Program Features
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">One semester duration</span>
                      </li>
                      <li className="flex items-start">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Industry professionals as faculty</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Structured evaluation and certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Program Structure Tab */}
          {activeTab === "structure" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Program Structure</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Enrollment Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">University Enrollment</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Universities enroll students for selected modules</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Faculty Allocation</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">C-DAC faculty or industry professionals conduct modules</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Fee Structure</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">₹150 per hour for each enrolled module</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Certification</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Module completion certificates issued by C-DAC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Project Module */}
                <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-green-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Mini Project Module</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Project Timeline</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">Project topics must be identified within the first three months in consultation with faculty</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Team Structure</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">Students work in teams with faculty consultation</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Phased Project Evaluation</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="text-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                          <p className="text-xl sm:text-2xl font-bold text-blue-600">20%</p>
                          <p className="text-xs sm:text-sm text-slate-600">Phase I (Project Supervisor)</p>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-amber-50 rounded-lg">
                          <p className="text-xl sm:text-2xl font-bold text-amber-600">20%</p>
                          <p className="text-xs sm:text-sm text-slate-600">Mid Project Evaluation</p>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg">
                          <p className="text-xl sm:text-2xl font-bold text-green-600">60%</p>
                          <p className="text-xs sm:text-sm text-slate-600">End Project Evaluation</p>
                        </div>
                      </div>
                      <p className="text-center text-xs sm:text-sm text-slate-600 mt-2">Total: 80% for Phase II (Review Committee + Supervisor)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Registration Tab - NEW */}
          {activeTab === "registration" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Registration Process</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Student Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-4 sm:space-y-5">
                      <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                          <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                          Student Undertaking
                        </h4>
                        <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                          <li className="flex items-start">
                            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Must abide by all C-DAC rules and regulations</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Submit correct information during registration</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>False information leads to disqualification/cancellation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-5">
                      <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                          <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                          Eligibility Verification
                        </h4>
                        <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Proof of appearing for qualifying degree required</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Formal undertaking signature mandatory</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>University verification and endorsement</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-amber-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Important Notes</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">University Responsibility</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Universities enroll students on behalf of their MTech/MSc candidates and coordinate with C-DAC for module selection.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Timeline</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Registration deadlines strictly enforced. Late submissions may not be accepted.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Evaluation Tab */}
          {activeTab === "evaluation" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Evaluation System</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Continuous Assessment */}
                  <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Continuous Assessment (60%)
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Lab Tests (40 marks)</h4>
                        <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                          <li>• Minimum one lab examination</li>
                          <li>• Assignments and viva voce</li>
                          <li>• Practical skill assessment</li>
                          <li>• May include assignments, viva, etc.</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Internal Tests (20 marks)</h4>
                        <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                          <li>• Quizzes and assignments</li>
                          <li>• Case studies</li>
                          <li>• Attendance and participation</li>
                          <li>• Optional mid-module/surprise tests</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Course End Examination */}
                  <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                      Course-End Examination (40%)
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Exam Format</h4>
                        <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                          <li>• Objective type questions only</li>
                          <li>• 1-1.5 hour duration</li>
                          <li>• No negative marking</li>
                          <li>• 40-60 questions per paper</li>
                          <li>• Single correct answer options</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Question Levels</h4>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex justify-between">
                            <span className="text-xs sm:text-sm text-slate-600">Easy (Level A)</span>
                            <span className="font-medium text-sm sm:text-base">25%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-xs sm:text-sm text-slate-600">Medium (Level B)</span>
                            <span className="font-medium text-sm sm:text-base">50%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-xs sm:text-sm text-slate-600">Tough (Level C)</span>
                            <span className="font-medium text-sm sm:text-base">25%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question Paper Guidelines */}
                <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">CEE Question Paper Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Format Requirements</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                        <li>• Use provided sample paper format</li>
                        <li>• Module name must be mentioned</li>
                        <li>• Easy to understand language</li>
                        <li>• Arial font, size 12 point</li>
                        <li>• No bold formatting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Content Requirements</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                        <li>• Cover entire syllabus</li>
                        <li>• Original questions only</li>
                        <li>• Not copied from existing sources</li>
                        <li>• One correct answer per question</li>
                        <li>• Mention source where possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Passing Criteria */}
                <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-amber-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Passing Requirements & Moderation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Passing Criteria</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mb-2">
                        Students must score <span className="font-bold">minimum 40%</span> in each evaluation component 
                        AND in aggregate to pass a module.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        <span className="font-bold text-red-600">Note:</span> Scoring above 40% aggregate but below 40% in any component results in failure.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Grace Marks Policy</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                        <li>• Maximum 4% of total marks across all modules</li>
                        <li>• Maximum 8% per individual module</li>
                        <li>• Applied after final marks compilation</li>
                        <li>• For deserving candidates only</li>
                        <li>• Medical cases considered for attendance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Security Guidelines */}
                <div className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-slate-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-600" />
                    Security & Data Protection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Data Security</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                        <li>• Secure storage of evaluation data</li>
                        <li>• Password-protected question papers</li>
                        <li>• Separate domain for sensitive data</li>
                        <li>• Regular data backups</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Access Control</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1">
                        <li>• Authorized personnel only</li>
                        <li>• Designated secure areas</li>
                        <li>• Restricted soft copy access</li>
                        <li>• Confidentiality maintained</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Policies Tab */}
          {activeTab === "policies" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Program Policies</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <h3 className="font-semibold text-slate-900 mb-2.5 sm:mb-3 flex items-center text-sm sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Attendance Policy
                    </h3>
                    <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>75% minimum attendance required for exam eligibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Aggregate of all technical modules</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Arrive 10 minutes before class sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Prior approval required for absence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Medical certificates considered for valid cases</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <h3 className="font-semibold text-slate-900 mb-2.5 sm:mb-3 flex items-center text-sm sm:text-base">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                      Campus Conduct
                    </h3>
                    <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>ID card must be displayed at all times</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Mobile phones switched off during sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>English as official communication language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>No leaning on walls or furniture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                        <span>Maintain cleanliness in all areas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-red-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Strict Prohibitions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Zero Tolerance Actions</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                          <span>Smoking strictly prohibited in entire campus</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                          <span>Alcohol consumption leads to immediate expulsion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                          <span>Cheating/stealing results in immediate expulsion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                          <span>Misbehavior with staff leads to expulsion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-1.5 sm:mr-2">•</span>
                          <span>Misuse of internet facility punished appropriately</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Dress Code</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Formal attire required on Mondays, Wednesdays, and Fridays. 
                          Casual wear allowed on remaining weekdays.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Communication Protocol</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          English mandatory for all communication. Contact Programme Coordinator for unresolved issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Campus Facilities & Safety</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Parking & Belongings</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                        <li>• Park vehicles carefully in designated areas</li>
                        <li>• Do not keep valuables in bags</li>
                        <li>• C-DAC not responsible for lost items</li>
                        <li>• Switch off equipment when not in use</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Classroom & Lab Rules</h4>
                      <ul className="text-slate-600 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                        <li>• Keep chairs and equipment in proper place</li>
                        <li>• Switch off computers, lights, and AC when leaving</li>
                        <li>• Limited internet access provided</li>
                        <li>• Follow staff instructions strictly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Available Modules Tab */}
          {activeTab === "modules" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Available Modules</h2>
              <p className="text-slate-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">
                Universities can select modules from these core C-DAC programs for their Master's students.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {availableModules.map((program, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 ${
                        index === 0 ? 'bg-purple-100' : 
                        index === 1 ? 'bg-blue-100' : 
                        index === 2 ? 'bg-green-100' : 'bg-amber-100'
                      }`}>
                        <Database className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          index === 0 ? 'text-purple-600' : 
                          index === 1 ? 'text-blue-600' : 
                          index === 2 ? 'text-green-600' : 'text-amber-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{program.program}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">Select modules from this program</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4">
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Sample Modules:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-300 rounded-full mr-2 sm:mr-3"></span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Registration & Inquiries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">For Universities</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Universities interested in enrolling their students should contact the 
                      C-DAC Academic Coordination Team for detailed module offerings and scheduling.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Contact Information</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-blue-600" />
                      Email: <a href="mailto:bd-blr@cdac.in" className="text-blue-600 hover:underline">bd-blr@cdac.in</a><br />
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-blue-600" />
                      Phone: +91-80-2854-3000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Ready to Enroll Your Students?</h3>
            <p className="mb-4 sm:mb-6 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Partner with C-DAC Bangalore to provide industry-aligned Master Courses for your MTech and MSc students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href="mailto:bd-blr@cdac.in"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Contact Academic Team
              </a>
             
            </div>
            <p className="mt-4 sm:mt-6 text-blue-200 text-xs sm:text-sm">
              Non-compliance with policies may result in penalties, including cancellation of enrollment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;