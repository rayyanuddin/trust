import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Future = () => {
  const [activeSection, setActiveSection] = useState("bridge");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Registration links from both sources
  const futureskillsPrimeLink = "https://www.futureskillsprime.in/";
  const bridgeCourseDirectLink = "https://www.futureskillsprime.in/course/bridge-course-for-iot-software-analyst";
  const nasscomPortalLink = "https://nasscom.futureskillsprime.in/";
  const bridgeCourseRegistrationLink = "https://nasscom.futureskillsprime.in/course/bridge-course-for-iot-software-analyst";

  const bridgeCourseFeatures = [
    { icon: "🕒", text: "90 Hours Duration", subtext: "Flexible timings / Self-Paced Learning", note: "Complete within 4 months from registration" },
    { icon: "👨‍🏫", text: "10+ Years Experienced Faculty", subtext: "Expert IoT technology instructors" },
    { icon: "🏆", text: "Industry Recognized Certificate", subtext: "Co-branded Govt Certificate" },
    { icon: "🔧", text: "Optional Hands-on Training", subtext: "On Campus Hardware Kits" },
    { icon: "💼", text: "Job Ready Curriculum", subtext: "Designed for employability" },
    { icon: "💬", text: "Live Doubt Clarification", subtext: "In-person or online sessions" },
    { icon: "🔬", text: "24*7 E-Labs", subtext: "Round-the-clock virtual labs" },
    { icon: "💰", text: "Govt. Incentive", subtext: "50% fee reimbursement" }
  ];

  const trainingPrograms = [
    {
      title: "Bridge Course - IoT",
      description: "Blended learning course for IoT software analysts",
      duration: "90 Hours",
      mode: "Blended Learning / Online",
      price: "₹100 + GST",
      features: ["Industry certification", "Government incentive", "Flexible learning"],
      color: "from-blue-500 to-cyan-400",
      link: bridgeCourseRegistrationLink,
      portalNote: "Available at NASSCOM FutureSkills PRIME portal"
    },
    {
      title: "GoT (Basic) - IoT",
      description: "Foundation training for government officials",
      duration: "Custom",
      mode: "In-person / Online",
      price: "Govt. Sponsored",
      features: ["Basic IoT concepts", "Government focused", "Practical insights"],
      color: "from-purple-500 to-pink-500",
      link: nasscomPortalLink
    },
    {
      title: "GoT (Advanced) - IoT",
      description: "Advanced IoT training for government officials",
      duration: "Custom",
      mode: "In-person / Online",
      price: "Govt. Sponsored",
      features: ["Advanced concepts", "Case studies", "Implementation strategies"],
      color: "from-green-500 to-emerald-400",
      link: nasscomPortalLink
    },
    {
      title: "5-Day Bootcamp",
      description: "Intensive in-person IoT training",
      duration: "5 Days",
      mode: "In-person",
      price: "Institutional",
      features: ["Hands-on sessions", "Real applications", "Immersive experience"],
      color: "from-orange-500 to-amber-400",
      link: nasscomPortalLink
    }
  ];

  const bootcampFeatures = [
    "In-person training at institution premises",
    "Hands-on IoT device experience",
    "Real-world application insights",
    "Interactive learning sessions",
    "Networking opportunities"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate items based on active section
    const animateItems = () => {
      setAnimatedItems([]);
      
      // Define item counts for each section
      const itemCounts = {
        "bridge": 8,
        "programs": 4,
        "about": 5,
        "incentive": 3
      };
      
      const items = itemCounts[activeSection] || 0;
      
      const timers = [];
      for (let i = 0; i < items; i++) {
        timers.push(
          setTimeout(() => {
            setAnimatedItems(prev => [...prev, i]);
          }, 50 * i)
        );
      }
      
      return () => timers.forEach(timer => clearTimeout(timer));
    };
    
    animateItems();
  }, [activeSection]);

  const handleEnrollClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center animate-pulse-slow">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-1 rounded-full">
                  MeitY & NASSCOM Initiative
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  FutureSkills PRIME – IoT
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 animate-fade-in delay-300">
                Building India's talent track in Internet of Things through industry-government collaboration
              </p>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in delay-500">
            {[
              { id: "about", label: "About Program", icon: "🏛️" },
              { id: "bridge", label: "Bridge Course", icon: "🌉" },
              { id: "programs", label: "Training Programs", icon: "📚" },
              { id: "incentive", label: "Govt. Incentive", icon: "💰" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        
        {/* About FutureSkills Section */}
        {activeSection === "about" && (
          <div className="space-y-12">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transform transition-all duration-700 ${
              animatedItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-fade-in-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center animate-pulse-slow">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Joint Venture</h2>
                      <p className="text-slate-600">Government-Industry Partnership</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-purple-600">
                        🏛️
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Ministry of Electronics and IT</div>
                        <div className="text-sm text-slate-600">Government of India</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-blue-600">
                        🏢
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">NASSCOM</div>
                        <div className="text-sm text-slate-600">National Association of Software and Services Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in-right">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Program Vision</h2>
                      <p className="text-slate-600">Building India's Technology Talent</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 rounded-xl border border-slate-200/50">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Primary Focus</h3>
                      <p className="text-slate-700 mb-3">
                        Aimed to build India's talent track in leading technologies like <span className="font-semibold text-purple-600">Internet of Things (IoT)</span>.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400"></div>
                        <span className="text-sm text-slate-600">Industry-relevant skill development</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
                      <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                        <span className="text-blue-600">🌐</span>
                        IoT Technology Focus
                      </h3>
                      <p className="text-slate-700">
                        Various training programs hosted under FutureSkills PRIME specifically for IoT technology advancement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Training Section */}
            <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-700 delay-300 ${
              animatedItems.length > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Government Officials Training</h2>
                    <p className="text-slate-600">Basic & Advanced IoT Programs</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50/50 rounded-xl">
                    <h3 className="font-semibold text-slate-900 mb-2">Program Design</h3>
                    <p className="text-slate-700 text-sm">
                      Specifically designed for Government Officials to build foundational understanding in Internet of Things.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/50 rounded-lg border border-slate-200/50">
                      <div className="text-2xl font-bold text-blue-600 mb-1">Basic</div>
                      <div className="text-xs text-slate-600">Foundation Course</div>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-lg border border-slate-200/50">
                      <div className="text-2xl font-bold text-purple-600 mb-1">Advanced</div>
                      <div className="text-xs text-slate-600">Expert Level</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">IoT Bootcamps</h2>
                    <p className="text-slate-600">5-Day In-person Training</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50/50 rounded-xl">
                    <p className="text-slate-700 text-sm mb-3">
                      Bootcamps in IoT aim to deliver in-person trainings at institution premises to provide insights on IoT Technologies and its applications.
                    </p>
                    <div className="text-xs text-purple-600 font-medium">5-day program with hands-on sessions</div>
                  </div>
                  
                  <div className="space-y-2">
                    {bootcampFeatures.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-400"></div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Section */}
            <div className={`bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transform transition-all duration-700 delay-500 ${
              animatedItems.length > 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  <span className="text-white text-2xl">©</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Program Partner</h2>
                  <p className="text-slate-600">C-DAC Bangalore - Centre for Development of Advanced Computing</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50/50 rounded-xl">
                <p className="text-slate-700">
                  The FutureSkills PRIME IoT programs are delivered in partnership with <span className="font-semibold text-gray-800">C-DAC Bangalore</span>, a premier R&D organization under MeitY, Government of India.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bridge Course Section */}
        {activeSection === "bridge" && (
          <div className="space-y-12">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 transform transition-all duration-700 ${
              animatedItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 p-8 animate-gradient-x">
                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                    <span className="text-white text-2xl">🌉</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Bridge Course – IoT</h2>
                    <p className="text-blue-100">Blended Learning Program for IoT Software Analysts</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <p className="text-slate-700 mb-4">
                    A Blended Learning Course / Online Mode designed to make candidates job-ready in IoT technology.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {bridgeCourseFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`group bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border border-slate-200/50 rounded-xl p-5 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                        animatedItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 text-xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.text}
                      </h3>
                      <p className="text-sm text-slate-600">{feature.subtext}</p>
                      {feature.note && (
                        <div className="mt-2 text-xs text-blue-500 font-medium bg-blue-50/50 p-1 rounded">
                          {feature.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Registration Links Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      🔗
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Registration Portal Links</h3>
                      <p className="text-sm text-slate-600">Available at NASSCOM FutureSkills PRIME portal</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/70 rounded-lg border border-blue-200">
                      <div className="font-semibold text-slate-900 mb-2">Main Portal</div>
                      <a 
                        href={bridgeCourseDirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        {bridgeCourseDirectLink}
                      </a>
                      <div className="text-xs text-slate-500 mt-1">NASSCOM FutureSkills PRIME Portal</div>
                    </div>
                    
                    <div className="p-4 bg-white/70 rounded-lg border border-blue-200">
                      <div className="font-semibold text-slate-900 mb-2">Direct Course Link</div>
                      <a 
                        href={bridgeCourseRegistrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        Bridge Course for IoT Software Analyst
                      </a>
                      <div className="text-xs text-slate-500 mt-1">Direct registration link for the Bridge Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-700 delay-300 ${
              animatedItems.length > 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-br from-white/80 to-green-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Course Details</h2>
                    <p className="text-slate-600">Program Specifications</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">Duration</div>
                      <div className="text-blue-600 font-bold">90 Hours</div>
                    </div>
                    <div className="text-sm text-slate-600">Complete within 4 months from registration</div>
                  </div>
                  
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">Learning Mode</div>
                      <div className="text-green-600 font-bold">Blended Learning / Online</div>
                    </div>
                    <div className="text-sm text-slate-600">Self-paced with optional hands-on sessions</div>
                  </div>
                  
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">Pricing</div>
                      <div className="text-purple-600 font-bold">₹100 + 18% GST</div>
                    </div>
                    <div className="text-sm text-slate-600">Accessible pricing for quality IoT education</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-xl">💳</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Pricing & Certification</h2>
                    <p className="text-slate-600">Investment & Recognition</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-blue-600 mb-1">₹100</div>
                      <div className="text-sm text-slate-600">+ 18% GST</div>
                    </div>
                    <div className="text-center text-sm text-slate-700">
                      The program is offered at this price at the NASSCOM FutureSkills PRIME portal
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="font-semibold text-slate-900 mb-2">Certification</div>
                    <div className="text-sm text-slate-700 mb-2">
                      <span className="font-medium">Co-branded Certificate issued by FutureSkills PRIME</span> upon successful completion of the course.
                    </div>
                    <div className="text-xs text-green-600 font-medium">Industry & Government Recognized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Training Programs Section */}
        {activeSection === "programs" && (
          <div className="space-y-12">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">IoT Training Programs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive training programs designed for different audiences and learning needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up ${
                    animatedItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        {program.title.includes("Bridge") ? "🌉" : 
                         program.title.includes("GoT") ? "👨‍💼" : "⚡"}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {program.title}
                        </h3>
                        <p className="text-slate-600">{program.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/50 rounded-lg p-3 text-center">
                        <div className="text-xs text-slate-500 mb-1">Duration</div>
                        <div className="font-semibold text-slate-900">{program.duration}</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-3 text-center">
                        <div className="text-xs text-slate-500 mb-1">Mode</div>
                        <div className="font-semibold text-slate-900">{program.mode}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-slate-900 text-lg">{program.price}</div>
                        <button 
                          onClick={() => handleEnrollClick(program.link)}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-medium hover:shadow-md hover:scale-105 transition-all duration-300"
                        >
                          Enroll Now
                        </button>
                      </div>
                      {program.portalNote && (
                        <div className="text-xs text-slate-500">
                          {program.portalNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bootcamp Details */}
            <div className={`bg-gradient-to-br from-white/80 to-orange-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-up transform transition-all duration-700 delay-300 ${
              animatedItems.length > 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center animate-pulse-slow">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">5-Day IoT Bootcamp</h2>
                  <p className="text-slate-600">Immersive In-person Training Experience</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-700 mb-6">
                    This 5-day program is accompanied with hands-on training sessions that help in providing an immersive experience with IoT devices and its applications.
                  </p>
                  
                  <div className="space-y-3">
                    {bootcampFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
                          <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-orange-600">🏢</span>
                    Institutional Benefits
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-slate-700">On-premises training delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-slate-700">Customized curriculum</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-slate-700">Practical skill development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-slate-700">Industry-aligned content</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Information */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xl">🔗</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Registration Information</h2>
                  <p className="text-slate-600">Access all IoT training programs</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/70 rounded-xl border border-blue-200">
                  <div className="font-semibold text-slate-900 mb-3">Primary Registration Portal</div>
                  <a 
                    href={nasscomPortalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2 mb-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    {nasscomPortalLink}
                  </a>
                  <p className="text-sm text-slate-600">All IoT training programs available here</p>
                </div>
                
                <div className="p-5 bg-white/70 rounded-xl border border-purple-200">
                  <div className="font-semibold text-slate-900 mb-3">Bridge Course Direct Link</div>
                  <a 
                    href={bridgeCourseRegistrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm break-all hover:underline flex items-center gap-2 mb-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Bridge Course for IoT Software Analyst
                  </a>
                  <p className="text-sm text-slate-600">Direct link to the Bridge Course registration</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Government Incentive Section */}
        {activeSection === "incentive" && (
          <div className="space-y-12">
            <div className={`bg-gradient-to-br from-white/80 to-green-50/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 transform transition-all duration-700 ${
              animatedItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 p-8 animate-gradient-x">
                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Government of India Incentive</h2>
                    <p className="text-green-100">Make quality IoT education more accessible</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Eligibility & Benefits</h3>
                      <p className="text-slate-700 mb-4">
                        This program is eligible for <span className="font-semibold text-green-600">Government of India Incentive</span> where eligible candidates can be <span className="font-semibold text-green-600">reimbursed with 50% of Course Fees</span> after successful certification.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                            ✅
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">50% Fee Reimbursement</div>
                            <div className="text-sm text-slate-600">For eligible candidates upon certification</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            🎓
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Success-based Incentive</div>
                            <div className="text-sm text-slate-600">Reimbursement after course completion and certification</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-green-600 mb-2 animate-count-up">50%</div>
                      <div className="font-semibold text-slate-900">Course Fee Reimbursement</div>
                      <div className="text-sm text-slate-600 mt-2">Government of India Support</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700 mb-1">₹50</div>
                        <div className="text-xs text-slate-600">Effective cost after incentive</div>
                      </div>
                      
                      <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-progress"></div>
                      
                      <div className="text-center text-sm text-slate-600">
                        Making IoT education affordable and accessible
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply & Registration */}
            <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-700 delay-300 ${
              animatedItems.length > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Registration Portal</h2>
                    <p className="text-slate-600">NASSCOM FutureSkills PRIME</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="font-semibold text-slate-900 mb-2">Main Website</div>
                    <a 
                      href={futureskillsPrimeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      {futureskillsPrimeLink}
                    </a>
                    <div className="text-sm text-slate-600 mt-1">Official FutureSkills PRIME portal</div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl">
                    <div className="font-semibold text-slate-900 mb-2">NASSCOM Portal</div>
                    <a 
                      href={bridgeCourseDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      {bridgeCourseDirectLink}
                    </a>
                    <div className="text-sm text-slate-600 mt-1">NASSCOM FutureSkills PRIME portal</div>
                  </div>
                  
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="font-semibold text-slate-900 mb-2">Bridge Course Direct Link</div>
                    <a 
                      href={bridgeCourseRegistrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all hover:underline flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Bridge Course Registration
                    </a>
                    <div className="text-sm text-slate-600 mt-1">Direct link to the Bridge Course for IoT Software Analyst</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 animate-fade-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Contact & Support</h2>
                    <p className="text-slate-600">C-DAC Bangalore Partnership</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg border border-slate-200/50">
                    <div className="font-semibold text-slate-900 mb-2">Program Partner</div>
                    <div className="text-lg font-bold text-purple-600">C-DAC Bangalore</div>
                    <div className="text-sm text-slate-600">Centre for Development of Advanced Computing</div>
                    <div className="mt-2 text-xs text-slate-500">© C-DAC Bangalore - Program Delivery Partner</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                        💬
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Course Queries</div>
                        <div className="text-sm text-slate-600">Contact C-DAC Bangalore for program details</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        🎯
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Incentive Support</div>
                        <div className="text-sm text-slate-600">Guidance on government incentive process</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                        🔗
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Registration Assistance</div>
                        <div className="text-sm text-slate-600">Help with portal registration and course enrollment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      
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
        
        .animate-count-up {
          animation: scaleUp 0.8s ease-out;
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
      `}</style>
    </div>
  );
};

export default Future;