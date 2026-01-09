import React, { useState, useEffect, useRef } from 'react';
import sci6 from '../assets/sci4.jpg';
import sci5 from '../assets/sci5.jpg';
import sci3 from '../assets/sci3.jpg';
import sci2 from '../assets/sci2.jpg';
import sci1 from '../assets/sci1.jpg';

const Sci = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});
  const [statValues, setStatValues] = useState({
    attendees: 0,
    sessions: 0,
    companies: 0
  });
  const [animationTriggers, setAnimationTriggers] = useState({});
  const intervalRef = useRef(null);
  const sectionRefs = useRef(new Array(6).fill(null)); // Updated to 6 for new section
  const statsRef = useRef(null);
  const animationTimeouts = useRef({});

  // SCI Official Website URL
  const SCI_OFFICIAL_WEBSITE = "https://sci25.supercomputingindia.org/index";

  // Conference banner images for slider
  const bannerImages = [
    {
      id: 1,
      image: sci6,
      title: "SUPER COMPUTING INDIA 2025",
      subtitle: "Convergence of HPC, AI, Quantum Computing & Cybersecurity"
    },
    {
      id: 2,
      image: sci5,
      title: "Inaugural Edition",
      subtitle: "Annual HPC Conference under National Supercomputing Mission"
    },
    {
      id: 3,
      image: sci3,
      title: "Technology Exhibition",
      subtitle: "Cutting-edge solutions from global innovators"
    },
    {
      id: 4,
      image: sci2,
      title: "Strategic Partnerships",
      subtitle: "Industry-Academia collaborations for innovation"
    },
    {
      id: 5,
      image: sci1,
      title: "Global Collaboration",
      subtitle: "International knowledge sharing & research initiatives"
    }
  ];

  const imagesData = [
    {
      id: 1,
      image: sci6,
      definition: 'Conference banner for SUPER COMPUTING INDIA 2025 showcasing the convergence of HPC, AI, Quantum Computing, Semiconductor, and Cybersecurity technologies.',
      alt: 'Super Computing India 2025 Conference Banner',
      category: 'Conference',
      date: 'Dec 09-13, 2025',
      location: 'Manipal Institute of Technology, Bengaluru',
      tags: ['HPC', 'AI', 'Quantum', 'Cybersecurity']
    },
    {
      id: 2,
      image: sci5,
      definition: 'Conference banner highlighting the convergence of cutting-edge technologies including High Performance Computing, Artificial Intelligence, Quantum Computing, Semiconductor, and Cybersecurity.',
      alt: 'Super Computing India 2025 Banner',
      category: 'Conference',
      date: 'Dec 09-13, 2025',
      location: 'Manipal Institute of Technology, Bengaluru',
      tags: ['HPC', 'AI', 'Quantum', 'Semiconductor']
    },
    {
      id: 3,
      image: sci3,
      definition: 'Software product engineering services featuring generational security classifications with a focus on AI-based security solutions and edge computing technologies.',
      alt: 'Software Product Engineering and Security Services',
      category: 'Technical',
      tags: ['Security', 'AI', 'Edge Computing', 'Engineering']
    },
    {
      id: 4,
      image: sci2,
      definition: 'Strategic partnership between Electronics City Industries Association (ELCIA) and C-DAC for IoT products, sensor solutions, HPC infrastructure, and industry skilling.',
      alt: 'ELCIA and C-DAC Partnership Letter',
      category: 'Partnership',
      tags: ['IoT', 'HPC', 'Industry', 'Collaboration']
    },
    {
      id: 5,
      image: sci1,
      definition: 'Collaboration between C-DAC and University Technical Malaysia Melaka focusing on knowledge sharing, joint training, research, and establishment of technology labs.',
      alt: 'C-DAC and UTeM Collaboration Agreement',
      category: 'International',
      tags: ['Research', 'Training', 'Technology Lab', 'International']
    }
  ];

  const conferenceInfo = {
    name: "Supercomputing India SCI2025",
    tagline: "HPC, AI & Quantum Computing",
    description: "Supercomputing India SCI2025 is the inaugural edition of the annual HPC conference, organised by leading HPC centres in India in collaboration with partners, and supported by National Supercomputing Mission (NSM) — a visionary initiative to empower India's scientific and strategic communities by establishing a robust indigenous supercomputing ecosystem.",
    objective: "With the theme HPC, AI, & Quantum Computing, SCI2025 aims to foster a collaborative HPC ecosystem in India and Asia. It will serve as a global platform for connecting thought leaders from academia, industry, and the public sector.",
    aboutConference: "SCI2025 will bring together a distinguished global community of experts, researchers, industry leaders, innovators and academicians to chart the future of High Performance Computing (HPC) and its convergence with AI, and Quantum technologies. The conference will feature comprehensive tracks covering next-generation HPC architectures, AI-driven scientific discovery, Quantum innovation, semiconductor ecosystems, and real-world applications across diverse sectors.",
    exhibition: "Complementing the technical sessions, a cutting-edge technology exhibition will showcase the latest advancements in supercomputing systems, AI accelerators, Quantum-classical hybrid platforms, chip design, HPC software, high-speed interconnects, and security solutions. The exhibition floor will feature participation from global supercomputing centers, leading technology companies, premier R&D and academic institutions, and emerging startups, offering a unique opportunity to explore innovation, foster collaboration, and engage with the forefront of digital transformation.",
    highlights: [
      "Inaugural annual HPC conference in India",
      "Supported by National Supercomputing Mission (NSM)",
      "Global platform for academia, industry, and public sector",
      "Focus on indigenous supercomputing ecosystem",
      "Collaborative HPC ecosystem development in Asia"
    ],
    tracks: [
      { name: "Next-Gen HPC Architectures", icon: "⚡", color: "blue" },
      { name: "AI-Driven Scientific Discovery", icon: "🤖", color: "purple" },
      { name: "Quantum Innovation", icon: "🔬", color: "green" },
      { name: "Semiconductor Ecosystems", icon: "💎", color: "red" },
      { name: "Real-world Applications", icon: "🌍", color: "indigo" }
    ],
    exhibitionHighlights: [
      "Supercomputing Systems",
      "AI Accelerators",
      "Quantum-Classical Hybrid Platforms",
      "Chip Design Solutions",
      "HPC Software Stack",
      "High-Speed Interconnects",
      "Security Solutions"
    ]
  };

  // Auto-slide functionality
  useEffect(() => {
    setIsVisible(true);
    
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Clear all animation timeouts
      Object.values(animationTimeouts.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, [isAutoPlaying]);

  // Intersection Observer for scroll animations - triggers every time section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          
          if (entry.isIntersecting) {
            // Mark section as visible
            setVisibleSections(prev => ({
              ...prev,
              [sectionId]: true
            }));

            // Trigger animation for this section
            setAnimationTriggers(prev => ({
              ...prev,
              [sectionId]: (prev[sectionId] || 0) + 1
            }));

            // Trigger number counting when stats section is visible
            if (sectionId === 'stats') {
              animateNumbers();
            }

            // Reset animation after it completes (for re-triggering)
            if (animationTimeouts.current[sectionId]) {
              clearTimeout(animationTimeouts.current[sectionId]);
            }
            
            animationTimeouts.current[sectionId] = setTimeout(() => {
              setAnimationTriggers(prev => ({
                ...prev,
                [sectionId]: (prev[sectionId] || 0)
              }));
            }, 1000); // Reset after animation duration
          } else {
            // When section leaves view, we can reset the visible state
            // but keep the animation trigger count
            setVisibleSections(prev => ({
              ...prev,
              [sectionId]: false
            }));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit earlier
      }
    );

    // Observe all section refs
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to animate numbers from 0 to target - resets when section becomes visible
  const animateNumbers = () => {
    // Reset numbers to 0 before animating
    setStatValues({
      attendees: 0,
      sessions: 0,
      companies: 0
    });

    // Clear any existing timeouts
    Object.values(animationTimeouts.current).forEach(timeout => {
      if (timeout && timeout !== animationTimeouts.current['stats']) {
        clearTimeout(timeout);
      }
    });

    const targets = [
      { target: 1500, key: 'attendees', duration: 2000 },
      { target: 50, key: 'sessions', duration: 1500 },
      { target: 100, key: 'companies', duration: 1800 }
    ];

    targets.forEach(({ target, key, duration }) => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStatValues(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStatValues(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);

      // Store the timer so we can clear it if needed
      animationTimeouts.current[`${key}_timer`] = timer;
    });
  };

  // Check if animation should play for a section
  const shouldAnimate = (sectionId) => {
    return visibleSections[sectionId] && animationTriggers[sectionId] > 0;
  };

  // Get animation class based on visibility and trigger
  const getAnimationClass = (sectionId) => {
    if (shouldAnimate(sectionId)) {
      return 'animate-section';
    }
    return 'pre-animation';
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? bannerImages.length - 1 : prev - 1));
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Floating SCI Link Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={SCI_OFFICIAL_WEBSITE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-pulse border border-white/30 backdrop-blur-sm"
        >
          <span className="text-lg">🌐</span>
          <span className="font-semibold">Visit SCI Website</span>
        </a>
      </div>

      {/* Hero Slider Section */}
      <div className={`relative h-[80vh] md:h-[90vh] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Slides */}
        {bannerImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            
            {/* Slide Content */}
            <div className={`relative h-full flex items-center transition-all duration-1000 delay-300 ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="max-w-7xl mx-auto px-4 py-20 w-full">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-pulse">
                    <span className="text-white font-semibold text-sm">📅 Dec 09-13, 2025</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {slide.subtitle}
                  </p>
                  
                  {/* SCI Website Button */}
                
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/30 animate-fade-in"
        >
          <span className="text-2xl text-white">←</span>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/30 animate-fade-in"
          style={{animationDelay: '0.2s'}}
        >
          <span className="text-2xl text-white">→</span>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8 animate-pulse'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 left-8 z-20 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in" style={{animationDelay: '0.6s'}}>
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {bannerImages.length}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Conference Section */}
        <div 
          id="about-conference"
          ref={el => sectionRefs.current[0] = el}
          className={`mb-16 transition-all duration-500 ${getAnimationClass('about-conference')}`}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold rounded-full mb-4">
              About Conference
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Charting the Future of HPC & Emerging Technologies</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div 
              className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                shouldAnimate('about-conference') ? 'animate-slide-in-left' : 'pre-animation-left'
              }`}
              key={`about-left-${animationTriggers['about-conference'] || 0}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Global Convergence</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {conferenceInfo.aboutConference}
              </p>
            </div>

            <div 
              className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-blue-100 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                shouldAnimate('about-conference') ? 'animate-slide-in-right' : 'pre-animation-right'
              }`}
              key={`about-right-${animationTriggers['about-conference'] || 0}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technology Exhibition</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {conferenceInfo.exhibition}
              </p>
            </div>
          </div>

          {/* Conference Tracks */}
          <div 
            id="conference-tracks"
            ref={el => sectionRefs.current[1] = el}
            className={`mb-12 transition-all duration-500 ${getAnimationClass('conference-tracks')}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Conference Tracks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {conferenceInfo.tracks.map((track, index) => (
                <div 
                  key={`${track.name}-${animationTriggers['conference-tracks'] || 0}-${index}`}
                  className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    shouldAnimate('conference-tracks') ? 'animate-scale-up' : 'pre-animation-scale'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.6s'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${track.color}-100 to-${track.color}-200 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{track.icon}</span>
                  </div>
                  <h4 className="text-center font-semibold text-gray-800">{track.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Exhibition Highlights */}
          <div 
            id="exhibition-highlights"
            ref={el => sectionRefs.current[2] = el}
            className={`mb-12 transition-all duration-500 ${getAnimationClass('exhibition-highlights')}`}
          >
            <div className="flex items-center justify-between mb-8 ">
              <h3 className="text-2xl font-bold  text-gray-900">Exhibition Highlights</h3>
            
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conferenceInfo.exhibitionHighlights.map((item, index) => (
                <div 
                  key={`${item}-${animationTriggers['exhibition-highlights'] || 0}-${index}`}
                  className={`bg-white p-4 rounded-xl shadow-lg border border-gray-200 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    shouldAnimate('exhibition-highlights') ? 'animate-fade-in-up' : 'pre-animation-up'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section with Animated Numbers */}
        <div 
          id="stats"
          ref={el => {
            sectionRefs.current[3] = el;
            statsRef.current = el;
          }}
          className={`mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 shadow-xl transition-all duration-1000 ${getAnimationClass('stats')}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Attendees */}
            <div className={`text-center transition-all duration-1000 ${
              visibleSections['stats'] ? 'animate-count-up' : 'opacity-0'
            }`}>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                <span className="inline-block min-w-[120px]">
                  {statValues.attendees.toLocaleString()}
                  <span className="ml-1">+</span>
                </span>
              </div>
              <div className="text-gray-700 font-semibold">Expected Attendees</div>
              <div className="text-gray-500 text-sm mt-1">Global Experts & Leaders</div>
            </div>

            {/* Sessions */}
            <div className={`text-center transition-all duration-1000 ${
              visibleSections['stats'] ? 'animate-count-up' : 'opacity-0'
            }`} style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-purple-600 mb-2">
                <span className="inline-block min-w-[80px]">
                  {statValues.sessions}
                  <span className="ml-1">+</span>
                </span>
              </div>
              <div className="text-gray-700 font-semibold">Technology Sessions</div>
              <div className="text-gray-500 text-sm mt-1">Across 5 Tracks</div>
            </div>

            {/* Companies */}
            <div className={`text-center transition-all duration-1000 ${
              visibleSections['stats'] ? 'animate-count-up' : 'opacity-0'
            }`} style={{animationDelay: '0.6s'}}>
              <div className="text-5xl font-bold text-green-600 mb-2">
                <span className="inline-block min-w-[80px]">
                  {statValues.companies}
                  <span className="ml-1">+</span>
                </span>
              </div>
              <div className="text-gray-700 font-semibold">Exhibiting Companies</div>
              <div className="text-gray-500 text-sm mt-1">Global & Indian Innovators</div>
            </div>
          </div>

          {/* Progress indicators for each number */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: `${(statValues.attendees / 1500) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">Attendee Progress</span>
            </div>
            <div className="text-center">
              <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-1500 ease-out"
                  style={{ width: `${(statValues.sessions / 50) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">Session Progress</span>
            </div>
            <div className="text-center">
              <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-1800 ease-out"
                  style={{ width: `${(statValues.companies / 100) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">Company Progress</span>
            </div>
          </div>
        </div>

       
    

        {/* Footer Note */}
        <div 
          id="footer"
          ref={el => sectionRefs.current[4] = el}
          className={`text-center py-8 border-t border-gray-200 transition-all duration-500 ${getAnimationClass('footer')}`}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 animate-spin-slow">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">National Supercomputing Mission</h3>
            <p className="text-gray-600 max-w-2xl">
              A visionary initiative empowering India's scientific and strategic communities through advanced computing infrastructure and innovation
            </p>
            <div className="mt-6">
              <a 
                href={SCI_OFFICIAL_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <span>Learn more about SCI2025</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Base animation class for sections */
        .animate-section {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.5s ease-out;
        }

        /* Pre-animation states */
        .pre-animation {
          opacity: 0;
          transform: translateY(20px);
        }

        .pre-animation-left {
          opacity: 0;
          transform: translateX(-30px);
        }

        .pre-animation-right {
          opacity: 0;
          transform: translateX(30px);
        }

        .pre-animation-scale {
          opacity: 0;
          transform: scale(0.9);
        }

        .pre-animation-up {
          opacity: 0;
          transform: translateY(20px);
        }

        /* Animation classes that get applied when triggered */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
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

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        /* Staggered animations for children */
        .stagger-children > * {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Reset animation for re-triggering */
        @keyframes reset {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .animate-reset {
          animation: reset 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Sci;