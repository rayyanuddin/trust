import { useEffect, useRef, useState } from 'react';

const Centre = () => {
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

  const objectives = [
    {
      icon: '🧠',
      title: 'Build Foundational & Advanced Skills',
      description: 'Develop comprehensive understanding of quantum computing principles and advanced techniques'
    },
    {
      icon: '🔬',
      title: 'Hands-on Experimental Learning',
      description: 'Practical experience with quantum technologies and real-world experimentation'
    },
    {
      icon: '💡',
      title: 'Foster Research & Innovation',
      description: 'Drive cutting-edge research in quantum algorithms and applications'
    },
    {
      icon: '🤝',
      title: 'Support Academic & Industry Initiatives',
      description: 'Collaborate with educational, industrial, and government quantum programmes'
    },
    {
      icon: '🚀',
      title: 'Create Talent Pipeline',
      description: 'Align with National Quantum Mission to develop skilled quantum workforce'
    }
  ];

  const features = [
    'Quantum Computing Concepts',
    'Quantum Algorithm Development',
    'Quantum Programming Frameworks',
    'Real-world Quantum Use Cases',
    'Quantum Hardware & Software Integration',
    'Research & Development Facilities',
    'Skill Development Workshops',
    'Industry Collaboration Projects'
  ];

  return (
    <div ref={containerRef} className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transition-all duration-2000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transition-all duration-2000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute top-3/4 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-200 px-6 py-3 rounded-full mb-8">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center animate-pulse">
              <span className="text-lg">⚛️</span>
            </div>
            <span className="font-semibold tracking-wider">QUANTUM TECHNOLOGIES INITIATIVE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
            Quantum Experiment Centre
            <div className="w-48 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Quantum Computing & Quantum Technologies
          </p>
        </div>

        {/* Overview Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🌌</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The Quantum Experiment Centre is a specialized facility established to promote education, 
                  experimentation, research, and skill development in Quantum Computing and Quantum Technologies. 
                  The centre is designed to provide students, faculty, and researchers with hands-on exposure to 
                  quantum concepts, algorithms, programming frameworks, and real-world use cases, thereby preparing 
                  skilled manpower in an emerging and strategically important domain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Objectives of the Quantum Experiment Centre
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Advancing quantum education, research, and innovation through comprehensive objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 delay-${index * 100}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-700/30 to-indigo-700/30 group-hover:from-purple-600/40 group-hover:to-indigo-600/40 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-500">{objective.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                    {objective.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Focus Areas
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 delay-${index * 50}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-700/30 to-blue-700/30 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National Quantum Mission Alignment */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-indigo-500/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 flex items-center justify-center animate-spin-slow">
                  <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-4xl">🇮🇳</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Aligned with National Quantum Mission (NQM)
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The centre actively supports and contributes to India's National Quantum Mission by developing 
                  skilled professionals, fostering research, and creating innovative solutions in quantum technologies. 
                  We work in synergy with national initiatives to position India as a global leader in quantum computing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400 font-medium">Active Research</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-400 font-medium">Experimentation</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-purple-400 font-medium">Innovation Hub</span>
            </div>
          </div>
          
          <p className="mt-8 text-gray-500">
            Shaping the future of quantum computing through education, research, and innovation
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Centre;