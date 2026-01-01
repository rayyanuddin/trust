import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Elabs = () => {
  const [activeSection, setActiveSection] = useState("purpose");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  const focusAreas = [
    { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Cyber Security", icon: "🛡️", color: "from-red-500 to-orange-400" },
    { name: "Cloud Computing", icon: "☁️", color: "from-blue-500 to-cyan-400" },
    { name: "Data Science", icon: "📊", color: "from-green-500 to-emerald-400" },
    { name: "Quantum Computing", icon: "⚛️", color: "from-indigo-500 to-purple-400" },
    { name: "High Performance Computing", icon: "🚀", color: "from-orange-500 to-yellow-400" },
    { name: "Embedded Systems / IoT", icon: "🔌", color: "from-teal-500 to-green-400" },
  ];

  const beneficiaries = [
    { group: "Engineering Students", description: "Primarily 7th & 8th semester", icon: "🎓" },
    { group: "Final-year Project Students", description: "Industry-aligned project guidance", icon: "📋" },
    { group: "Faculty Members", description: "Faculty Development Programmes (FDPs)", icon: "👨‍🏫" },
    { group: "Research Scholars", description: "Advanced research guidance", icon: "🔬" },
    { group: "Recently Passed-out Graduates", description: "Skill enhancement opportunities", icon: "🎯" },
  ];

  const operatingModel = {
    college: [
      "Dedicated laboratory space",
      "Classrooms with AV facilities",
      "Power supply, networking & internet",
      "Basic computing infrastructure",
      "Administrative support"
    ],
    cdac: [
      "Design industry-aligned curriculum",
      "Deploy expert faculty / subject matter experts",
      "Provide course content and assessment frameworks",
      "Mentor students on projects, hackathons, and internships",
      "Support certification and evaluation",
      "Enable research and innovation guidance"
    ]
  };

  const academicActivities = [
    {
      activity: "Skill Development Programmes",
      description: "Short-term & long-term certification courses",
      icon: "📚",
      color: "from-blue-500 to-cyan-400"
    },
    {
      activity: "Practicum / Hands-on Labs",
      description: "Technology-focused practical exposure",
      icon: "🔧",
      color: "from-green-500 to-emerald-400"
    },
    {
      activity: "Final-Year Project Mentoring",
      description: "Industry problem statements & guidance",
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      activity: "Faculty Development Programmes",
      description: "Upskilling teaching faculty",
      icon: "👨‍🏫",
      color: "from-orange-500 to-amber-400"
    },
    {
      activity: "Internships (WBL Model)",
      description: "Work-Based Learning with stipend support",
      icon: "💼",
      color: "from-indigo-500 to-blue-400"
    },
    {
      activity: "Workshops & Seminars",
      description: "Expert talks and industry sessions",
      icon: "🎤",
      color: "from-red-500 to-orange-400"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate items sequentially
    const timers = [];
    beneficiaries.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setAnimatedItems(prev => [...prev, index]);
        }, 100 * index)
      );
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-8 md:py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                C-DAC Bangalore Initiative
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Centre of Excellence (CoE)
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 animate-fade-in">
              Bridging the gap between academia and industry through advanced technology exposure and hands-on learning
            </p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in delay-300">
            {[
              { id: "purpose", label: "Purpose", icon: "🎯" },
              { id: "focus", label: "Focus Areas", icon: "🔍" },
              { id: "beneficiaries", label: "Beneficiaries", icon: "👥" },
              { id: "model", label: "Operating Model", icon: "⚙️" },
              { id: "activities", label: "Activities", icon: "📋" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Purpose Section */}
        {activeSection === "purpose" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Purpose of CoE</h2>
                    <p className="text-slate-600">Bridging academic-industry gap</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: "🚀", text: "Advanced technology exposure", color: "from-blue-500 to-cyan-400" },
                    { icon: "🔧", text: "Hands-on, project-based learning", color: "from-green-500 to-emerald-400" },
                    { icon: "📜", text: "Industry-aligned certifications", color: "from-purple-500 to-pink-500" },
                    { icon: "💡", text: "Research, innovation, and employability enhancement", color: "from-orange-500 to-amber-400" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50 hover:border-blue-300 transition-all duration-300 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 to-cyan-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center animate-pulse-slow">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Collaborative Model</h2>
                    <p className="text-slate-600">C-DAC & Academic Partnership</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-3">Joint Implementation</h3>
                    <p className="text-slate-700 mb-4">
                      Technology focus will be finalized jointly by C-DAC Bangalore and the host institution based on regional and academic relevance.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        🏛️
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Host Institution</div>
                        <div className="text-slate-600">Academic & Infrastructure Support</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center text-white">
                      ⚡
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Future-Ready Education</div>
                      <div className="text-sm text-slate-600">Preparing students for industry challenges</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Focus Areas Section */}
        {activeSection === "focus" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Focus Areas</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Emerging technologies where CoEs may be established based on regional and academic relevance
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group cursor-pointer ${
                    index === 0 ? 'col-span-full lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-center text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {area.name}
                  </h3>
                  <div className="h-1 w-12 mx-auto bg-gradient-to-r from-slate-200 to-slate-200 rounded-full group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Beneficiaries Section */}
        {activeSection === "beneficiaries" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Target Beneficiaries</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Multiple stakeholders benefit from the Centre of Excellence programs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficiaries.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    animatedItems.includes(index)
                      ? 'translate-y-0 opacity-100 scale-100'
                      : 'translate-y-10 opacity-0 scale-95'
                  }`}
                >
                  <div className="bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {item.group}
                        </h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Animated indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-progress"
                          style={{ animationDelay: `${index * 200}ms` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-blue-600">
                        {index + 1}/{beneficiaries.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Operating Model Section */}
        {activeSection === "model" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">CoE Operating Model</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Collaborative framework between academic institutions and C-DAC Bangalore
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* College Responsibility */}
              <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Infrastructure Support</h2>
                    <p className="text-slate-600">College Responsibility</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {operatingModel.college.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-slate-200/50 hover:border-blue-300 hover:shadow-md transition-all duration-300 group animate-fade-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* C-DAC Support */}
              <div className="bg-gradient-to-br from-white/80 to-green-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Academic & Technical Support</h2>
                    <p className="text-slate-600">C-DAC Bangalore</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {operatingModel.cdac.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all duration-300 group animate-fade-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Academic Activities Section */}
        {activeSection === "activities" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Activities under CoE</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive programs designed for holistic skill development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        <span className="text-xl">{activity.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {activity.activity}
                        </h3>
                        <p className="text-slate-600 text-sm">{activity.description}</p>
                      </div>
                    </div>
                    
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Partnership CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl animate-float">
            <div className="p-8 md:p-12 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Establish a CoE at Your Institution
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Partner with C-DAC Bangalore to create a Centre of Excellence and transform your institution's technical education ecosystem.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                   
                    <Link
                      to="/contact"
                      className="group px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                    >
                      <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                      </svg>
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">🏛️</div>
                    <div className="text-blue-100 font-semibold mb-1">Transform Education</div>
                    <div className="text-blue-200 text-sm">Bridge the industry-academia gap with cutting-edge CoE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out;
        }
        
        .animate-progress {
          animation: progress 1.5s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
      `}</style>
    </div>
  );
};

export default Elabs;