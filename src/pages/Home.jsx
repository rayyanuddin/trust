import trust1 from "../assets/trust1.jpg";
import trust4 from "../assets/trust4.png";
import trust5 from "../assets/trust5.jpg";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [scrollAnimations, setScrollAnimations] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const [countValues, setCountValues] = useState({
    trained: 0,
    programs: 0,
    labs: 0,
    visits: 0
  });

  // Business capacity building counters
  const [businessCounters] = useState([
    { name: "PG Certificate Programme", desc: "6 months PGCP course", target: 11797, hasPlus: true },
    { name: "Master's Courses", desc: "4 months training for Master's courses", target: 50, hasPlus: false },
    { name: "Practicum", desc: "Training for minority candidates", target: 196, hasPlus: false },
    { name: "Experiential Learning", desc: "4-7 days industry relevant training", target: 2000, hasPlus: true },
    { name: "Corporate Trainings", desc: "1-2 weeks trainings", target: 350, hasPlus: false },
    { name: "Establishment of Labs", desc: "Research Lab setup", target: 30, hasPlus: true, extraText: " lab kits" },
    { name: "Industrial Visits", desc: "2-hour interactive session", target: 3000, hasPlus: true }
  ]);

  // Funded activities counters
  const [fundedCounters] = useState([
    { name: "ISEA Phase-III", desc: "Awareness program in Cyber security", target: 10000, hasPlus: true },
    { name: "FutureSkills Prime", desc: "MeitY and NASSCOM project (Lead Resource Centre for IoT)", target: 2400, hasPlus: false },
    { name: "SC-ST IoT BLP Upskilling", desc: "Offered in Blended learning mode", target: 17800, hasPlus: true },
    { name: "Work-based Learning", desc: "6-month stipend-based internship", target: 105, hasPlus: true },
    { name: "C-HUK", desc: "Offered in Offline mode with varied training types", target: 2500, hasPlus: true }
  ]);

  const [displayBusinessValues, setDisplayBusinessValues] = useState(businessCounters.map(() => 0));
  const [displayFundedValues, setDisplayFundedValues] = useState(fundedCounters.map(() => 0));
  const [isAnimatingBusiness, setIsAnimatingBusiness] = useState(false);
  const [isAnimatingFunded, setIsAnimatingFunded] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const sectionRefs = useRef([]);
  const sliderIntervalRef = useRef(null);
  const businessAnimationRefs = useRef([]);
  const fundedAnimationRefs = useRef([]);

  const sliderImages = [
    {
      src: trust1,
      title: "Empowering Through Technology",
      subtitle: "Driving innovation and building capacity in cutting-edge technologies for a future-ready workforce.",
      gradient: "from-sky-400 to-blue-500",
      cta: "Explore Acitvities"
    },
    {
      src: trust4,
      title: "Building Capacity for Tomorrow",
      subtitle: "Transforming education through hands-on learning and industry-aligned programs.",
      gradient: "from-purple-500 to-indigo-600",
      cta: "Discover Courses"
    },
    {
      src: trust5 || trust1,
      title: "Innovation in Education",
      subtitle: "Creating next-generation learning experiences through technology and collaboration.",
      gradient: "from-green-500 to-teal-600",
      cta: "Join Us"
    }
  ];

  // Activities data
  const activitiesData = [
    {
      title: "PG Certificate Programme",
      desc: "6 months PGCP courses providing advanced technical expertise and hands-on experience.",
      emoji: "🎓",
      color: "sky",
      delay: 300,
      link: "/pgdiploma",
      linkText: "View Courses",
      count: "11,797+"
    },
    {
      title: "Master's Courses",
      desc: "4 months training programs for advanced knowledge and research-oriented learning.",
      emoji: "📚",
      color: "blue",
      delay: 400,
      link: "/master",
      linkText: "Explore Programs",
      count: "50+"
    },
    {
      title: "Practicum",
      desc: "Specialized training programs designed for minority candidates.",
      emoji: "👥",
      color: "indigo",
      delay: 500,
      link: "/practium",
      linkText: "Learn More",
      count: "196+"
    },
    {
      title: "Experiential Learning",
      desc: "4-7 days industry relevant training programs for practical exposure.",
      emoji: "🌱",
      color: "sky",
      delay: 600,
      link: "/expermential",
      linkText: "Discover",
      count: "2,000+"
    },
    {
      title: "Corporate Trainings",
      desc: "1-2 weeks training solutions tailored for corporate teams.",
      emoji: "🏢",
      color: "blue",
      delay: 700,
      link: "/coporate",
      linkText: "Get Details",
      count: "350+"
    },
    {
      title: "Establishment of Labs",
      desc: "Setting up research labs with modern equipment and technology kits.",
      emoji: "🧪",
      color: "indigo",
      delay: 800,
      link: "/labs",
      linkText: "View Options",
      count: "30+ lab kits"
    },
    {
      title: "Industrial Visits",
      desc: "2-hour interactive sessions at industries for practical knowledge.",
      emoji: "🏭",
      color: "green",
      delay: 900,
      link: "/industrial",
      linkText: "Schedule Visit",
      count: "3,000+"
    },
    {
      title: "Funded: ISEA Phase-III",
      desc: "Awareness program in Cyber security with extensive reach.",
      emoji: "🔐",
      color: "purple",
      delay: 1000,
      link: "/isea",
      linkText: "Know More",
      count: "10,000+"
    },
    {
      title: "Funded: FutureSkills Prime",
      desc: "MeitY and NASSCOM project (Lead Resource Centre for IoT).",
      emoji: "🚀",
      color: "purple",
      delay: 1100,
      link: "/future",
      linkText: "Explore",
      count: "2,400+"
    },
    {
      title: "Funded: SC-ST IoT BLP",
      desc: "Upskilling offered in Blended learning mode for SC-ST candidates.",
      emoji: "📱",
      color: "purple",
      delay: 1200,
      link: "/scst-iot",
      linkText: "View Details",
      count: "17,800+"
    },
    {
      title: "Funded: Work-based Learning",
      desc: "6-month stipend-based internship programs.",
      emoji: "💼",
      color: "purple",
      delay: 1300,
      link: "/wbl",
      linkText: "Apply Now",
      count: "105+"
    },
    {
      title: "Funded: C-HUK",
      desc: "Offered in Offline mode with varied training types and approaches.",
      emoji: "🏛️",
      color: "purple",
      delay: 1400,
      link: "/chuk",
      linkText: "Learn More",
      count: "2,500+"
    },
  ];

  // Function to animate business counters
  const animateBusinessCounters = () => {
    if (isAnimatingBusiness) return;
    
    setIsAnimatingBusiness(true);
    
    // Reset all counters to 0
    setDisplayBusinessValues(businessCounters.map(() => 0));
    
    // Clear any existing animations
    businessAnimationRefs.current.forEach(ref => {
      if (ref) cancelAnimationFrame(ref);
    });
    businessAnimationRefs.current = [];

    // Start fresh animation for each counter
    businessCounters.forEach((item, index) => {
      const target = item.target;
      const duration = 2000; // Animation duration
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);

        setDisplayBusinessValues(prev => {
          const newVals = [...prev];
          newVals[index] = current;
          return newVals;
        });

        if (progress < 1) {
          businessAnimationRefs.current[index] = requestAnimationFrame(animate);
        } else {
          // Animation complete for this counter
          setDisplayBusinessValues(prev => {
            const newVals = [...prev];
            newVals[index] = target;
            return newVals;
          });
        }
      };

      // Staggered animation with delay
      setTimeout(() => {
        businessAnimationRefs.current[index] = requestAnimationFrame(animate);
      }, index * 300);
    });
  };

  // Function to animate funded counters
  const animateFundedCounters = () => {
    if (isAnimatingFunded) return;
    
    setIsAnimatingFunded(true);
    
    // Reset all counters to 0
    setDisplayFundedValues(fundedCounters.map(() => 0));
    
    // Clear any existing animations
    fundedAnimationRefs.current.forEach(ref => {
      if (ref) cancelAnimationFrame(ref);
    });
    fundedAnimationRefs.current = [];

    // Start fresh animation for each counter
    fundedCounters.forEach((item, index) => {
      const target = item.target;
      const duration = 2000; // Animation duration
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);

        setDisplayFundedValues(prev => {
          const newVals = [...prev];
          newVals[index] = current;
          return newVals;
        });

        if (progress < 1) {
          fundedAnimationRefs.current[index] = requestAnimationFrame(animate);
        } else {
          // Animation complete for this counter
          setDisplayFundedValues(prev => {
            const newVals = [...prev];
            newVals[index] = target;
            return newVals;
          });
        }
      };

      // Staggered animation with delay
      setTimeout(() => {
        fundedAnimationRefs.current[index] = requestAnimationFrame(animate);
      }, index * 300);
    });
  };

  // Function to animate both sections
  const animateAllCounters = () => {
    animateBusinessCounters();
    animateFundedCounters();
  };

  useEffect(() => {
    const startSlider = () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }

      sliderIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = (prev + 1) % sliderImages.length;
          document.querySelectorAll('.slide-container').forEach((container, index) => {
            if (index === nextSlide) {
              container.classList.remove('hidden');
              container.classList.add('slide-in');
              setTimeout(() => {
                container.classList.remove('slide-in');
              }, 1000);
            } else if (index === prev) {
              container.classList.add('slide-out');
              setTimeout(() => {
                container.classList.remove('slide-out');
                container.classList.add('hidden');
              }, 1000);
            }
          });
          return nextSlide;
        });
      }, 8000);
    };

    startSlider();

    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
      // Clean up animations
      businessAnimationRefs.current.forEach(ref => {
        if (ref) cancelAnimationFrame(ref);
      });
      fundedAnimationRefs.current.forEach(ref => {
        if (ref) cancelAnimationFrame(ref);
      });
    };
  }, [sliderImages.length]);

  useEffect(() => {
    if (location.pathname === "/") {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setScrollAnimations(prev => ({
            ...prev,
            [entry.target.id]: true
          }));

          // Trigger counters animation when impact section is visible
          if (entry.target.id === 'impact-section' && (!isAnimatingBusiness || !isAnimatingFunded)) {
            // Small delay to ensure section is fully visible
            setTimeout(() => {
              animateAllCounters();
            }, 300);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isAnimatingBusiness, isAnimatingFunded]);

  // Total impact counters animation
  useEffect(() => {
    const impactSection = document.getElementById('impact-section');

    if (!impactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCountValues({
              trained: 0,
              programs: 0,
              labs: 0,
              visits: 0
            });

            setTimeout(() => {
              const targetValues = {
                trained: 36000,
                programs: 12,
                labs: 30,
                visits: 3000
              };

              const duration = 3000;
              const startTime = performance.now();

              const animateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
                const easedProgress = easeOutCubic(progress);

                setCountValues({
                  trained: Math.floor(easedProgress * targetValues.trained),
                  programs: Math.floor(easedProgress * targetValues.programs),
                  labs: Math.floor(easedProgress * targetValues.labs),
                  visits: Math.floor(easedProgress * targetValues.visits)
                });

                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                } else {
                  setCountValues(targetValues);
                }
              };

              requestAnimationFrame(animateCount);
            }, 100);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    observer.observe(impactSection);

    return () => {
      observer.unobserve(impactSection);
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('activities-section');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCtaClick = () => {
    if (currentSlide === 2) {
      navigate("/contact");
    } else {
      scrollToPrograms();
    }
  };

  const goToSlide = (index) => {
    document.querySelectorAll('.slide-container').forEach((container, i) => {
      if (i === index) {
        container.classList.remove('hidden');
        container.classList.add('slide-in');
        setTimeout(() => {
          container.classList.remove('slide-in');
        }, 1000);
      } else if (i === currentSlide) {
        container.classList.add('slide-out');
        setTimeout(() => {
          container.classList.remove('slide-out');
          container.classList.add('hidden');
        }, 1000);
      }
    });

    setCurrentSlide(index);

    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }
    sliderIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 8000);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        {/* Slides */}
        {sliderImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
              filter: index === currentSlide ? "blur(0px)" : "blur(10px)"
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.95)), url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              animation: image.bgAnimation === 'parallax' ? 'parallax 20s linear infinite' : 'zoom 30s linear infinite'
            }}
          />
        ))}

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-2 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white to-blue-300"
                initial={{ width: "0%" }}
                animate={{ width: index === currentSlide ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Welcome to TRUST</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block">{sliderImages[currentSlide].title.split(' ')[0]}</span>
              <motion.span
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${sliderImages[currentSlide].gradient} bg-clip-text text-transparent`}
              >
                {sliderImages[currentSlide].title.split(' ').slice(1).join(' ')}
              </motion.span>
            </h1>

            <motion.p
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl mb-10 leading-relaxed font-light px-4"
            >
              {sliderImages[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={handleCtaClick}
                className={`group relative px-12 py-4 rounded-full font-semibold text-white
                  bg-gradient-to-r ${sliderImages[currentSlide].gradient}
                  shadow-2xl shadow-blue-500/30
                  transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sliderImages[currentSlide].cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section
        ref={(el) => addToRefs(el, 0)}
        id="about-section"
        className={`w-full py-24 bg-gradient-to-b from-slate-100 to-white`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000
              ${scrollAnimations['about-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 px-4">
              About The Trust
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center px-4 lg:px-0">
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
              <div className="flex flex-wrap gap-4">
                {['Skill Development', 'Industry Collaboration', 'Future Ready'].map((item, idx) => (
                  <span
                    key={item}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500
                      ${scrollAnimations['about-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      ${idx === 0 ? 'bg-sky-100 text-sky-700' :
                        idx === 1 ? 'bg-blue-100 text-blue-700' :
                          'bg-indigo-100 text-indigo-700'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-400 hover:-translate-y-4 hover:shadow-2xl hover:shadow-sky-500/20
                ${scrollAnimations['about-section'] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-sky-200 to-blue-200 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="About Trust"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Building Impact Section */}
      <section
        ref={(el) => addToRefs(el, 1)}
        id="impact-section"
        className="w-full py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000
              ${scrollAnimations['impact-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 px-4">
              Our Impact & Reach
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg px-4">
              Empowering thousands through skill development and capacity building initiatives
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-0">
            {/* Business Capacity Building Card */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 delay-200
                ${scrollAnimations['impact-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="flex items-center mb-6 flex-wrap">
                <div className="bg-sky-100 text-sky-600 p-3 rounded-xl mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                  Business Capacity Building Activities
                </h3>
              </div>

              <div className="space-y-4">
                {businessCounters.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start md:items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-200 group"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-semibold text-slate-800 group-hover:text-sky-700 transition-colors text-sm md:text-base leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 pl-2">
                      <span className="bg-sky-100 text-sky-700 font-bold px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap inline-block transition-all duration-300">
                        {displayBusinessValues[index].toLocaleString()}
                        {item.hasPlus && '+'}
                        {item.extraText || ''}
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
              <div className="flex items-center mb-6 flex-wrap">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                  Funded Capacity Building Activities
                </h3>
              </div>

              <div className="space-y-4">
                {fundedCounters.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start md:items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-200 group"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors text-sm md:text-base leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 pl-2">
                      <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap inline-block transition-all duration-300">
                        {displayFundedValues[index].toLocaleString()}
                        {item.hasPlus && '+'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Impact Summary */}
          <div
            className={`mt-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center transition-all duration-700 delay-600 mx-4 sm:mx-0
              ${scrollAnimations['impact-section'] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Total Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: "Total Trained", value: countValues.trained, color: "sky" },
                { label: "Programs Offered", value: countValues.programs, color: "blue" },
                { label: "Lab Kits Deployed", value: countValues.labs, color: "indigo" },
                { label: "Industrial Visits", value: countValues.visits, color: "green" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className={`text-3xl md:text-4xl font-bold text-${item.color}-600 mb-2`}>
                    {item.value.toLocaleString()}+
                  </div>
                  <div className="text-slate-600 font-medium text-sm md:text-base">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        ref={(el) => addToRefs(el, 2)}
        id="activities-section"
        className={`w-full bg-slate-900 py-16 md:py-20 lg:py-24
          transition-all duration-1000 ease-out`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 px-4
              transition-all duration-1000 ease-out
              ${scrollAnimations['activities-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Activities
          </h2>

          <p
            className={`text-center text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 text-sm sm:text-base px-4
              transition-all duration-1000 delay-200
              ${scrollAnimations['activities-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We offer diverse capacity building initiatives designed to empower individuals and organizations with cutting-edge skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
            {activitiesData.map((activity, index) => (
              <div
                key={index}
                className={`group bg-slate-800/80 backdrop-blur p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700
                  transition-all duration-700 min-h-[220px] sm:min-h-[260px] flex flex-col
                  ${scrollAnimations['activities-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-sky-500/20`}
                style={{
                  transitionDelay: `${activity.delay}ms`
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-${activity.color}-400 text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110`}>
                    {activity.emoji}
                  </div>
                  <div className="bg-slate-700/50 px-3 py-1 rounded-full shrink-0 ml-2">
                    <span className="text-sm font-semibold text-white">{activity.count}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white leading-tight">
                  {activity.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {activity.desc}
                </p>

                <div className="mt-auto">
                  <a
                    href={activity.link}
                    className={`inline-flex items-center justify-center 
                      bg-gradient-to-r from-${activity.color}-500 to-${activity.color}-600
                      hover:from-${activity.color}-600 hover:to-${activity.color}-700
                      text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg 
                      font-medium transition-all duration-300 
                      hover:scale-105 hover:shadow-lg
                      text-sm sm:text-base w-full sm:w-auto
                      ${scrollAnimations['activities-section'] ? "opacity-100" : "opacity-0"}`}
                    style={{
                      transitionDelay: `${activity.delay + 100}ms`
                    }}
                  >
                    {activity.linkText}
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

      {/* Events Section */}
      <section
        ref={(el) => addToRefs(el, 3)}
        id="events-section"
        className={`w-full py-24 bg-gradient-to-b from-white to-slate-100`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000
              ${scrollAnimations['events-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 px-4">
              Recent & Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg px-4">
              Join us for our outreach activities, conferences, and workshops.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-4 md:px-0">
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
                  transition-all duration-700
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
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-tight">
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

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100px);
          }
        }
        
        .slide-in {
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .slide-out {
          animation: slideOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Remove any max-width constraints */
        #root, .App, main, .main-container {
          max-width: 100% !important;
          width: 100% !important;
        }
        
        /* Ensure sections take full width */
        section {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        
        /* Ensure inner containers also take full width */
        section > div {
          width: 100% !important;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Text alignment fixes */
        .max-w-7xl {
          max-width: 80rem !important;
        }
        
        .min-w-0 {
          min-width: 0 !important;
        }
        
        .leading-snug {
          line-height: 1.375 !important;
        }
        
        .leading-relaxed {
          line-height: 1.625 !important;
        }
        
        .leading-tight {
          line-height: 1.25 !important;
        }
        
        .flex-grow {
          flex-grow: 1 !important;
        }
        
        /* Ensure text doesn't overflow */
        .text-balance {
          text-wrap: balance !important;
        }
        
        /* Improve mobile text alignment */
        @media (max-width: 640px) {
          .text-sm {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          
          .text-xs {
            font-size: 0.75rem !important;
            line-height: 1rem !important;
          }
          
          h1, h2, h3, h4 {
            text-align: center !important;
          }
          
          .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .gap-20 {
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;