import { useState, useEffect, useRef } from "react";
import { 
  Shield, 
  Lock, 
  Users, 
  Database, 
  Globe, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle,
  Cpu,
  Network,
  Cloud,
  Smartphone,
  Server
} from "lucide-react";

const Idot = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [metrics, setMetrics] = useState({
    authAccuracy: 0,
    securityImprovement: 0,
    managementReduction: 0,
    devicesSecured: 0
  });

  const targetMetrics = {
    authAccuracy: 99.9,
    securityImprovement: 10,
    managementReduction: 50,
    devicesSecured: 1000
  };

  // Use ref to track if animation has run
  const animationRunRef = useRef(false);

  const animateCount = (start, end, duration, metricKey) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + easeOutCubic * (end - start);
      
      setMetrics(prev => ({
        ...prev,
        [metricKey]: currentValue
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const triggerAnimation = () => {
    // Reset metrics to 0
    setMetrics({
      authAccuracy: 0,
      securityImprovement: 0,
      managementReduction: 0,
      devicesSecured: 0
    });
    
    // Small delay to ensure reset is visible
    setTimeout(() => {
      // Animate all metrics with staggered delays
      animateCount(0, targetMetrics.authAccuracy, 1800, "authAccuracy");
      
      setTimeout(() => {
        animateCount(0, targetMetrics.securityImprovement, 1500, "securityImprovement");
      }, 300);
      
      setTimeout(() => {
        animateCount(0, targetMetrics.managementReduction, 1600, "managementReduction");
      }, 600);
      
      setTimeout(() => {
        animateCount(0, targetMetrics.devicesSecured, 2000, "devicesSecured");
      }, 900);
    }, 100);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    
    // Only run animation on initial load
    if (!animationRunRef.current) {
      // Small delay to ensure component is mounted
      setTimeout(() => {
        triggerAnimation();
        animationRunRef.current = true;
      }, 500);
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Handle click anywhere on the page
  const handlePageClick = () => {
    triggerAnimation();
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "challenges", label: "Challenges", icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "solution", label: "Solution", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "architecture", label: "Architecture", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "benefits", label: "Benefits", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "modules", label: "Modules", icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "deployment", label: "Deployment", icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const idotModules = [
    {
      name: "Device Identity Management",
      description: "Unique digital identity creation and management for IoT devices",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      features: ["Device Registration", "Identity Generation", "Credential Management", "Lifecycle Tracking"]
    },
    {
      name: "Secure Communication",
      description: "Encrypted and authenticated device-to-device and device-to-server communication",
      icon: <Network className="w-6 h-6 text-green-600" />,
      features: ["End-to-End Encryption", "Mutual Authentication", "Secure Protocols", "Real-time Monitoring"]
    },
    {
      name: "Trust Framework",
      description: "Establishing and maintaining trust relationships across IoT ecosystems",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      features: ["Trust Scoring", "Behavior Analysis", "Anomaly Detection", "Access Control"]
    },
    {
      name: "Cloud Integration",
      description: "Seamless integration with cloud platforms and services",
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      features: ["Cloud API Integration", "Data Synchronization", "Scalable Infrastructure", "Multi-cloud Support"]
    }
  ];

  return (
    <div 
      className="w-full min-h-screen mt-5 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 cursor-pointer"
      onClick={handlePageClick}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-300 mr-3 sm:mr-4" />
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Identity of Things (IDoT)
                <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl text-blue-200 mt-2 font-normal">
                  Secure Identity Management for IoT Ecosystems
                </span>
              </h1>
            </div>
            <p className="text-base xs:text-lg sm:text-xl text-blue-200 text-center max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
              Powered by C-DAC Bangalore
            </p>
            <p className="text-center text-blue-300 mt-1 sm:mt-2 text-xs xs:text-sm sm:text-base px-2">
              Click anywhere on the page to refresh animations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className={`bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{metrics.authAccuracy.toFixed(1)}%</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Authentication Accuracy</p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${(metrics.authAccuracy / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{metrics.securityImprovement.toFixed(1)}x</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Security Improvement</p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: `${(metrics.securityImprovement / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{metrics.managementReduction.toFixed(0)}%</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Reduced Overhead</p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-1000 ease-out"
                    style={{ width: `${(metrics.managementReduction / 50) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-700 delay-600 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center">
              <div className="bg-amber-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{metrics.devicesSecured.toFixed(0)}+</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Devices Secured</p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{ width: `${(metrics.devicesSecured / 1000) * 100}%` }}
                  ></div>
                </div>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab(tab.id);
                  }}
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
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Project Overview</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    The Identity of Things (IDoT) project addresses the fundamental requirement of uniquely identifying 
                    and managing Internet of Things (IoT) devices in a secure and reliable manner. With the rapid expansion 
                    of IoT across consumer and industrial domains, large numbers of devices operate autonomously and 
                    interact with multiple systems over the internet.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Project Vision
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Overall, the IDoT project aims to strengthen IoT infrastructures by making digital identity 
                      a core building block. It provides a structured approach to device identification and trust.
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Secure connectivity across IoT ecosystems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Reliable data exchange mechanisms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Improved governance and accountability</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                      Target Ecosystem
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Designed to support diverse device types and large-scale deployments, where devices 
                      must be recognized and trusted before participating in any interaction.
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Consumer IoT devices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Industrial IoT systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Smart city infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Challenges Addressed</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-red-500">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-600" />
                      Security Vulnerabilities
                    </h3>
                    <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Absence of structured device identity framework in IoT deployments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Security vulnerabilities in device authentication and communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Difficulty in managing trust across large-scale IoT ecosystems</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-amber-500">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-600" />
                      Management Complexities
                    </h3>
                    <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Lack of standardized lifecycle management for IoT devices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Complexity in device-to-device and device-to-server interactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Governance and accountability issues in autonomous IoT operations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">The IoT Identity Gap</h3>
                  <p className="text-slate-700 text-sm sm:text-base mb-4">
                    In such environments, the absence of a structured device identity framework leads to significant 
                    challenges in trust, security, and governance. IDoT directly addresses these gaps through 
                    comprehensive identity management solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-red-600 font-bold text-lg sm:text-xl">⚡</span>
                      </div>
                      <p className="font-medium text-slate-900 text-sm sm:text-base">Security Risks</p>
                      <p className="text-slate-600 text-xs sm:text-sm">Unauthorized access & data breaches</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-amber-600 font-bold text-lg sm:text-xl">🔧</span>
                      </div>
                      <p className="font-medium text-slate-900 text-sm sm:text-base">Management Overhead</p>
                      <p className="text-slate-600 text-xs sm:text-sm">Complex device management</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-blue-600 font-bold text-lg sm:text-xl">⚖️</span>
                      </div>
                      <p className="font-medium text-slate-900 text-sm sm:text-base">Governance Issues</p>
                      <p className="text-slate-600 text-xs sm:text-sm">Lack of accountability & compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solution Tab */}
          {activeTab === "solution" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">IDoT Solution</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-green-600 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Core Solution</h3>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        IDoT focuses on providing a unique digital identity to each IoT device, enabling reliable 
                        identification and authenticated communication within an IoT ecosystem.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg sm:rounded-xl p-4 sm:p-5 mt-4">
                    <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-xs sm:text-sm">Unique digital identity per device</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-xs sm:text-sm">Authenticated communication channels</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-xs sm:text-sm">Support for diverse device types</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-xs sm:text-sm">Large-scale deployment capabilities</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Communication Framework</h3>
                    <p className="text-slate-700 text-sm sm:text-base mb-4">
                      By establishing a common identity layer, IDoT supports secure device-to-device, 
                      device-to-server, and device-to-user communication across diverse IoT ecosystems.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600">🔗</span>
                        </div>
                        <span className="text-slate-700 text-sm">Device-to-Device Communication</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center">
                          <span className="text-green-600">⚡</span>
                        </div>
                        <span className="text-slate-700 text-sm">Device-to-Server Authentication</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600">👤</span>
                        </div>
                        <span className="text-slate-700 text-sm">Device-to-User Interactions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Lifecycle Management</h3>
                    <p className="text-slate-700 text-sm sm:text-base mb-4">
                      The project considers the complete lifecycle of IoT devices. Device identities are managed 
                      from onboarding through operational use and eventual decommissioning.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-white/70 rounded-lg">
                        <p className="text-xl font-bold text-blue-600">🚀</p>
                        <p className="text-slate-700 text-xs font-medium">Onboarding</p>
                      </div>
                      <div className="text-center p-3 bg-white/70 rounded-lg">
                        <p className="text-xl font-bold text-green-600">⚙️</p>
                        <p className="text-slate-700 text-xs font-medium">Deployment</p>
                      </div>
                      <div className="text-center p-3 bg-white/70 rounded-lg">
                        <p className="text-xl font-bold text-purple-600">⚡</p>
                        <p className="text-slate-700 text-xs font-medium">Operational</p>
                      </div>
                      <div className="text-center p-3 bg-white/70 rounded-lg">
                        <p className="text-xl font-bold text-amber-600">🗑️</p>
                        <p className="text-slate-700 text-xs font-medium">Decommissioning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === "architecture" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">System Architecture</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-purple-600 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Scalable Architecture</h3>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        The project is designed to support diverse device types and large-scale deployments, 
                        where devices must be recognized and trusted before participating in any interaction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <h4 className="font-semibold text-slate-800 mb-3 sm:mb-4 text-sm sm:text-base">Architectural Components:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h5 className="font-medium text-slate-800 mb-2 text-sm sm:text-base">Core Services</h5>
                        <ul className="space-y-2 text-slate-700 text-xs sm:text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            Identity Registry Service
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            Authentication Service
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            Authorization Engine
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            Audit & Logging Service
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-800 mb-2 text-sm sm:text-base">Infrastructure</h5>
                        <ul className="space-y-2 text-slate-700 text-xs sm:text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                            Distributed Identity Stores
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                            Secure Communication Layer
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                            API Gateway & Management
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                            Monitoring & Analytics
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Deployment Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-indigo-600 font-bold text-sm sm:text-base">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Scalability</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Scalable to millions of devices</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-indigo-600 font-bold text-sm sm:text-base">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Compatibility</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Supports heterogeneous IoT devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Technical Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Distribution</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Distributed identity management</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-base">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">Cloud Native</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1">Cloud-native architecture</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Project Benefits</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Security Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Strong device authentication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Secure communication channels</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Reduced attack surface</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Compliance adherence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Management Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Centralized identity control</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Simplified device tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Efficient lifecycle handling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Automated provisioning</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Interoperability Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Standardized identity framework</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Cross-platform compatibility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Seamless system integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Future-proof architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Governance Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Enhanced accountability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Audit trail capability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Policy enforcement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">Regulatory compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl">🚀</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Overall Project Impact</h3>
                      <p className="text-blue-100">
                        The IDoT project aims to strengthen IoT infrastructures by making digital identity a core 
                        building block. It provides a structured approach to device identification and trust, 
                        supporting secure connectivity, reliable data exchange, and improved governance across IoT deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modules Tab */}
          {activeTab === "modules" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Core Modules</h2>
              <p className="text-slate-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">
                Comprehensive identity management solutions for IoT ecosystems through specialized modules.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {idotModules.map((module, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 ${
                        index === 0 ? 'bg-blue-100' : 
                        index === 1 ? 'bg-green-100' : 
                        index === 2 ? 'bg-purple-100' : 'bg-amber-100'
                      }`}>
                        {module.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{module.name}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">{module.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4">
                      <h4 className="font-medium text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-300 rounded-full mr-2 sm:mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Integration & Deployment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">For IoT Ecosystem Providers</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Integrate IDoT modules into your existing IoT infrastructure for enhanced security 
                      and identity management capabilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Contact Information</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      <span className="inline-flex items-center mr-2">📧</span>
                      Email: <a href="mailto:bd-blr@cdac.in" className="text-blue-600 hover:underline">bd-blr@cdac.in</a><br />
                      <span className="inline-flex items-center mr-2">📞</span>
                      Phone: +91-80-2854-3000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deployment Tab */}
          {activeTab === "deployment" && (
            <div className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Deployment & Implementation</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-indigo-600 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Deployment Strategy</h3>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        IDoT supports flexible deployment models to suit various IoT ecosystem requirements, 
                        from cloud-based solutions to hybrid and on-premise implementations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/70 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <span className="text-blue-600 text-lg sm:text-xl">☁️</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-1">Cloud Deployment</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">Fully managed cloud service</p>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-green-50 to-white rounded-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <span className="text-green-600 text-lg sm:text-xl">🔄</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-1">Hybrid Model</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">Combined cloud and on-premise</p>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-purple-50 to-white rounded-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <span className="text-purple-600 text-lg sm:text-xl">🏢</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-1">On-Premise</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">Complete control deployment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Implementation Roadmap</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                        <span className="text-blue-600 font-bold text-sm sm:text-base">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm sm:text-base">Assessment & Planning</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Analyze existing IoT infrastructure and plan IDoT integration strategy
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                        <span className="text-blue-600 font-bold text-sm sm:text-base">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm sm:text-base">Pilot Deployment</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Implement IDoT on a subset of devices for testing and validation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm mr-3 sm:mr-4">
                        <span className="text-blue-600 font-bold text-sm sm:text-base">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm sm:text-base">Full Integration</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          Scale deployment across entire IoT ecosystem with monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
      

        {/* C-DAC Footer */}
        <div className={`mt-6 sm:mt-8 md:mt-10 transition-all duration-1000 delay-800 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center border-t border-slate-200 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 sm:px-6 py-3 rounded-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">C</span>
              </div>
              <div className="text-left">
                <p className="text-slate-700 font-medium text-sm sm:text-base">© C-DAC Bangalore | IDoT Project</p>
                <p className="text-slate-500 text-xs sm:text-sm">Ministry of Electronics & Information Technology (MeitY)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idot;