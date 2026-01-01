// FIIP.jsx
import { useEffect, useRef, useState } from 'react';

const Fiip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const courseFeatures = [
    'Industry-relevant curriculum',
    'Hands-on practical sessions',
    'Latest tools and technologies',
    'Real-world project exposure',
    'Industry expert mentorship',
    'Teaching methodology enhancement'
  ];
  const collaborations = [
    {
      name: 'Government of Gambia',
      items: ['EOI for setup of Centre of Excellence related to Cyber Security']
    },
    {
      name: 'eWWG – UAE / UK based Company',
      items: ['EOI - Cyber Security', 'Malaysia – Capacity Building in Cyber Security']
    },
    {
      name: 'Al-Otaiba Group – UAE / Africa based Company',
      items: ['Centre of Excellence in Advanced Technologies', 'Smart Water Meter']
    },
    {
      name: 'MANAH Holdings',
      items: ['Smart Energy Meter']
    }
  ];
  return (
    <div ref={containerRef} className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-8 shadow-md">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-lg font-bold">🎓</span>
            </div>
            <span className="font-semibold tracking-wide">C-DAC BANGALORE INITIATIVE</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OCES Faculty Industrial Immersion Program (FIIP)
            <div className="w-48 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Bridging Academia and Industry for Enhanced Technical Education
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Objective Section */}
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-blue-600 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Objective</h2>
              </div>
              
              <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To equip faculty members with practical, hands-on experience in advanced technologies, 
                  enabling them to integrate cutting-edge tools and methodologies into their teaching practices, 
                  thereby enhancing the quality of education and fostering innovation in the learning.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Expected Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Enhanced teaching methodologies with industry insights
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Updated curriculum with practical applications
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Improved student employability through better guidance
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Stronger academia-industry collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Course Structure Section */}
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-indigo-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Proposed Course Structure</h2>
              </div>
              
              <div className="space-y-8">
                {/* Duration Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                      <span className="text-2xl">⏱️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Program Duration</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold">
                      4 Weeks Intensive
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold">
                      6 Weeks Comprehensive
                    </div>
                  </div>
                </div>
                
                {/* Target Audience Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Target Audience</h3>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Dedicated course for Faculty Members
                  </p>
                  <p className="text-gray-600">
                    Engineering college professors, technical educators, and academic researchers
                  </p>
                </div>
                
                {/* Training Focus Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Training Focus</h3>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Hands-on training in Advanced Technologies
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Latest industry tools and frameworks
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Practical implementation skills
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Emerging technology trends
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
 <div className={`mb-20 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full mb-6 shadow-md">
              <span className="text-xl">🌍</span>
              <span className="font-semibold">INTERNATIONAL COLLABORATIONS</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Partnerships & Expressions of Interest
              <div className="w-40 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">
                      {index === 0 ? '🇬🇲' : 
                       index === 1 ? '🇦🇪' : 
                       index === 2 ? '🌍' : '🏢'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{collab.name}</h3>
                  </div>
                </div>
                <ul className="space-y-2 pl-16">
                  {collab.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Features Grid */}
        <div className={`mb-16 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Features
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">
                      {index === 0 ? '📘' : 
                       index === 1 ? '✋' : 
                       index === 2 ? '⚙️' : 
                       index === 3 ? '🏗️' : 
                       index === 4 ? '👨‍💼' : '📊'}
                    </span>
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose FIIP?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Direct industry exposure for academic professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Curriculum aligned with current industry demands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Hands-on labs and practical workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Networking with industry experts and peers</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold">Program Certification</h3>
                </div>
                <p className="text-blue-100">
                  Participants receive a completion certificate from C-DAC Bangalore, recognized by industry and academic institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full px-6 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">© C-DAC Bangalore</p>
              <p className="text-gray-500 text-sm mt-1">Enhancing Technical Education Through Industry Immersion</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Fiip;