import { useState, useEffect } from "react";
import { Target, Users, Clock, Award, BookOpen, GraduationCap, Shield, CheckCircle, Briefcase, Cpu, Lock, Brain, Microchip, Wrench } from "lucide-react";

const Practium = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "structure", label: "Program Structure", icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "curriculum", label: "Curriculum", icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "benefits", label: "Benefits", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "eligibility", label: "Eligibility", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const technologyDomains = [
    {
      name: "Data Science",
      description: "Advanced analytics, machine learning, and data visualization techniques",
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Cyber Security",
      description: "Network security, threat analysis, and defense mechanisms",
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Artificial Intelligence",
      description: "AI algorithms, neural networks, and intelligent systems",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Embedded Systems",
      description: "Hardware-software integration and IoT applications",
      icon: <Microchip className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "VLSI Design & Testing",
      description: "Integrated circuit design and verification",
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const programElements = [
    {
      title: "Direct Application of Knowledge",
      description: "Students apply theoretical concepts to solve real-world industry challenges",
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Expert Supervision & Guidance",
      description: "Mentorship from industry professionals and experienced instructors",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Project-Based Learning",
      description: "Hands-on projects that deliver tangible outcomes and measurable results",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Holistic Skill Development",
      description: "Technical expertise combined with soft skills and critical thinking",
      icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Structured Evaluation",
      description: "Continuous assessment and feedback for professional growth",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-300 mr-3 sm:mr-4" />
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Practicum Program
              </h1>
            </div>
            <p className="text-base xs:text-lg sm:text-xl text-blue-200 text-center max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
              Project-Based Learning for Final-Year Students
            </p>
            <p className="text-center text-blue-300 mt-1 sm:mt-2 text-xs xs:text-sm sm:text-base px-2">
              400-Hour Intensive Training | NSQF Level 5 Certified
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">400 Hours</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Intensive Training</p>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">200 Students</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">From Minority Communities</p>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">NSQF Level 5</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Industry Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
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
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:cursor-pointer shadow-sm"
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
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Objective</h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    The Practicum Program is designed to enhance the skills and employability of students from 
                    minority institutions in Karnataka. This intensive 400-hour project-based learning program 
                    bridges the gap between academic knowledge and industry requirements through hands-on 
                    experience in advanced technology domains.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Program Vision
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      To create industry-ready professionals through C-DAC's specialized hands-on and 
                      project-based training, aligned with the vision of fostering skilled manpower for 
                      the technology sector.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                      Quality Assurance
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      The program is aligned with NCVET and NSQF Level 5 standards, ensuring high-quality, 
                      industry-recognized training that enhances employability and prepares students for 
                      meaningful careers.
                    </p>
                  </div>
                </div>

                {/* Key Elements */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Key Program Elements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {programElements.map((element, index) => (
                      <div 
                        key={index}
                        className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-100"
                      >
                        <div className="flex items-center mb-2 sm:mb-3">
                          <div className="bg-blue-100 text-blue-600 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                            {element.icon}
                          </div>
                          <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{element.title}</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm">{element.description}</p>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Program Structure</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">400-Hour Intensive Program</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Core Components</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Hands-on project-based learning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Industry-relevant technology training</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Real-world problem solving</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Supervised practical experience</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Learning Approach</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Learning-by-doing methodology</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Direct application of theoretical knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Continuous assessment and feedback</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm sm:text-base">Industry mentorship and guidance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-green-500">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Target Audience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Primary Participants</h4>
                      <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <li>• Final-year engineering students</li>
                        <li>• Recent graduates seeking industry exposure</li>
                        <li>• Students from minority institutions in Karnataka</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Program Capacity</h4>
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <p className="text-xl sm:text-2xl font-bold text-green-600 mb-0.5 sm:mb-1">200 Students</p>
                        <p className="text-xs sm:text-sm text-slate-500">Comprehensive training across batches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === "curriculum" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Curriculum & Technology Domains</h2>
              
              <div className="space-y-6 sm:space-y-8">
                {/* Technology Domains */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Core Technology Training Areas</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {technologyDomains.map((domain, index) => (
                      <div 
                        key={index}
                        className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                      >
                        <div className={`bg-gradient-to-r ${domain.color} text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {domain.icon}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{domain.name}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">{domain.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supplementary Training */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Supplementary Training Components</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-600" />
                        Soft Skills Development
                      </h4>
                      <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <li>• Communication and presentation skills</li>
                        <li>• Teamwork and collaboration</li>
                        <li>• Problem-solving techniques</li>
                        <li>• Professional etiquette</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-600" />
                        Aptitude Training
                      </h4>
                      <ul className="text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <li>• Quantitative aptitude</li>
                        <li>• Logical reasoning</li>
                        <li>• Verbal ability</li>
                        <li>• Technical aptitude</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* NSQF Alignment */}
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mr-3 sm:mr-4" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">NSQF Level 5 Certification</h3>
                      <p className="text-slate-600 text-xs sm:text-sm">Industry-recognized competency standards</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Standards Compliance</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        All program components are designed to meet NSQF Level 5 standards, 
                        ensuring mid-level proficiency that is both industry-relevant and formally recognized.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Quality Framework</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Aligned with NCVET guidelines to provide standardized, competency-based 
                        training that enhances employability and career readiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Program Benefits</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* For Students */}
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Benefits for Students</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Enhanced industry readiness and employability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Hands-on experience with real-world projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">NSQF Level 5 certified training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Development of critical problem-solving skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Exposure to cutting-edge technologies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Industry mentorship and networking opportunities</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Institutions */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Benefits for Institutions</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Enhanced placement opportunities for students</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Industry-aligned curriculum implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Strengthened industry-academia collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Improved student skill development outcomes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Recognition through C-DAC certified training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Access to advanced training resources and expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Outcome Highlights */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Expected Outcomes</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-white rounded-lg p-3 sm:p-4 text-center">
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">100%</p>
                      <p className="text-xs sm:text-sm text-slate-600">Practical Skill Development</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 text-center">
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">NSQF L5</p>
                      <p className="text-xs sm:text-sm text-slate-600">Industry Certification</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 text-center">
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">200+</p>
                      <p className="text-xs sm:text-sm text-slate-600">Trained Professionals</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 text-center">
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">400 hrs</p>
                      <p className="text-xs sm:text-sm text-slate-600">Intensive Training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility Tab */}
          {activeTab === "eligibility" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Eligibility & Registration</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Academic Qualification</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Final-year engineering students or recent graduates</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Institutional Affiliation</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Students from minority institutions in Karnataka</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Technical Background</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Basic understanding of computer science concepts</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Commitment</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Ability to complete 400 hours of intensive training</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Registration Process */}
                  <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Registration Process</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-green-600 font-bold text-sm sm:text-base">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Institution Nomination</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Universities nominate eligible students</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-green-600 font-bold text-sm sm:text-base">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Documentation</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Submit academic records and identification</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-green-600 font-bold text-sm sm:text-base">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Selection</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Review and confirmation by C-DAC team</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                          <span className="text-green-600 font-bold text-sm sm:text-base">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Program Commencement</h4>
                          <p className="text-slate-600 text-xs sm:text-sm">Orientation and training schedule finalization</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg sm:rounded-xl p-6 sm:p-8 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">For More Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center">
                      <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Program Coordinator</h4>
                      <p className="text-blue-200 text-sm sm:text-base">C-DAC Bangalore</p>
                      <a 
                        href="mailto:bd-blr@cdac.in"
                        className="text-blue-300 hover:text-white font-medium hover:underline inline-block mt-1 sm:mt-2 text-sm sm:text-base"
                      >
                        bd-blr@cdac.in
                      </a>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Phone</h4>
                      <p className="text-blue-200 text-sm sm:text-base">+91-80-2854-3000</p>
                      <p className="text-xs sm:text-sm text-blue-300 mt-1 sm:mt-2">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Transform Your Students' Careers</h3>
            <p className="mb-4 sm:mb-6 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Partner with C-DAC Bangalore to provide industry-aligned project-based learning for your final-year students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href="mailto:bd-blr@cdac.in"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Request Program Details
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practium;