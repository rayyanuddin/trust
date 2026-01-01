import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Coporate = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredQuarter, setHoveredQuarter] = useState(null);
  const [statsAnimated, setStatsAnimated] = useState(Array(4).fill(false));

  const trainingStats = [
    { number: "10+", label: "Current Trainees", description: "Corporate employees actively training", color: "from-blue-500 to-cyan-400" },
    { number: "50+", label: "Modules Available", description: "ACTS and PG-DAC modules", color: "from-purple-500 to-pink-500" },
    { number: "2026", label: "Training Calendar", description: "Planned for upcoming year", color: "from-green-500 to-emerald-400" },
    { number: "100%", label: "Customizable", description: "Tailored to corporate needs", color: "from-orange-500 to-amber-400" }
  ];

  const trainingModules = [
    {
      title: "PG-DAC Course Modules",
      description: "Corporate employees attending specialized modules from PG-DAC curriculum",
      features: [
        "Advanced Computing Concepts",
        "Software Development Practices",
        "Cloud Technologies",
        "Data Analytics",
        "Cybersecurity Fundamentals"
      ],
      color: "from-blue-500 to-cyan-400",
      icon: "📚"
    },
    {
      title: "ACTS Courses",
      description: "Specialized training programs designed for corporate skill enhancement",
      features: [
        "Industry-specific curriculum",
        "Hands-on practical sessions",
        "Real-world case studies",
        "Expert-led workshops",
        "Certification programs"
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🎯"
    },
    {
      title: "Custom Corporate Training",
      description: "Tailored programs to meet specific organizational requirements",
      features: [
        "Needs assessment & analysis",
        "Custom curriculum design",
        "Flexible scheduling",
        "On-site/Online delivery",
        "Progress tracking & reporting"
      ],
      color: "from-green-500 to-emerald-400",
      icon: "⚙️"
    }
  ];

  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats one by one
    const timers = trainingStats.map((_, index) => 
      setTimeout(() => {
        setStatsAnimated(prev => {
          const newStats = [...prev];
          newStats[index] = true;
          return newStats;
        });
      }, 300 + index * 200)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-8 md:py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section with Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Corporate Training Programs
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 animate-fade-in">
              Empowering corporate workforce with cutting-edge skills through specialized training programs
              and industry-relevant curriculum
            </p>
          </div>
          
          {/* Stats Grid with Stagger Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {trainingStats.map((stat, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  statsAnimated[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-10 opacity-0 scale-95'
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-white/50 group relative overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    {/* Counting animation effect */}
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 animate-number-in`}>
                      {stat.number}
                    </div>
                    <div className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-500">{stat.description}</div>
                    
                    {/* Animated underline on hover */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Slide-in Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Left Column - Training Overview */}
          <div className="space-y-8">
            {/* Current Training Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Current Training Status</h2>
                  <p className="text-slate-600">Active corporate training programs</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      👥
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        Active Corporate Trainees
                      </div>
                      <div className="text-sm text-slate-500">Currently enrolled in training programs</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 animate-bounce-subtle">10+</div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 rounded-xl p-6 animate-gradient-border">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-500 animate-bounce">✨</span>
                    Program Highlights
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Training for Corporate Employees in addition to ACTS Courses",
                      "Corporate Employees attending some modules in PG-DAC Course",
                      "Corporate Training Calendar planned to be created for 2026"
                    ].map((highlight, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 group animate-fade-in-left"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Training Calendar Preview with Hover Effects */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up delay-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse-slow shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">2026 Training Calendar</h2>
                  <p className="text-slate-600">Upcoming corporate training schedule</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {quarters.map((quarter, index) => (
                    <div 
                      key={index}
                      onMouseEnter={() => setHoveredQuarter(index)}
                      onMouseLeave={() => setHoveredQuarter(null)}
                      className={`relative p-4 rounded-lg border-2 transition-all duration-300 transform ${
                        hoveredQuarter === index 
                          ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 scale-105 shadow-lg' 
                          : 'border-purple-100 bg-white hover:border-purple-200'
                      }`}
                    >
                      <div className="font-bold text-purple-600 mb-1 animate-bounce-subtle">{quarter} 2026</div>
                      <div className="text-sm text-slate-500">Training Programs</div>
                      <div className="mt-2 text-xs px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full inline-block">
                        Planning Phase
                      </div>
                      
                      {/* Hover effect */}
                      {hoveredQuarter === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white animate-spin-slow">
                      📅
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Calendar Features</div>
                      <div className="text-sm text-slate-600">
                        Quarterly programs with flexible scheduling options
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Training Modules */}
          <div>
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-8 border border-white/50 transform hover:shadow-2xl transition-all duration-500">
                <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-6 animate-gradient-x">
                  <h2 className="text-2xl font-bold text-white">Training Modules</h2>
                  <p className="text-slate-300">Choose from our comprehensive training programs</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {trainingModules.map((module, index) => (
                      <div 
                        key={index}
                        onClick={() => setActiveCard(index)}
                        className={`relative cursor-pointer p-5 rounded-xl border-2 transition-all duration-500 overflow-hidden group ${
                          activeCard === index 
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 transform scale-[1.02] shadow-lg' 
                            : 'border-slate-200/50 hover:border-blue-300 hover:bg-blue-50/30'
                        }`}
                      >
                        {/* Animated background */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          activeCard === index ? 'opacity-100' : ''
                        }`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5"></div>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                        </div>
                        
                        <div className="relative flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            {module.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {module.title}
                            </h3>
                            <p className="text-sm text-slate-600">{module.description}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                            activeCard === index 
                              ? 'border-blue-500 bg-blue-500 scale-110' 
                              : 'border-slate-300 group-hover:border-blue-300'
                          } flex items-center justify-center`}>
                            {activeCard === index && (
                              <svg className="w-3 h-3 text-white animate-spin-once" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                        
                        {activeCard === index && (
                          <div className="relative mt-4 pl-16 animate-fade-in">
                            <div className="space-y-2">
                              {module.features.map((feature, featureIndex) => (
                                <div 
                                  key={featureIndex}
                                  className="flex items-center gap-2 group animate-fade-in-left"
                                  style={{ animationDelay: `${featureIndex * 50}ms` }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:scale-150 transition-transform duration-300"></div>
                                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us with Animation */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-up delay-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-green-600 animate-pulse">✨</span>
                  Why Choose Our Corporate Training?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: "🎯", text: "Industry-Relevant Curriculum", color: "from-green-500 to-emerald-400" },
                    { icon: "👨‍🏫", text: "Expert Trainers with Industry Experience", color: "from-blue-500 to-cyan-400" },
                    { icon: "📊", text: "Practical Hands-on Approach", color: "from-purple-500 to-pink-500" },
                    { icon: "🏆", text: "Certification & Recognition", color: "from-orange-500 to-amber-400" },
                    { icon: "🔄", text: "Flexible Training Models", color: "from-indigo-500 to-blue-400" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-4 p-3 rounded-lg bg-white/50 hover:bg-white backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2 animate-fade-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        {item.icon}
                      </div>
                      <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.text}
                      </div>
                      {/* Arrow on hover */}
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Floating Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl animate-float ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-8 md:p-12 relative overflow-hidden">
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in">
                  Elevate Your Team's Skills
                </h2>
                <p className="text-blue-100 mb-6 animate-fade-in delay-100">
                  Partner with us to design customized training programs that drive your organization's growth and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
                  <button className="group px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Request Training Proposal
                  </button>
                  <Link
                    to="/contact"
                    className="group px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                    Contact Training Coordinator
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 animate-pulse-slow">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 animate-count-up">10+</div>
                  <div className="text-blue-100 font-semibold mb-1">Companies Already Training</div>
                  <div className="text-blue-200 text-sm">Join leading organizations in upskilling their workforce</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="text-center text-slate-500 text-sm animate-fade-in delay-500">
          <p>
            All training programs are conducted in partnership with C-DAC's Advanced Computing Training School (ACTS) 
            and follow industry best practices.
          </p>
        </div>
      </div>

      {/* Custom Animation Styles */}
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
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spinOnce {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes countUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-x {
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
          animation: fadeInLeft 0.5s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.5s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .animate-spin-once {
          animation: spinOnce 0.5s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animate-count-up {
          animation: countUp 0.8s ease-out;
        }
        
        .animate-number-in {
          animation: fadeInUp 0.5s ease-out;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
};

export default Coporate;