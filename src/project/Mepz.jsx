// MepzComponent.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Mepz = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCourse, setActiveCourse] = useState('ai-ml');
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

  const courses = {
    'ai-ml': {
      title: 'Artificial Intelligence & Machine Learning',
      duration: '3 Months',
      mode: 'Offline',
      venue: 'MEPZ Tambaram, Chennai',
      fee: '₹30,000 + GST',
      modules: [
        'Python Programming for AI & ML',
        'Machine Learning Fundamentals',
        'Deep Learning & Neural Networks',
        'Generative AI Concepts',
        'Real-world Mini Projects',
        'Industry Case Studies'
      ]
    },
    'cyber-security': {
      title: 'Cyber Security & Ethical Hacking',
      duration: '3 Months',
      mode: 'Offline',
      venue: 'MEPZ Tambaram, Chennai',
      fee: '₹30,000 + GST',
      modules: [
        'Fundamentals of Networking',
        'Security Concepts & Protocols',
        'Ethical Hacking Techniques',
        'Cyber Defense Strategies',
        'Practical Security Assessments',
        'Real-world Security Projects'
      ]
    }
  };

  const features = [
    {
      icon: '🎓',
      title: 'Industry-Designed Curriculum',
      description: 'Curriculum designed by industry professionals with real-world relevance'
    },
    {
      icon: '👨‍💻',
      title: 'Hands-on Learning',
      description: 'Practical exercises with live demonstrations and industry projects'
    },
    {
      icon: '🏢',
      title: 'Industry Relevant Projects',
      description: 'Mini projects that simulate real industry challenges and scenarios'
    },
    {
      icon: '📜',
      title: 'C-DAC Certification',
      description: 'Government-recognized certification enhancing employability'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen mt-16 bg-gradient-to-br from-slate-50 to-blue-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-md">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-sm sm:text-lg font-bold">🏛️</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">MEPZ - C-DAC COLLABORATION</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MEPZ C-DAC Skill Development Centre
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            State-of-the-art training in emerging technologies through hands-on, industry-relevant certification programs
          </p>

          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base text-blue-700 font-semibold">
              Admissions Open for 17 January 2026 Batch
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
          {/* Left Column - About & Features */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About Section */}
            <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border-l-4 border-blue-600 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🏢</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">About the Centre</h2>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">A MeitY Government of India Initiative</p>
                </div>
              </div>

              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Centre for Development of Advanced Computing (C-DAC) is an autonomous Scientific Society
                  under the Ministry of Electronics & Information Technology (MeitY), Government of India.
                  C-DAC Bangalore established its Advanced Computing Training School (ACTS) to build and
                  mobilize skilled manpower to address the growing demand in the Information Technology sector.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The Madras Export Processing Zone (MEPZ) and C-DAC Bangalore have collaborated to establish
                  a state-of-the-art IT Skill Development Centre in Tambaram, Chennai, Tamil Nadu. This initiative
                  focuses on equipping students with in-demand skills through hands-on, industry-relevant
                  training modules and certification programs.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg sm:text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Eligibility Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl">📋</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Eligibility</h3>
              </div>

              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Students from Circuit Branches (any semester)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Fresh Engineering Graduates seeking upskilling</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Postgraduate students (MSc/MCA) with technical interest</span>
                </li>
              </ul>
            </div>

            {/* Important Dates Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl">📅</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Important Dates</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-emerald-200 mb-1">Course Start Date</div>
                  <div className="text-base sm:text-lg font-bold">17 January 2026</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-emerald-200 mb-1">Last Date to Apply</div>
                  <div className="text-base sm:text-lg font-bold">2 February 2026</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">📞</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:cdac-mepz@cdac.in" className="text-sm sm:text-base hover:text-blue-600 hover:underline break-all">
                    cdac-mepz@cdac.in
                  </a>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm sm:text-base">080 2448 5852</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base">80505 55639</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className={`mb-12 lg:mb-16 transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm sm:text-base text-blue-600 font-semibold">Certification Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Available Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              3-month intensive certification programs with industry-relevant curriculum
            </p>
          </div>

          {/* Course Toggle */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex bg-gray-100 p-1 rounded-lg sm:rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setActiveCourse('ai-ml')}
                className={`px-4 sm:px-6 py-2.5 cursor-pointer sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 w-1/2 sm:w-auto ${activeCourse === 'ai-ml'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'}`}
              >
                AI & ML Program
              </button>
              <button
                onClick={() => setActiveCourse('cyber-security')}
                className={`px-4 sm:px-6 py-2.5  cursor-pointer sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 w-1/2 sm:w-auto ${activeCourse === 'cyber-security'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'}`}
              >
                Cyber Security
              </button>
            </div>
          </div>

          {/* Course Details */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Course Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {activeCourse === 'ai-ml'
                      ? 'Practicum - Project Based Internship Program in AI & ML'
                      : 'Project Based Internship Program in Cyber Security & Ethical Hacking'}
                  </h3>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Course Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {courses[activeCourse].modules.map((module, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 rounded-lg">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-xs sm:text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Details Sidebar */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Duration */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 text-sm sm:text-base">⏱️</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Duration</div>
                        <div className="text-base sm:text-lg font-bold text-gray-900">{courses[activeCourse].duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 text-sm sm:text-base">🏢</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Mode & Venue</div>
                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          <span className="block sm:inline">{courses[activeCourse].mode}</span>
                          <span className="hidden sm:inline"> at </span>
                          <span className="block sm:inline">{courses[activeCourse].venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-sm sm:text-base">💰</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Course Fee</div>
                        <div className="text-base sm:text-lg font-bold text-gray-900">{courses[activeCourse].fee}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Button Container - FIXED WITH GAP */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Apply Now Button */}
                  <a
                    href="https://c-huk.cdacb.in/practicum_reg.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 w-full text-center"
                  >
                    <span className="text-sm sm:text-base">Apply Now for january 2026 Batch</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {/* Download Brochure Button */}
                  <a
                    href="/pdfs/mepz.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 w-full text-center group"
                  >
                    <span className="text-sm sm:text-base">Download Course Brochure</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 border border-blue-200 w-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg sm:text-xl font-bold">C</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-gray-900 font-bold text-sm sm:text-base">Centre for Development of Advanced Computing (C-DAC)</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Ministry of Electronics & Information Technology (MeitY), Government of India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mepz;