import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Globe, Users, Building, GraduationCap } from "lucide-react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  // Sci-style scroll animation states
  const [visibleSections, setVisibleSections] = useState({});
  const [animationTriggers, setAnimationTriggers] = useState({});
  const animationTimeouts = useRef({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // ============ SCI-STYLE SCROLL ANIMATIONS ============
  
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
      // Clear all animation timeouts
      Object.values(animationTimeouts.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCategories = [
    {
      id: "industrial-visit",
      title: "Industrial Visits",
      email: "ivblr@cdac.in",
      description: "Schedule industry exposure visits for students",
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-500 to-sky-500"
    },
    {
      id: "lab-corporate",
      title: "Lab Establishment & Corporate Trainings",
      email: "bd-blr@cdac.in",
      description: "Set up labs or organize corporate training programs",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      id: "cyber-security",
      title: "Cybersecurity Events",
      email: "isearccblr@cdac.in",
      description: "Inquiries about cybersecurity workshops and events",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "pg-diploma",
      title: "PG Certificate Programme",
      email: "actsb@cdac.in",
      description: "Information about postgraduate Certificate Programs",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: "general",
      title: "General Inquiries",
      email: "bd-blr@cdac.in",
      description: "Other questions and partnership opportunities",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center">
              Contact TRUST
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto px-2">
              Get in touch with the right team for your specific needs and inquiries
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sci animations */}
      <section
        id="contact-content"
        ref={(el) => addToRefs(el, 0)}
        className={`max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 transition-all duration-500 ${getAnimationClass('contact-content')}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information with Sci animations */}
          <div className={`transition-all duration-1000
            ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}>
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className={`flex items-start transition-all duration-700
                ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                style={{animationDelay: '200ms'}}>
                <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    C-DAC Bangalore<br />
                    68, Electronics City Phase 1<br />
                    Bangalore, Karnataka 560100
                  </p>
                </div>
              </div>

              <div className={`flex items-start transition-all duration-700
                ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                style={{animationDelay: '400ms'}}>
                <div className="bg-green-100 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    +91-80-2854-3000
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    (Monday - Friday, 9 AM - 6 PM)
                  </p>
                </div>
              </div>

              <div className={`flex items-start transition-all duration-700
                ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                style={{animationDelay: '600ms'}}>
                <div className="bg-purple-100 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">Website</h3>
                  <a 
                    href="https://c-huk.cdacb.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-700 font-medium hover:underline text-sm sm:text-base break-all leading-tight"
                  >
                    https://c-huk.cdacb.in
                  </a>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Visit our official portal for more information
                  </p>
                </div>
              </div>
            </div>
          
            <div className="mt-8 sm:mt-10 md:mt-12">
              <h3 className={`text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 transition-all duration-1000
                ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                style={{animationDelay: '800ms'}}>
                Contact by Department
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactCategories.map((category, index) => (
                  <div 
                    key={category.id}
                    className={`bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300
                      ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                    style={{ 
                      animationDelay: `${900 + index * 100}ms`
                    }}
                  >
                    <div className="flex items-start">
                      <div className={`bg-gradient-to-r ${category.color} text-white p-2.5 sm:p-3 rounded-md sm:rounded-lg mr-3 sm:mr-4 flex-shrink-0`}>
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 truncate">{category.title}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm mb-2 line-clamp-2">{category.description}</p>
                        <a 
                          href={`mailto:${category.email}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm hover:underline inline-flex items-center break-all"
                        >
                          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0" />
                          <span className="truncate">{category.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with Sci animations */}
          <div className={`transition-all duration-1000
            ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
            style={{animationDelay: '300ms'}}>
            <div className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-700
              ${shouldAnimate('contact-content') ? 'animate-scale-up' : 'pre-animation-scale'}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '500ms'}}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '600ms'}}>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '700ms'}}>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-sm sm:text-base"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="industrial-visit">Industrial Visit</option>
                    <option value="lab-establishment">Lab Establishment</option>
                    <option value="corporate-training">Corporate Training</option>
                    <option value="cybersecurity">Cybersecurity Events</option>
                    <option value="pg-diploma">PG Certificate Programme Courses</option>
                    <option value="i-labs">I-LABS Program</option>
                    <option value="fiip">FIIP Program</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '800ms'}}>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter subject"
                  />
                </div>

                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '900ms'}}>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Enter your message here..."
                  />
                </div>

                <div className={`transition-all duration-700
                  ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                  style={{animationDelay: '1000ms'}}>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className={`mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 transition-all duration-1000
                ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
                style={{animationDelay: '1100ms'}}>
                <p className="text-xs sm:text-sm text-slate-500 text-center">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>

            {/* Quick Links with Sci animations */}
            <div className={`mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000
              ${shouldAnimate('contact-content') ? 'animate-fade-in-up' : 'pre-animation-up'}`}
              style={{animationDelay: '1200ms'}}>
              <a 
                href="https://c-huk.cdacb.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-lg mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">C-HUK Portal</h4>
                <p className="text-xs sm:text-sm text-slate-500">Visit our official website</p>
              </a>

              <a 
                href="/#programs-section"
                className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-lg mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Our Programs</h4>
                <p className="text-xs sm:text-sm text-slate-500">Explore all our programs</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        /* Sci Animation Styles */
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

        /* Text truncation and line clamp utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 475px) {
          .xs\\:px-5 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          
          .xs\\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;