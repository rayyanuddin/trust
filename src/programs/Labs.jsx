import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Labs = () => {
  const [activeTab, setActiveTab] = useState("iLabs");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate items sequentially for current tab
    const animateItems = () => {
      setAnimatedItems([]);
      const items = activeTab === "iLabs" ? 12 : 15;
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
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Labs & Products
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-300">
                Cutting-edge technology solutions and collaborative initiatives shaping the future of education
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-1 rounded-2xl animate-fade-in delay-500">
              <button
                onClick={() => setActiveTab("iLabs")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center gap-2 ${
                  activeTab === "iLabs"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <span className="text-lg">🤝</span>
                i-Labs Initiative
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center gap-2 ${
                  activeTab === "products"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <span className="text-lg">⚙️</span>
                Hardware Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* iLabs Content */}
          {activeTab === "iLabs" && (
            <div className="space-y-12">
              {/* CDAC Services Section */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 transform transition-all duration-700 ${
                animatedItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 p-8 animate-gradient-x">
                  <div className="flex items-center gap-4 animate-fade-in">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white">C-DAC Services for i-Labs</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🌐",
                        title: "Real Time Projects",
                        description: "Domain expertise in IoT/Big Data/Cloud/Cyber Security",
                        color: "from-blue-500 to-cyan-400"
                      },
                      {
                        icon: "👨‍🏫",
                        title: "Industrial Experience Faculty",
                        description: "Expert faculty with industry experience",
                        color: "from-purple-500 to-pink-500"
                      },
                      {
                        icon: "🏗️",
                        title: "High-end Infrastructure",
                        description: "Advanced facilities for project development and deployment",
                        color: "from-green-500 to-emerald-400"
                      },
                      {
                        icon: "⭐",
                        title: "Industry Standard Projects",
                        description: "Project standards maintained as per industry requirements",
                        color: "from-orange-500 to-amber-400"
                      },
                      {
                        icon: "💼",
                        title: "Placement Assistance",
                        description: "Internship opportunities and placement assistance in industry",
                        color: "from-indigo-500 to-blue-400"
                      },
                      {
                        icon: "📜",
                        title: "Certification",
                        description: "Project Completion Certification with C-DAC and IEEE",
                        color: "from-red-500 to-pink-400"
                      }
                    ].map((service, index) => (
                      <div 
                        key={index}
                        className={`group bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border border-slate-200/50 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                          animatedItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-slate-600">{service.description}</p>
                          </div>
                        </div>
                        
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* IEEE Services Section */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 transform transition-all duration-700 delay-300 ${
                animatedItems.length > 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-8 animate-gradient-x">
                  <div className="flex items-center gap-4 animate-fade-in">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white">IEEE Services for i-Labs</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Project Problem Statement",
                          description: "Industry-relevant project statements to challenge students",
                          icon: "🎯"
                        },
                        {
                          title: "Project Management Standard",
                          description: "Following IEEE standards for project management and execution",
                          icon: "📊"
                        },
                        {
                          title: "Project Guide",
                          description: "Expert guidance throughout the project lifecycle",
                          icon: "👨‍💼"
                        },
                        {
                          title: "Joint Certification",
                          description: "Certification provided jointly with C-DAC and IEEE",
                          icon: "🤝"
                        }
                      ].map((service, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-white/50 to-purple-50/30 border border-purple-100/50 hover:border-purple-300 hover:shadow-md transition-all duration-300 animate-fade-in-left ${
                            animatedItems.includes(index + 6) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-lg group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-slate-600">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100/50 animate-fade-in-right ${
                      animatedItems.includes(10) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}>
                      <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-purple-600 animate-bounce-subtle">🤝</span>
                        Collaborative Excellence
                      </h3>
                      <p className="text-slate-600 mb-4">
                        The i-Labs initiative brings together C-DAC's technical expertise and IEEE's academic standards to create a unique learning ecosystem that bridges academia and industry.
                      </p>
                      <div className="flex items-center gap-4 mt-6 animate-fade-in-up">
                        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                          <div className="text-2xl font-bold text-purple-600 animate-count-up">C-DAC</div>
                          <div className="text-sm text-slate-500">Technical Partner</div>
                        </div>
                        <div className="text-slate-400 animate-pulse">+</div>
                        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                          <div className="text-2xl font-bold text-pink-600 animate-count-up">IEEE</div>
                          <div className="text-sm text-slate-500">Academic Partner</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Content */}
          {activeTab === "products" && (
            <div className="space-y-12">
              {/* Hardware Products Intro */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transform transition-all duration-700 ${
                animatedItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-center gap-4 mb-8 animate-fade-in">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Hardware Products & Solutions</h2>
                    <p className="text-slate-600">Deployed across premier educational institutions</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 mb-8 animate-fade-in delay-100">
                  Our cutting-edge hardware products are deployed across premier educational institutions, fostering innovation and practical learning.
                </p>

                {/* IoT Kits Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 animate-fade-in delay-200">
                    <span className="text-blue-500 animate-bounce-subtle">📦</span>
                    IoT Kits Deployment
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "Thanthai Periyar College, Govt Institute of Technology, Vellore",
                      "Sree Chitra Thirunal College of Engineering, Thiruvananthapuram",
                      "Malviya National Institute of Technology, Jaipur",
                      "JJ College of Engineering and Technology, Trichy",
                      "Kalaignar Karunanidhi Institute of Technology, Coimbatore",
                      "Amrita Vishwa Vidyapeetham"
                    ].map((college, index) => (
                      <div 
                        key={index}
                        className={`group bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border border-slate-200/50 rounded-xl p-5 hover:shadow-2xl transition-all duration-500 hover:border-blue-300 animate-fade-in-up ${
                          animatedItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            🏛️
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              IoT Lab
                            </h4>
                            <p className="text-sm text-slate-600">{college}</p>
                          </div>
                        </div>
                        
                        {/* Animated dot indicator */}
                        <div className="mt-4 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                          <div className="text-xs text-slate-500">Active Deployment</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Products */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Indoor Air Quality Nodes",
                      description: "Advanced monitoring systems for real-time air quality assessment in indoor environments.",
                      icon: "🌬️",
                      color: "from-green-400 to-emerald-300",
                      bgColor: "from-green-50 to-emerald-50",
                      borderColor: "border-green-100",
                      features: ["Real-time monitoring", "Advanced sensors", "Environmental analytics"],
                      featureColor: "text-green-600"
                    },
                    {
                      title: "Drone Development Kit",
                      description: "Complete drone development kits for research and educational purposes in aerial technology.",
                      icon: "🚁",
                      color: "from-purple-400 to-pink-300",
                      bgColor: "from-purple-50 to-pink-50",
                      borderColor: "border-purple-100",
                      tags: ["Customizable", "Educational", "Research Grade"],
                      tagBg: ["bg-purple-100", "bg-pink-100", "bg-purple-100"],
                      tagText: ["text-purple-700", "text-pink-700", "text-purple-700"]
                    },
                    {
                      title: "IoT Sensors",
                      description: "Wide range of IoT sensors for various applications including environmental monitoring and industrial automation.",
                      icon: "📡",
                      color: "from-orange-400 to-amber-300",
                      bgColor: "from-orange-50 to-amber-50",
                      borderColor: "border-orange-100",
                      stats: [
                        { value: "50+", label: "Sensor Types" },
                        { value: "100+", label: "Applications" }
                      ],
                      statColor: "text-orange-600"
                    },
                    {
                      title: "Strategic Partnership",
                      description: "NDA entered with Banasree Renewable Energy System Pvt Ltd for collaborative development in renewable energy IoT solutions.",
                      icon: "🤝",
                      color: "from-blue-400 to-cyan-300",
                      bgColor: "from-blue-50 to-cyan-50",
                      borderColor: "border-blue-100",
                      partner: {
                        initial: "B",
                        name: "Banasree Renewable Energy",
                        role: "Strategic Partner"
                      }
                    }
                  ].map((product, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${product.bgColor} backdrop-blur-sm rounded-xl p-6 border ${product.borderColor} transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up ${
                        animatedItems.includes(index + 6) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                          {product.icon}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{product.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{product.description}</p>
                      
                      {/* Features/Tags/Stats based on product type */}
                      {product.features && (
                        <div className="space-y-2">
                          {product.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                              <span className={`text-sm ${product.featureColor}`}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {product.tags && (
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 ${product.tagBg[i]} ${product.tagText[i]} rounded-full text-xs font-medium animate-fade-in`}
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {product.stats && (
                        <div className="flex items-center gap-4">
                          {product.stats.map((stat, i) => (
                            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                              <div className={`text-xl font-bold ${product.statColor}`}>{stat.value}</div>
                              <div className="text-xs text-slate-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {product.partner && (
                        <div className="flex items-center gap-3 animate-fade-in">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white text-sm shadow-lg">
                            {product.partner.initial}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{product.partner.name}</div>
                            <div className="text-sm text-slate-500">{product.partner.role}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: "15+", label: "Partner Institutions", color: "from-blue-500 to-cyan-400" },
                  { value: "50+", label: "IoT Products", color: "from-purple-500 to-pink-500" },
                  { value: "1000+", label: "Students Impacted", color: "from-green-500 to-emerald-400" },
                  { value: "5+", label: "Product Categories", color: "from-orange-500 to-amber-400" }
                ].map((metric, index) => (
                  <div 
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in-up ${
                      animatedItems.includes(index + 14) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 animate-count-up`}>
                      {metric.value}
                    </div>
                    <div className="text-slate-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
            animatedItems.length > 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 shadow-2xl animate-float">
              <h3 className="text-2xl font-bold text-white mb-4 animate-fade-in">
                Interested in Our Labs & Products?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Partner with us to bring cutting-edge technology and innovative learning solutions to your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
                <Link
                  to="/contact"
                  className="group px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          animation: fadeInLeft 0.6s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out;
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
        
        .animate-count-up {
          animation: countUp 0.8s ease-out;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
};

export default Labs;