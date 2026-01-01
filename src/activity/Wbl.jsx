// Wbl.jsx
import { useEffect, useRef, useState } from 'react';

const Wbl = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-sm font-bold">✓</span>
            </div>
            <span className="font-semibold">AICTE Initiative • C-DAC Bangalore</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work-Based Learning Programme
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A Government of India Initiative for empowering SC, ST, EWS, and Women candidates through industry internships with hands-on experience.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700">2500+</h3>
            </div>
            <p className="text-gray-700 text-lg font-medium">Applications Received</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-cyan-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-700">31</h3>
            </div>
            <p className="text-gray-700 text-lg font-medium">Candidates Trained (2 Batches)</p>
          </div>
        </div>

        {/* Objectives Card */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-600 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Programme Objectives</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Real-time Exposure', desc: 'Hands-on experience in MeitY organizations' },
              { icon: '⏱️', title: 'Reduced Deployable Time', desc: 'Faster transition from learning to employment' },
              { icon: '🛠️', title: 'Technical Expertise', desc: 'Design, development, testing & QA skills' },
              { icon: '💼', title: 'Professional Skills', desc: 'Communication, problem-solving, presentation' },
              { icon: '💡', title: 'Fresh Ideation', desc: 'Value addition in emerging technical domains' },
              { icon: '🎓', title: 'Practical Experience', desc: 'Direct application of engineering knowledge' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Deployment */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Eligibility */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold">Eligibility Criteria</h2>
            </div>
            
            <p className="text-blue-100 mb-6 text-lg">Fresh Engineering Graduates from:</p>
            
            <div className="space-y-4">
              {[
                { label: 'Scheduled Caste (SC)', color: 'bg-cyan-500' },
                { label: 'Scheduled Tribe (ST)', color: 'bg-emerald-500' },
                { label: 'Women Candidates', color: 'bg-pink-500' },
                { label: 'Economically Weaker Section (EWS)', color: 'bg-amber-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Deployment Partners</h2>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg">Candidates deployed across 7 MeitY organizations pan-India:</p>
            
            <div className="grid grid-cols-2 gap-4">
              {['CRET-U', 'C-DAC', 'MEILT', 'STQC', 'CMET', 'ERNET', 'SAMEER'].map((org, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl border border-gray-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-blue-100">
                      <span className="text-lg font-bold text-cyan-700">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">{org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className={`mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Programme Perks
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📜', title: 'Completion Certificate', desc: 'Industry-recognized certification' },
              { icon: '💰', title: 'Monthly Stipend', desc: '₹10,000 per month' },
              { icon: '🤝', title: 'Placement Assistance', desc: 'Career support and guidance' }
            ].map((perk, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 transform hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">{perk.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{perk.title}</h3>
                <p className="text-gray-600 text-center">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className={`bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-blue-100 text-lg">Follow these steps to join the WBL Programme</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { step: '1', title: 'Register', desc: 'Visit AICTE portal and create student account' },
              { step: '2', title: 'Verify', desc: 'Complete profile verification with documents' },
              { step: '3', title: 'Search', desc: 'Find WBL internships in your domain' },
              { step: '4', title: 'Apply', desc: 'Check eligibility and submit application' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://internship.aicte-india.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              <span>Apply Now</span>
              <span className="text-xl">→</span>
            </a>
            <p className="mt-6 text-blue-200">
              Application Portal: <span className="font-mono font-bold">https://internship.aicte-india.org</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-12 text-center text-gray-600 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg">© C-DAC Bangalore | Government of India Initiative</p>
          <p className="mt-2 text-gray-500">Empowering through education and industry exposure</p>
        </div>
      </div>
      
    </div>

  );
};

export default Wbl;