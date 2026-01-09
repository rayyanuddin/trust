// PKIot.jsx
import React, { useEffect, useState, useRef } from 'react';
import {
  Shield,
  Cpu,
  Wifi,
  Car,
  Drone,
  Building,
  Key,
  Lock,
  Globe,
  Server,
  FileCode,
  Code,
  Network,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Settings,
  RefreshCw,
  Rocket,
  Award,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  Server as ServerIcon,
  Shield as ShieldIcon,
  Smartphone as SmartphoneIcon,
  Car as CarIcon,
  Building as BuildingIcon,
  Drone as DroneIcon
} from 'lucide-react';

const Pkot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [scrollAnimations, setScrollAnimations] = useState({});
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Show content immediately on initial load
    setIsVisible(true);
    
    // Trigger auto-refresh on initial page load
    if (isInitialLoad) {
      handleAutoRefresh();
      setIsInitialLoad(false);
    }
  }, []);

  // Intersection Observer for scroll animations - triggers only when scrolling down
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          setScrollAnimations(prev => ({
            ...prev,
            [sectionId]: true
          }));
        } else {
          setScrollAnimations(prev => ({
            ...prev,
            [sectionId]: false
          }));
        }
      });
    }, observerOptions);

    // Observe all section refs
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleAutoRefresh = () => {
    setIsRefreshing(true);
    
    // Quick refresh - no delay for initial load
    setTimeout(() => {
      setIsRefreshing(false);
      
      // Trigger re-animation
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
      
      // Scroll to top immediately
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    
    // Quick refresh
    setTimeout(() => {
      setIsRefreshing(false);
      
      // Trigger re-animation
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
      
      // Scroll to top immediately
      window.scrollTo(0, 0);
    }, 300);
  };

  // Animation function
  const getAnimationClass = (sectionId) => {
    if (scrollAnimations[sectionId]) {
      return 'animate-fade-in-up';
    }
    return 'opacity-0 translate-y-10';
  };

  // Add section to refs
  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  // Project Title and Overview
  const projectOverview = {
    title: "PKI-based Digital Certificates for IoT Device Security",
    subtitle: "Secure Communication Framework for Connected Devices",
    description: "Development of PKI-based digital certificate framework for IoT device security across applications such as Smart Cities, UAVs/Drones, and the Automotive sector.",
    objective: "Enable secure communication between vehicles, roadside units, and backend infrastructure through advanced certificate management.",
    focus: "PKI security framework supporting V2X ITS certificates alongside conventional IoT security mechanisms"
  };

  // Core Technologies
  const technologies = [
    {
      name: "PKI Framework",
      description: "Public Key Infrastructure for digital certificate management",
      icon: <Key className="h-8 w-8" />
    },
    {
      name: "X.509v3 Certificates",
      description: "Standard certificates for general IoT deployments",
      icon: <FileCode className="h-8 w-8" />
    },
    {
      name: "ITS Certificates",
      description: "Intelligent Transport System certificates for V2X scenarios",
      icon: <Car className="h-8 w-8" />
    },
    {
      name: "CBOR Encoding",
      description: "Efficient certificate representations for resource-constrained devices",
      icon: <Code className="h-8 w-8" />
    }
  ];

  // Use Cases
  const useCases = [
    {
      title: "Smart City",
      description: "Secure communication for urban infrastructure and surveillance systems",
      icon: <Building className="h-10 w-10" />,
      applications: [
        "Traffic Management Systems",
        "Smart Surveillance Cameras",
        "Public Safety Infrastructure",
        "Environmental Monitoring"
      ]
    },
    {
      title: "Unmanned Aerial Vehicles (UAVs)",
      description: "Drone security for surveillance, delivery, and inspection operations",
      icon: <Drone className="h-10 w-10" />,
      applications: [
        "Drone Authentication",
        "Secure Command & Control",
        "Payload Data Protection",
        "Geo-fencing Compliance"
      ]
    },
    {
      title: "Automotive Industry",
      description: "Vehicle-to-Everything (V2X) communication security",
      icon: <Car className="h-10 w-10" />,
      applications: [
        "Vehicle-to-Vehicle (V2V)",
        "Vehicle-to-Infrastructure (V2I)",
        "Connected Car Security",
        "Autonomous Vehicle Communication"
      ]
    }
  ];

  // Technical Components
  const technicalComponents = [
    {
      component: "Embedded Firmware",
      purpose: "Device onboarding and certificate validation",
      platform: "Resource-constrained IoT devices",
      features: ["Certificate Enrollment", "Key Management", "Secure Boot", "OTA Updates"]
    },
    {
      component: "Embedded Linux Software",
      purpose: "Secure communication and certificate lifecycle management",
      platform: "Gateway devices and edge computing",
      features: ["Certificate Validation", "Revocation Checking", "Secure Protocols", "Logging & Monitoring"]
    },
    {
      component: "Certificate Authority",
      purpose: "PKI infrastructure for certificate issuance and management",
      platform: "Cloud/On-premise deployment",
      features: ["Certificate Issuance", "CRL/OCSP Services", "Policy Management", "Audit Trail"]
    }
  ];

  // Proof of Concept Demonstrations
  const pocDemonstrations = [
    "Certificate Lifecycle Management",
    "Trusted Communication Across Connected Vehicles",
    "Intelligent Transport Systems Security",
    "Smart City Surveillance Security",
    "UAV Platform Authentication",
    "V2X Communication Scenarios"
  ];

  // Project Deliverables
  const deliverables = [
    "Scalable PKI Security Framework",
    "V2X ITS Certificate Support",
    "Conventional IoT Security Mechanisms",
    "CBOR Certificate Representation Study",
    "Embedded Firmware & Software",
    "Proof-of-Concept Implementation",
    "Performance Analysis Reports",
    "Security Compliance Documentation"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Refresh Button */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={handleManualRefresh}
          disabled={isRefreshing}
          className={`flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isRefreshing ? 'opacity-80 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          <RefreshCw className={`text-lg ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="font-semibold">
            {isRefreshing ? 'Refreshing...' : 'Refresh Content'}
          </span>
        </button>
      </div>

      {/* Welcome Animation Overlay - Only shows on initial load */}
      {isInitialLoad && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-8">
              <Shield className="text-8xl text-white animate-bounce mb-4 mx-auto" />
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              PKI for IoT Security
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Loading Digital Certificate Framework details...
            </p>
            <div className="w-64 h-2 bg-purple-800 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-[progress_1.5s_ease-in-out]"></div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        ref={(el) => addToRefs(el, 0)}
        id="hero-section"
        className={`bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-700 ${getAnimationClass('hero-section')}`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 transition-all duration-700 ${scrollAnimations['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <ShieldIcon className="h-10 w-10 text-purple-300" />
              </div>
              <div>
                <h2 className="text-lg font-bold">INNOVATION PROJECT</h2>
                <p className="text-xl font-bold">IoT Security Research</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">PKI-Based Security Framework</p>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className={`mb-6 transition-all duration-700 ${scrollAnimations['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {projectOverview.title}
                </h1>
                <p className="text-xl text-purple-200">{projectOverview.subtitle}</p>
              </div>

              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 transition-all duration-700 ${scrollAnimations['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <p className="text-xl mb-4">
                  {projectOverview.description}
                </p>
              </div>

              <div className={`flex flex-wrap gap-4 transition-all duration-700 ${scrollAnimations['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>3 Major Use Cases</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4" />
                    <span>V2X Communication</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>CBOR Encoding Study</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Proof-of-Concept Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className={`lg:w-1/3 mt-8 lg:mt-0 transition-all duration-700 ${scrollAnimations['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4">
                    <Lock className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">PKI for IoT</h3>
                  <p className="text-purple-200">Trusted Device Communication</p>
                </div>

                {/* IoT Icons Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <SmartphoneIcon className="h-6 w-6 text-blue-300" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <CarIcon className="h-6 w-6 text-green-300" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <BuildingIcon className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <DroneIcon className="h-6 w-6 text-red-300" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <ServerIcon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                    <Wifi className="h-6 w-6 text-pink-300" />
                  </div>
                </div>

                {/* Project Objective */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Project Objective
                  </h3>
                  <p className="text-purple-100 text-sm">
                    {projectOverview.objective}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Core Technologies Section */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          id="technologies-section"
          className={`mb-16 transition-all duration-700 ${getAnimationClass('technologies-section')}`}
        >
          <div className={`text-center mb-12 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Core Technologies & Standards
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced security frameworks and protocols for IoT device authentication and secure communication
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  scrollAnimations['technologies-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Certificate Types Comparison */}
          <div className={`bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificate Framework Comparison</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`bg-white rounded-xl p-6 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="h-8 w-8 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900">X.509v3 Certificates</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Standard for general IoT deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Widely supported across platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Established revocation mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Compatible with existing infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className={`bg-white rounded-xl p-6 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-8 w-8 text-green-600" />
                  <h4 className="text-xl font-bold text-gray-900">ITS Certificates (V2X)</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span>Specialized for Vehicle-to-Everything scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span>Optimized for real-time vehicular communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span>Enhanced privacy and pseudonymity features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span>Geolocation and time-bound validity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CBOR Encoding Section */}
            <div className={`mt-8 bg-white rounded-xl p-6 transition-all duration-700 ${scrollAnimations['technologies-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-8 w-8 text-purple-600" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">CBOR-Encoded Certificate Study</h4>
                  <p className="text-gray-600">Efficiency analysis for resource-constrained devices</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-2">50-70%</div>
                  <p className="text-sm text-gray-600">Reduced certificate size</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-2">30-50%</div>
                  <p className="text-sm text-gray-600">Faster processing speed</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Low-Power</div>
                  <p className="text-sm text-gray-600">Optimized for constrained devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div 
          ref={(el) => addToRefs(el, 2)}
          id="usecases-section"
          className={`mb-16 transition-all duration-700 ${getAnimationClass('usecases-section')}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Primary Use Cases & Applications
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Proof-of-Concept showcasing PKI security across three major IoT domains
          </p>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl p-8 border-l-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  scrollAnimations['usecases-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`} 
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  borderColor: index === 0 ? '#8b5cf6' : index === 1 ? '#10b981' : '#3b82f6'
                }}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-xl ${index === 0 ? 'bg-purple-100 text-purple-600' : index === 1 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                      {useCase.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                        <p className="text-gray-600 mt-1">{useCase.description}</p>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="font-bold text-gray-700">Use Case {index + 1}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Specific Applications:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {useCase.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center gap-2">
                            <ArrowRight className={`h-4 w-4 ${index === 0 ? 'text-purple-500' : index === 1 ? 'text-green-500' : 'text-blue-500'}`} />
                            <span className="text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation Section */}
        <div 
          ref={(el) => addToRefs(el, 3)}
          id="implementation-section"
          className={`mb-16 transition-all duration-700 ${getAnimationClass('implementation-section')}`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Development of embedded firmware and software for device onboarding, certificate validation, and secure communication
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {technicalComponents.map((component, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    scrollAnimations['implementation-section'] ? 'animate-scale-up' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {index === 0 ? <Cpu className="h-6 w-6 text-blue-600" /> : 
                       index === 1 ? <Settings className="h-6 w-6 text-blue-600" /> : 
                       <Server className="h-6 w-6 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{component.component}</h3>
                      <p className="text-sm text-gray-600">{component.purpose}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      Platform: {component.platform}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {component.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proof of Concept Demonstrations */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 ${scrollAnimations['implementation-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proof-of-Concept Demonstrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pocDemonstrations.map((demo, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    scrollAnimations['implementation-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="font-bold text-gray-900">{demo}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Deliverables */}
        <div 
          ref={(el) => addToRefs(el, 4)}
          id="deliverables-section"
          className={`mb-16 transition-all duration-700 ${getAnimationClass('deliverables-section')}`}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-10 w-10 text-green-600" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Project Deliverables</h2>
                <p className="text-gray-600">Comprehensive outputs ensuring scalable and future-ready PKI security framework</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    scrollAnimations['deliverables-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index % 3 === 0 ? 'bg-blue-100' : index % 3 === 1 ? 'bg-green-100' : 'bg-purple-100'}`}>
                        <span className={`font-bold ${index % 3 === 0 ? 'text-blue-600' : index % 3 === 1 ? 'text-green-600' : 'text-purple-600'}`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{deliverable}</h4>
                      <p className="text-sm text-gray-600 mt-1">Complete implementation and documentation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Summary */}
            <div className={`mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white transition-all duration-700 ${scrollAnimations['deliverables-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Overall Project Impact</h3>
              </div>
              <p className="text-lg">
                The project delivers a scalable and future-ready PKI security framework that supports V2X ITS certificates 
                alongside conventional IoT security mechanisms, enabling trusted communication across connected vehicles, 
                intelligent transport systems, smart city surveillance, and UAV platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div 
          ref={(el) => addToRefs(el, 5)}
          id="benefits-section"
          className={`mb-16 transition-all duration-700 ${getAnimationClass('benefits-section')}`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits & Advantages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl hover:-translate-y-2 transition-all duration-300 ${
                scrollAnimations['benefits-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Security</h3>
                <p className="text-gray-600">
                  Robust PKI-based authentication and encryption for all IoT communications
                </p>
              </div>

              <div className={`text-center p-6 bg-gradient-to-b from-green-50 to-white rounded-xl hover:-translate-y-2 transition-all duration-300 ${
                scrollAnimations['benefits-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '200ms' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalability</h3>
                <p className="text-gray-600">
                  Framework designed to scale across millions of devices and diverse use cases
                </p>
              </div>

              <div className={`text-center p-6 bg-gradient-to-b from-purple-50 to-white rounded-xl hover:-translate-y-2 transition-all duration-300 ${
                scrollAnimations['benefits-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '300ms' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Readiness</h3>
                <p className="text-gray-600">
                  Support for emerging standards like V2X and CBOR encoding for next-gen IoT
                </p>
              </div>
            </div>

            <div className={`mt-8 pt-8 border-t border-gray-200 transition-all duration-700 ${scrollAnimations['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '400ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Primary Use Cases</div>
                </div>
                <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                  <div className="text-sm text-gray-600">Certificate Types</div>
                </div>
                <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Technical Components</div>
                </div>
                <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">6+</div>
                  <div className="text-sm text-gray-600">PoC Demonstrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale-up {
          animation: scaleUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}; 

export default Pkot;