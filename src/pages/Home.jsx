import trust1 from "../assets/trust1.jpg";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [scrollAnimations, setScrollAnimations] = useState({});
  const location = useLocation();
  
  const sectionRefs = useRef([]);
  const programsSectionRef = useRef(null);
  

  useEffect(() => {
    if (location.pathname === "/") {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setScrollAnimations(prev => ({
            ...prev,
            [entry.target.id]: true
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

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  // Function to scroll to programs section
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full">
        <div
          className="absolute inset-0 w-screen h-[600px] md:h-[700px] lg:h-[750px] bg-cover bg-center left-1/2 -translate-x-1/2"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.9)), url(${trust1})`,
          }}
        />

        <div className="relative pt-16 h-[600px] md:h-[700px] lg:h-[750px] flex flex-col justify-center items-center text-center px-4">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="block">Empowering Through</span>
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <p className={`text-gray-200 max-w-3xl mb-10 text-lg md:text-xl transition-all duration-1000 delay-300 ${animate ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            Driving innovation and building capacity in cutting-edge technologies
            for a future-ready workforce.
          </p>
          
          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500
    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={scrollToPrograms}
              className="px-10 py-4 rounded-full font-semibold text-white
      bg-gradient-to-r from-sky-400 to-blue-500
      shadow-lg shadow-blue-500/30
      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
      group"
            >
              Explore Programs
              <span
                className="inline-block text-xl px-3 transition-transform duration-300
      group-hover:translate-x-2"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section
        ref={(el) => addToRefs(el, 0)}
        id="about-section"
        className={`relative w-screen left-1/2 -translate-x-1/2 py-24
  bg-gradient-to-b from-slate-100 to-white overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div
            className={`text-center mb-20 transition-all duration-1000
      ${scrollAnimations['about-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About The Trust
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div
              className={`transition-all duration-1000 delay-200
        ${scrollAnimations['about-section'] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-3xl font-semibold text-slate-800 mb-6">
                Who We Are
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our Trust is dedicated to fostering excellence in technology and
                education. We focus on creating a skilled talent pool through
                specialized training programs, funded projects, and strong industry
                collaborations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our mission is to bridge the skill gap and empower individuals and
                organizations with the tools, confidence, and knowledge needed to
                thrive in the digital age.
              </p>
              {/* Highlights */}
              <div className="flex flex-wrap gap-4">
                {['Skill Development', 'Industry Collaboration', 'Future Ready'].map((item, idx) => (
                  <span 
                    key={item}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 delay-${idx * 100}
                      ${scrollAnimations['about-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      ${idx === 0 ? 'bg-sky-100 text-sky-700' : 
                         idx === 1 ? 'bg-blue-100 text-blue-700' : 
                         'bg-indigo-100 text-indigo-700'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative transition-all duration-1000 delay-400  hover:-translate-y-4 hover:shadow-2xl hover:shadow-sky-500/20
        ${scrollAnimations['about-section'] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="About Trust"
                className="relative w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPACITY BUILDING IMPACT SECTION ================= */}
      <section
        ref={(el) => addToRefs(el, 1)}
        id="impact-section"
        className="relative w-screen left-1/2 -translate-x-1/2 py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div
            className={`text-center mb-16 transition-all duration-1000
              ${scrollAnimations['impact-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Impact & Reach
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Empowering thousands through skill development and capacity building initiatives
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Business Capacity Building Card */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 delay-200
                ${scrollAnimations['impact-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-sky-100 text-sky-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Business Capacity Building Activities</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "PG Diploma", desc: "6 months PGD course", count: "1,797" },
                  { name: "Master's Courses", desc: "4 months training for Master's courses", count: "50" },
                  { name: "Practicum", desc: "Training for minority candidates", count: "196" },
                  { name: "Experiential Learning", desc: "4-7 days industry relevant training", count: "2,000" },
                  { name: "Corporate Trainings", desc: "1-2 weeks trainings", count: "350" },
                  { name: "Establishment of Labs", desc: "Research Lab setup", count: "30+ lab kits deployed" },
                  { name: "Industrial Visits", desc: "2-hour interactive session", count: "3,000+" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-200 group"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">{item.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <div className="ml-4">
                      <span className="bg-sky-100 text-sky-700 font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                        {item.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funded Capacity Building Card */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 delay-400
                ${scrollAnimations['impact-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Funded Capacity Building Activities</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "ISEA Phase-III", desc: "Awareness program in Cyber security", count: "10,000+" },
                  { name: "FutureSkills Prime", desc: "MeitY and NASSCOM project (Lead Resource Centre for IoT)", count: "2,400" },
                  { name: "SC-ST IoT BLP Upskilling", desc: "Offered in Blended learning mode", count: "17,800+" },
                  { name: "Work-based Learning", desc: "6-month stipend-based internship", count: "105" },
                  { name: "C-HUK", desc: "Offered in Offline mode with varied training types", count: "2,500+" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-200 group"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{item.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <div className="ml-4">
                      <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                        {item.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Impact Summary */}
          <div
            className={`mt-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 text-center transition-all duration-700 delay-600
              ${scrollAnimations['impact-section'] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Total Impact</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { label: "Total Trained", value: "36,000+", color: "sky" },
                { label: "Programs Offered", value: "12+", color: "blue" },
                { label: "Lab Kits Deployed", value: "30+", color: "indigo" },
                { label: "Industrial Visits", value: "3,000+", color: "green" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  <section
  ref={(el) => addToRefs(el, 2)}
  id="programs-section"
  className={`relative w-screen left-1/2 -translate-x-1/2 bg-slate-900 py-16 md:py-20 lg:py-24
    transition-all duration-1000 ease-out`}
>
  <div className="px-4 sm:px-6 md:px-12 lg:px-20">
    {/* Heading */}
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4
        transition-all duration-1000 ease-out
        ${scrollAnimations['programs-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      Featured Programs
    </h2>

    <p
      className={`text-center text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 text-sm sm:text-base
        transition-all duration-1000 delay-200
        ${scrollAnimations['programs-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      We offer a diverse range of programs designed to build technical prowess
      and real-world skills.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {[
        { 
          title: "PG Diploma Courses", 
          desc: "Advanced diploma programs delivering deep technical expertise and hands-on experience.",
          emoji: "🎓",
          color: "sky",
          delay: 300,
          link: "/programs/pg-diploma",
          linkText: "View Courses"
        },
        { 
          title: "Master's Courses", 
          desc: "Comprehensive programs for advanced knowledge and research-oriented learning.",
          emoji: "🎓",
          color: "blue",
          delay: 400,
          link: "/master",
          linkText: "Explore Programs"
        },
        { 
          title: "Practicum", 
          desc: "Hands-on learning experiences to apply theoretical knowledge in real projects.",
          emoji: "🛠️",
          color: "indigo",
          delay: 500,
          link: "/practium",
          linkText: "Learn More"
        },
        { 
          title: "Experiential Learning", 
          desc: "Interactive programs focusing on learning by doing and real-world exposure.",
          emoji: "🌱",
          color: "sky",
          delay: 600,
          link: "/expermential",
          linkText: "Discover"
        },
        { 
          title: "Corporate Trainings", 
          desc: "Industry-focused training solutions tailored to empower and upskill corporate teams.",
          emoji: "🏢",
          color: "blue",
          delay: 700,
          link: "/programs/corporate-trainings",
          linkText: "Get Details"
        },
        { 
          title: "Establishment of Labs", 
          desc: "State-of-the-art labs to provide practical experience with modern technologies.",
          emoji: "🧪",
          color: "indigo",
          delay: 800,
          link: "/programs/establishment-of-labs",
          linkText: "View Options"
        },
        { 
          title: "Industrial Visits", 
          desc: "Exposure visits to industries to gain practical knowledge and industry insights.",
          emoji: "🏭",
          color: "green",
          delay: 900,
          link: "/programs/industrial-visits",
          linkText: "Schedule Visit"
        },
      ].map((program, index) => (
        <div
          key={index}
          className={`group bg-slate-800/80 backdrop-blur p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700
            transition-all duration-700 delay-${program.delay}
            ${scrollAnimations['programs-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-sky-500/20`}
          style={{
            transitionDelay: `${program.delay}ms`
          }}
        >
          <div className={`text-${program.color}-400 text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110`}>
            {program.emoji}
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
            {program.title}
          </h3>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            {program.desc}
          </p>
          
          {/* Visit Link Button */}
          <div className="mt-auto">
            <a
              href={program.link}
              className={`inline-flex items-center justify-center 
                bg-gradient-to-r from-${program.color}-500 to-${program.color}-600
                hover:from-${program.color}-600 hover:to-${program.color}-700
                text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg 
                font-medium transition-all duration-300 
                hover:scale-105 hover:shadow-lg
                text-sm sm:text-base
                ${scrollAnimations['programs-section'] ? "opacity-100" : "opacity-0"}`}
              style={{
                transitionDelay: `${program.delay + 100}ms`
              }}
            >
              {program.linkText}
              <svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
   
      <section
        ref={(el) => addToRefs(el, 3)}
        id="events-section"
        className={`relative w-screen left-1/2 -translate-x-1/2 py-24
  bg-gradient-to-b from-white to-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div
            className={`text-center mb-20 transition-all duration-1000
      ${scrollAnimations['events-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Recent & Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Join us for our outreach activities, conferences, and workshops.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              {
                date: "August 5, 2025",
                title: "TPO Meet 2024",
                desc: "Connecting with Training and Placement Officers to bridge the gap between academia and industry.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                color: "sky",
                delay: 200
              },
              {
                date: "September 12, 2025",
                title: "SCI Conference",
                desc: "A flagship conference focusing on advancements in system and information security.",
                img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
                color: "blue",
                delay: 400
              },
              {
                date: "October 20, 2025",
                title: "Cyber Security Roadtrip",
                desc: "Raising awareness about cybersecurity through outreach programs across multiple cities.",
                img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
                color: "indigo",
                delay: 600
              }
            ].map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg
        transition-all duration-700 delay-${event.delay}
        ${scrollAnimations['events-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-4 hover:shadow-2xl hover:shadow-${event.color}-500/20`}
                style={{
                  transitionDelay: `${event.delay}ms`
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className={`inline-block mb-3 text-sm font-medium text-${event.color}-600 bg-${event.color}-100 px-4 py-1 rounded-full`}>
                    {event.date}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;