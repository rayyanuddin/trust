// ISEACompleteComponent.jsx
import React, { useEffect, useState, useRef } from 'react';
import {
  Shield,
  Users,
  GraduationCap,
  Lightbulb,
  Brain,
  Globe,
  BookOpen,
  FileText,
  Video,
  Newspaper,
  Trophy,
  Award,
  Briefcase,
  Cpu,
  Code,
  TestTube,
  Users2,
  School,
  TrendingUp,
  Mail,
  ExternalLink,
  ChevronRight,
  Calendar,
  MapPin,
  Target,
  BarChart3,
  Network,
  Flag,
  Clock,
  Home,
  Phone,
  Map,
  Mailbox,
  User,
  Star,
  University,
  BriefcaseIcon,
  Heart,
  ShieldCheck,
  Sparkles,
  Tv,
  Radio,
  Cloud,
  Layers,
  FileCode,
  BookMarked,
  Mic,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Database,
  Server,
  CheckCircle,
  Zap,
  Target as TargetIcon,
  Globe as GlobeIcon,
  Award as AwardIcon,
  Lock,
  Eye,
  Key,
  Smartphone,
  Server as ServerIcon,
  Network as NetworkIcon,
  Rocket,
  RefreshCw,
  Camera,
  ChevronLeft,
  X
} from 'lucide-react';

// Import project coordinator photo
import coordinatorPhoto from "../assets/photo3.jpg"; // Make sure this path is correct
// Import ministry logo image
import ministryLogo from "../assets/ministry.webp"; // Make sure this path is correct

// Import ALL 8 images from assets
import welcomeImage from "../assets/WhatsApp Image 2025-02-12 at 8.20.15 PM.jpeg";
import bengaluruImage from "../assets/img  2.jpeg";
import infoSecurityImage from "../assets/3 (2).jpeg";
import postalEventImage from "../assets/Postal Event 3.jpeg";
import dataBreachImage from "../assets/Misbah sir.jpg";
import darkWebImage from "../assets/img2.jpeg";
import paceGroupImage from "../assets/img1.jpeg";
import hosurImage from "../assets/12.jpeg";

// ================== IMAGE SLIDER COMPONENT ==================
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add auto-slide functionality
  useEffect(() => {
    if (isModalOpen) return; // Pause auto-slide when modal is open
    
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex, isModalOpen]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Main Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
        {/* Image Container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openModal(image)}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = `https://via.placeholder.com/1200x600/1e40af/ffffff?text=${encodeURIComponent(image.title)}`;
                }}
              />
              
              {/* Image Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                  {image.location && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{image.location}</span>
                      {image.date && <span>• {image.date}</span>}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    {image.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Image Grid Preview */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-blue-500 scale-105'
                : 'border-transparent hover:border-blue-300'
            }`}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/200x100/1e40af/ffffff?text=${index + 1}`;
              }}
            />
            <div className={`absolute inset-0 ${
              index === currentIndex ? 'bg-blue-500/30' : 'bg-black/30'
            }`} />
          </button>
        ))}
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/1200x800/1e40af/ffffff?text=${encodeURIComponent(selectedImage.title)}`;
              }}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="mt-2">{selectedImage.description}</p>
              {selectedImage.location && (
                <div className="flex items-center gap-2 mt-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedImage.location}</span>
                  {selectedImage.date && <span>• {selectedImage.date}</span>}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedImage.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/50 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Isea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Trigger auto-refresh on initial page load
    if (isInitialLoad) {
      handleAutoRefresh();
      setIsInitialLoad(false);
    }
  }, []);

  const handleAutoRefresh = () => {
    setIsRefreshing(true);
    
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    // Simulate refresh with a timeout
    setTimeout(() => {
      setIsRefreshing(false);
      
      // Trigger re-animation
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    }, 600);
  };

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    // Simulate refresh with a timeout
    setTimeout(() => {
      setIsRefreshing(false);
      
      // Trigger re-animation
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    }, 500);
  };

  // ================== FROM WORD DOCUMENT ==================
  const projectDetails = {
    name: "Information Security Education and Awareness (ISEA) -- Phase III",
    tagline: "Secure Yourself, Secure the Nation",
    impactStatement: "A national initiative by MeitY to build a safe, secure, and trusted cyberspace.",
    initiative: "Ministry of Electronics and Information Technology (MeitY), Govt. of India",
    phase: "Phase III",
    startDate: "October 2023",
    duration: "5 Years",
    vision: "Building a cyber-aware and cyber-resilient India",
    website: "https://www.isea.gov.in",
    app: "https://awareness.isea.app",
    coordinator: {
      name: "Dr. Mohammed Misbahuddin",
      role: "Scientist 'F' & Group Head -- TRUST STU",
      organization: "C-DAC, Bengaluru",
      category: "executive",
      image: coordinatorPhoto, // Using the imported photo
      fullRole: "Project Co-Ordinator (ISEA Awareness)"
    }
  };

  const nationalImpact = {
    beneficiaries: "12+ crore citizens",
    model: "Hub-and-Spoke Implementation Model",
    partners: "50 premier institutions (IITs, NITs, CDACs, NIELITs, Technical Universities)"
  };

  const beneficiaries = [
    "School & college students, faculty",
    "Women, elderly, differently abled",
    "Govt. officials & LEAs",
    "MSMEs, NGOs",
    "Non-IT users & general public"
  ];

  // ================== CDAC BANGALORE DETAILS ==================
  const cdacBangalore = {
    role: "Regional Coordination Centre (RCC) under ISEA Phase III",
    coverage: ["Karnataka", "Tamil Nadu", "Kerala", "Puducherry", "Lakshadweep"],
    collaboration: "With C-DAC Hyderabad (PMU) & NCC",
    mission: "Grassroots-level cyber awareness & capacity building",
    activities: [
      "National cyber awareness programs",
      "Workshops & webinars",
      "Master Trainer programs (Cyber Defenders)",
      "Training for Govt. officials & educators",
      "Awareness Week campaigns"
    ],
    contact: {
      email: "isearccblr@cdac.in",
      portal: "https://www.staysafeonline.in"
    }
  };

  // ================== FROM PDF - CORE CONTENT ==================

  // Project Aim (Page 1)
  const projectAim = "Development of human resources for safe, trusted and secure cyberspace";

  // ISEA Virtual Platform (IVP) - Page 2
  const iseaVirtualPlatform = {
    name: "ISEA Virtual Platform (IVP)",
    description: "Common Infrastructure & Shared Resources on cloud, linked through a common interface",
    purpose: "Supports all four verticals with shared resources"
  };

  // VERTICAL 1: Professional Training - Detailed from Page 3
  const professionalTraining = {
    target: "CISOs, Dy. CISOs, Associate Team of CISOs/Aspirants of Government and MSMEs",
    domains: {
      core: [
        "Systems, Network & Communication Security",
        "Information Security and Security Engineering Core Competencies",
        "Asset & Access Control Management",
        "Information Security Audit and Assessment",
        "Operations Security"
      ],
      essential: [
        "Business and Strategic Management"
      ],
      specialized: [
        "Software Development Governance",
        "Risk and Compliance",
        "Telecom Security",
        "Internet of Things (IoT) / Industrial IoT Security",
        "Cyber Security for BFSI Sector",
        "Sector Specific OT / ICS Security",
        "Cyber Security & Forensics (LEAs and Judiciary)"
      ]
    },
    components: [
      "Syllabus (Domain specific)",
      "Content",
      "Hands-on labs & exercises, case-studies, etc",
      "Trainings",
      "Certification & Re-certification"
    ]
  };

  // VERTICAL 2: Student Innovation - Detailed from Page 4
  const studentInnovation = {
    activities: [
      { name: "Bootcamps", level: "Institutional", icon: <School size={20} /> },
      { name: "Hackathons", level: "Cluster", icon: <Code size={20} /> },
      { name: "Innovation Challenges", level: "National", icon: <Trophy size={20} /> }
    ],
    mentorshipStructure: {
      chairProfessor: "ISEA Chair Professor",
      mentors: "Mentors from Academia & Industry",
      collaboration: "Collaboration and Partnership with Industry, Start-ups, Academia and Government Data Security Council of India (DSCI)"
    },
    problemStatementFlow: [
      "Students → Bootcamps (Institutional) → Hackathons (Cluster) → Innovation Challenge (National)",
      "Connect with larger Innovation Ecosystem (MSH / Start-up India / Industry)"
    ]
  };

  // VERTICAL 3: Research & Education - Detailed from Page 5
  const researchEducation = {
    thematicAreas: [
      "Computer & Network Security",
      "Mobile Device Security",
      "Systems & Software Security",
      "Hardware Security",
      "Security in Futuristic Technologies (AI/ML, AR/VR, etc.)",
      "Cryptography",
      "Security in Distributed Wireless Networks (IoT/CPS, 5G)",
      "Cyber Forensics",
      "Cybersecurity (Operations, Services, Governance) & Privacy",
      "Fintech Security (Incl. Blockchain)"
    ],
    capacityBuilding: [
      "Generation of Research Manpower",
      "Domain-specific labs",
      "Faculty development",
      "Paper Publications",
      "Workshops & Conferences",
      "Model Syllabus",
      "Introduction of New M.Tech",
      "Retrofitting of core/electives in thematic areas at M. Tech/B. Tech level",
      "Multi-disciplinary education",
      "MOOC and Non-formal modular courses",
      "Internships"
    ],
    institutions: "50 institutions"
  };

  // VERTICAL 4: Mass Awareness - Detailed from Page 6
  const massAwareness = {
    target: "Cyber Aware Digital Naagrik",
    goal: "Reinforce Cyber Hygiene, Cybersecurity and Privacy at National level",

    // HIGHLIGHTED SECTION - LAST POINTS FROM PDF
    proliferationMethods: [
      { name: "Awareness Workshops and Awareness Weeks", icon: <Users2 size={18} /> },
      { name: "Doordarshan/AIR/Community Radio programs", icon: <Tv size={18} /> },
      { name: "Mass outreach through Social media platforms", icon: <Globe size={18} /> },
      { name: "Leveraging print / electronic media & Digishala (educational TV channel)", icon: <Newspaper size={18} /> }
    ],

    multilingualContent: [
      { name: "Handbooks", icon: <BookOpen size={18} /> },
      { name: "Posters", icon: <FileText size={18} /> },
      { name: "Videos", icon: <Video size={18} /> },
      { name: "Cartoon storyboards", icon: <FileText size={18} /> },
      { name: "Newsletters", icon: <Newspaper size={18} /> }
    ],

    roleBasedPathways: [
      "Cyber Kid", "Cyber Cadet", "Cyber Girl", "Cyber Yuva",
      "Cyber Teacher", "Cyber Women", "Cyber Parent",
      "Varisht Naagrik", "Cyber Adhikari", "Cyber Pratindhi",
      "Cyber Executives", "Cyber Entrepreneur", "Cyber Defender", "Cyber Trainer"
    ],

    // HIGHLIGHTED - User Competitions
    competitions: "User based competitions/quizzes throughout the year"
  };

  // Contact Details - From last page
  const contactDetails = {
    emails: ["pmu-isea@cdac.in", "isea@cdac.in"],
    websites: ["https://isea.gov.in", "https://awareness.isea.app"],
    socialMedia: {
      facebook: "https://facebook.com/iseagov",
      twitter: "https://twitter.com/iseagov",
      linkedin: "https://linkedin.com/company/isea",
      instagram: "https://instagram.com/iseagov",
      youtube: "https://youtube.com/iseagov"
    }
  };

  // ================== IMAGE SLIDER DATA - ALL 8 IMAGES ==================
  const iseaImages = [
    {
      url: welcomeImage,
      title: "Welcome to ISEA Program",
      description: "COURSE OF INFORMATIONAL TECHNOLOGY - Building cybersecurity skills for the nation",
      tags: ["Welcome", "Education", "IT Course"]
    },
    {
      url: bengaluruImage,
      title: "Cyber Hygiene Workshop - Bengaluru",
      description: "Cyber Hygiene - Practices to Achieve Cyber Safety. Keeping yourself and your family safe in a tech-driven world",
      tags: ["Workshop", "Bengaluru", "Cyber Hygiene"],
      location: "Architecture Block, Cs Dept Rd, Basavanagudi, Bengaluru",
      date: "16/10/2025"
    },
    {
      url: infoSecurityImage,
      title: "Information Security Education & Awareness",
      description: "An Initiative of Ministry of Electronics & Information Technology (MeitY) - Human Resource Development for Safe, Trusted and Secure Cyber Space",
      tags: ["ISEA", "MeitY", "Government Initiative"]
    },
    {
      url: postalEventImage,
      title: "ISEA Program Timeline",
      description: "Long-term commitment to cybersecurity education from 2021 to 2262",
      tags: ["Timeline", "Planning", "Long-term"]
    },
    {
      url: dataBreachImage,
      title: "Data Security Statistics",
      description: "Data Breach vs Data Exposure - Understanding cybersecurity threats: 144,757,076 data exposures vs 1,001 data breaches",
      tags: ["Data Security", "Statistics", "Awareness"]
    },
    {
      url: darkWebImage,
      title: "Surface/Deep/Dark Web Overview",
      description: "Understanding the different layers of the internet for better cybersecurity - 96% Surface Web vs 4% Dark Web",
      tags: ["Dark Web", "Internet Layers", "Security"],
      location: "Badamanavarathekaval, Karnataka",
      date: "17/10/2025"
    },
    {
      url: paceGroupImage,
      title: "PACE Group Outreach",
      description: "Cybersecurity awareness program in rural communities",
      tags: ["Community", "Outreach", "Rural"],
      location: "Kairangale Village, Ullal, Karnataka",
      date: "18/10/2025"
    },
    {
      url: hosurImage,
      title: "College Awareness Program",
      description: "Cybersecurity education program at educational institutions",
      tags: ["College", "Students", "Education"],
      location: "MGR COLLEGE, Kumudepalli, Hosur, Tamil Nadu",
      date: "29/01/2025"
    }
  ];

  // Cybersecurity icons for visual appeal
  const cyberIcons = [
    <Shield key="shield" className="h-6 w-6 text-blue-500" />,
    <Lock key="lock" className="h-6 w-6 text-green-500" />,
    <Key key="key" className="h-6 w-6 text-yellow-500" />,
    <Eye key="eye" className="h-6 w-6 text-purple-500" />,
    <Smartphone key="phone" className="h-6 w-6 text-red-500" />,
    <ServerIcon key="server" className="h-6 w-6 text-indigo-500" />,
    <NetworkIcon key="network" className="h-6 w-6 text-pink-500" />,
    <Cpu key="cpu" className="h-6 w-6 text-teal-500" />
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Refresh Button */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={handleManualRefresh}
          disabled={isRefreshing}
          className={`flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isRefreshing ? 'opacity-80 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          <RefreshCw className={`text-lg ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="font-semibold">
            {isRefreshing ? 'Refreshing...' : 'Refresh Content'}
          </span>
        </button>
      </div>

      {/* Welcome Animation Overlay - Only shows on initial load */}
      {isInitialLoad && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-8">
              <Rocket className="text-8xl text-white animate-bounce mb-4 mx-auto" />
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              Welcome to ISEA Program
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Loading Information Security Education & Awareness details...
            </p>
            <div className="w-64 h-2 bg-blue-800 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-[progress_1.5s_ease-in-out]"></div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header with Ministry Branding */}
      <div className={`bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Ministry Header - UPDATED WITH IMAGE */}
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <div className="flex items-center gap-4">
              {/* Ministry Logo Image */}
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <img 
                  src={ministryLogo} 
                  alt="Ministry of Electronics and Information Technology, Government of India"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    // Fallback in case image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="p-2 bg-white/20 rounded-lg">
                        <div class="text-center">
                          <div class="font-bold text-lg">MINISTRY OF</div>
                          <div class="font-bold text-xl">ELECTRONICS & IT</div>
                          <div class="text-sm">Govt. of India</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">An initiative of MeitY</p>
            </div>
          </div>

          {/* Mobile-only Ministry text for better visibility */}
          <div className="md:hidden text-center mb-6">
            <h2 className="text-lg font-bold">MINISTRY OF</h2>
            <h3 className="text-xl font-bold">ELECTRONICS AND INFORMATION TECHNOLOGY</h3>
            <p className="text-blue-200 text-sm">Government of India</p>
          </div>

          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  INFORMATION SECURITY EDUCATION & AWARENESS (ISEA)
                </h1>
                <p className="text-xl text-blue-200">{projectDetails.tagline}</p>
              </div>

              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <p className="text-xl mb-4">
                  <span className="font-bold">Project Aim:</span> {projectAim}
                </p>

                {/* Program Status Banner */}
                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="animate-pulse">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-green-300">
                        ✅ PROGRAM ACTIVE & ONGOING - PHASE III
                      </p>
                      <p className="text-sm text-green-200">
                        Since {projectDetails.startDate} • Duration: {projectDetails.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Target: {nationalImpact.beneficiaries}</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4" />
                    <span>{nationalImpact.partners.split('(')[0]}</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>ISEA Virtual Platform (IVP)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation of ISEA with Coordinator Photo */}
            <div className={`lg:w-1/3 mt-8 lg:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ISEA Phase III</h3>
                  <p className="text-blue-200">Building Cyber-Resilient India</p>
                </div>

                {/* Cybersecurity Icons Grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {cyberIcons.map((icon, index) => (
                    <div key={index} className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Coordinator Card WITH PHOTO */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Project Coordinator
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                      {projectDetails.coordinator.image ? (
                        <img
                          src={projectDetails.coordinator.image}
                          alt={projectDetails.coordinator.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/64/3b82f6/ffffff?text=MM";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                          <User className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold">{projectDetails.coordinator.name}</p>
                      <p className="text-blue-200 text-sm">{projectDetails.coordinator.role}</p>
                      <p className="text-gray-300 text-xs">{projectDetails.coordinator.organization}</p>
                    </div>
                  </div>

                  {/* Additional Coordinator Details */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm font-medium mb-1">Role in ISEA</p>
                    <p className="text-blue-100 text-sm">{projectDetails.coordinator.fullRole}</p>

                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Category</p>
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {projectDetails.coordinator.category.toUpperCase()}
                      </span>
                
                      <div>
                        <h3 className="relative font-bold mt-5 text-lg mb-4">Official Tagline</h3>
                        <p className="text-blue-300 text-xl font-bold">
                          {projectDetails.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Project Overview Section with Vision */}
        <div className="mb-16">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Vision Card */}
            <div className={`bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <TargetIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Project Vision</h3>
              </div>
              <p className="text-gray-700">{projectDetails.vision}</p>
              <div className="mt-6 p-3 bg-white rounded-lg">
                <p className="text-sm text-gray-600">Initiative of:</p>
                <p className="font-bold text-blue-700">{projectDetails.initiative}</p>
              </div>
            </div>

            {/* Impact Card */}
            <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">National Impact</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="font-medium">{nationalImpact.beneficiaries}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-green-600" />
                  <span>{nationalImpact.model}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {nationalImpact.partners}
                </div>
              </div>
            </div>

            {/* Beneficiaries Card */}
            <div className={`bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl shadow-lg p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <Users2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Who We Serve</h3>
              </div>
              <ul className="space-y-2">
                {beneficiaries.map((beneficiary, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{beneficiary}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
{/* ISEA Virtual Platform Section */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Cloud className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  ISEA Virtual Platform (IVP)
                </h2>
                <p className="text-gray-600">{iseaVirtualPlatform.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Layers className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">Common Infrastructure</h3>
                <p className="text-sm text-gray-600 mt-2">Shared resources on cloud</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Server className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">Unified Interface</h3>
                <p className="text-sm text-gray-600 mt-2">Single platform for all verticals</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Database className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">Shared Resources</h3>
                <p className="text-sm text-gray-600 mt-2">Labs, content, tools</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <Network className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">Hub & Spoke</h3>
                <p className="text-sm text-gray-600 mt-2">Connects 50+ institutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Slider - ALL 8 IMAGES */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '550ms' }}>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  ISEA in Action
                </h2>
                <p className="text-gray-600">Visual journey through our programs and activities across India</p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Camera className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">{iseaImages.length} Photos</span>
              </div>
            </div>
            
            <ImageSlider images={iseaImages} />
            
          
          </div>
        </div>
          {/* Project Timeline Section */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="bg-blue-100 inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                        <Calendar className="h-4 w-4" />
                        <span className="font-bold">Start Date</span>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                      <p className="text-xl font-bold">{projectDetails.startDate}</p>
                      <p className="text-gray-600">Phase III Commencement</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="bg-green-100 inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                        <Clock className="h-4 w-4" />
                        <span className="font-bold">Duration</span>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                      <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                      <p className="text-xl font-bold">{projectDetails.duration}</p>
                      <p className="text-gray-600">Full Project Cycle</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="bg-purple-100 inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                        <Target className="h-4 w-4" />
                        <span className="font-bold">Current Phase</span>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white animate-pulse"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                      <p className="text-xl font-bold">{projectDetails.phase}</p>
                      <p className="text-gray-600">Active Implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Four Verticals Section - COMPLETE */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Four Key Verticals of ISEA
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Comprehensive approach to cybersecurity education and awareness
          </p>

          {/* Vertical 1: Professional Training - COMPLETE */}
          <div className="mb-12">
            <div className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <GraduationCap className="h-10 w-10 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    1. Generating Highly Skilled & Certified Cyber Security Professionals
                  </h3>
                  <p className="text-gray-600">Target: {professionalTraining.target}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Core Domains */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">5 Core Domains</h4>
                  <ul className="space-y-3">
                    {professionalTraining.domains.core.map((domain, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{domain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Essential Domain */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Essential Domain</h4>
                  <ul className="space-y-3">
                    {professionalTraining.domains.essential.map((domain, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5">
                          <ShieldCheck className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-700">{domain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized Domains */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">7 Specialized Domains</h4>
                  <ul className="space-y-3">
                    {professionalTraining.domains.specialized.map((domain, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5">
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                        <span className="text-gray-700">{domain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Program Components */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Program Components</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {professionalTraining.components.map((component, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <FileCode className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">{component.split('(')[0]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical 2: Student Innovation - COMPLETE */}
          <div className="mb-12">
            <div className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-green-100 rounded-xl">
                  <Lightbulb className="h-10 w-10 text-green-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    2. Grooming students towards products & solutions development
                  </h3>
                  <p className="text-gray-600">Fostering innovation and entrepreneurship</p>
                </div>
              </div>

              {/* Activities */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Ideation & Innovation Activities</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {studentInnovation.activities.map((activity, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                      {activity.icon}
                      <h5 className="font-bold text-gray-900 mt-3">{activity.name}</h5>
                      <p className="text-sm text-gray-600">{activity.level} Level</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statement Flow */}
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Problem Statement Identification Flow</h4>
                <div className="space-y-4">
                  {studentInnovation.problemStatementFlow.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <ChevronRight className="h-5 w-5 text-green-600" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Mentorship Structure */}
                <div className="mt-6 pt-6 border-t border-green-200">
                  <h5 className="font-bold text-gray-900 mb-3">Mentorship & Guidance</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AwardIcon className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{studentInnovation.mentorshipStructure.chairProfessor}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users2 className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">{studentInnovation.mentorshipStructure.mentors}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-700">
                  <span className="font-bold">Collaboration:</span> {studentInnovation.mentorshipStructure.collaboration}
                </p>
              </div>
            </div>
          </div>

          {/* Vertical 3: Research & Education - COMPLETE */}
          <div className="mb-12">
            <div className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Brain className="h-10 w-10 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    3. Strengthen Research & Education in advanced areas
                  </h3>
                  <p className="text-gray-600">Through {researchEducation.institutions}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Thematic Areas */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">10 Thematic Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {researchEducation.thematicAreas.map((area, index) => (
                      <div key={index} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capacity Building */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Capacity Building Activities</h4>
                  <div className="space-y-2">
                    {researchEducation.capacityBuilding.slice(0, 6).map((activity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-700">
                      Plus {researchEducation.capacityBuilding.length - 6} more activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ VERTICAL 4: MASS AWARENESS - HIGHLIGHTED ============ */}
          <div className="mb-16">
            <div className={`bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-2xl p-8 border-l-8 border-red-500 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} style={{ transitionDelay: '1000ms' }}>
              {/* Header with special highlight */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-red-100 rounded-xl">
                  <GlobeIcon className="h-10 w-10 text-red-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    4. Cyber Aware Digital Naagrik
                  </h3>
                  <p className="text-red-600 font-medium">(Mass Awareness)</p>
                  <p className="text-gray-600 mt-1">Goal: {massAwareness.goal}</p>
                </div>
              </div>

              {/* Proliferation Methods - HIGHLIGHTED */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-500" />
                  Proliferation of Mass Awareness through:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {massAwareness.proliferationMethods.map((method, index) => (
                    <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-red-100">
                      <div className="flex items-center gap-3 mb-3">
                        {method.icon}
                        <h5 className="font-bold text-gray-900">{method.name.split('/')[0]}</h5>
                      </div>
                      <p className="text-sm text-gray-600">{method.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multilingual Content */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Multilingual Awareness Content</h4>
                <div className="flex flex-wrap gap-4">
                  {massAwareness.multilingualContent.map((content, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      {content.icon}
                      <span>{content.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role-based Pathways */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Role-based Awareness Pathways</h4>
                <div className="flex flex-wrap gap-2">
                  {massAwareness.roleBasedPathways.map((role, index) => (
                    <span key={index} className="bg-white border border-red-200 text-red-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* ============ HIGHLIGHTED LAST POINT ============ */}
              <div className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="h-8 w-8" />
                  <h4 className="text-xl font-bold">User Engagement Activities</h4>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/30 rounded-xl">
                      <TargetIcon className="h-10 w-10" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-1">Ongoing Engagement</h5>
                      <p className="text-white/90">
                        {massAwareness.competitions}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="font-bold">Monthly Quizzes</span>
                      </div>
                      <p className="text-sm">Cybersecurity knowledge tests</p>
                    </div>

                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="font-bold">Annual Competitions</span>
                      </div>
                      <p className="text-sm">National level cybersecurity challenges</p>
                    </div>

                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="font-bold">Regular Challenges</span>
                      </div>
                      <p className="text-sm">Theme-based security competitions</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-lg font-bold">
                    🎯 <span className="underline">Continuous Engagement</span> • <span className="underline">Year-round Activities</span> • <span className="underline">National Participation</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CDAC Bangalore Section with Coordinator Photo Again */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <MapPin className="h-8 w-8 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Regional Coordination Centre – CDAC Bangalore
                    </h2>
                    <p className="text-gray-600">{cdacBangalore.role}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Coordinated by: {projectDetails.coordinator.name}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      Coverage Regions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cdacBangalore.coverage.map((region, index) => (
                        <span key={index} className="bg-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm border border-green-200">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Network className="h-5 w-5 text-green-600" />
                      Collaboration
                    </h3>
                    <p className="text-gray-700">{cdacBangalore.collaboration}</p>
                    <p className="text-sm text-gray-600 mt-2">{cdacBangalore.mission}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Regional Contact</h3>
                <div className="space-y-4">
                  <a href={`mailto:${cdacBangalore.contact.email}`}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium">
                    <Mail className="h-5 w-5" />
                    {cdacBangalore.contact.email}
                  </a>
                  <a href={cdacBangalore.contact.portal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium">
                    <ExternalLink className="h-5 w-5" />
                    StaySafeOnline Portal
                  </a>
                </div>
                <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Operated under the guidance of:</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200">
                      {projectDetails.coordinator.image ? (
                        <img
                          src={projectDetails.coordinator.image}
                          alt={projectDetails.coordinator.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/48/3b82f6/ffffff?text=MM";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{projectDetails.coordinator.name}</p>
                      <p className="text-sm text-gray-500">{projectDetails.coordinator.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">What We Do (Activities & Programs)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cdacBangalore.activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <ChevronRight className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">{activity}</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Grassroots implementation across South India
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1200ms' }}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">ACTIVE PROGRAM • JOIN NOW</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Join hands in creating a Cyber-Aware Generation
            </h2>
            <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
              Together we can build a safe, secure, and trusted cyberspace for India
            </p>
            <p className="text-lg font-bold text-green-300">
              Currently benefiting 12+ crore citizens nationwide
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={projectDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Globe className="h-5 w-5" />
              Visit ISEA Portal
            </a>
            <a
              href={cdacBangalore.contact.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Shield className="h-5 w-5" />
              StaySafeOnline Portal
            </a>
      
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center">
                <Mailbox className="h-8 w-8 mb-2" />
                <p>Email: {cdacBangalore.contact.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <Home className="h-8 w-8 mb-2" />
                <p>Ministry of Electronics and IT (MeitY)</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-8 w-8 mb-2" />
                <p>Target: {nationalImpact.beneficiaries}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social Media Section */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1300ms' }}>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Connect With ISEA</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Information */}
             

              {/* Official Websites */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Official Platforms</h3>
                <div className="space-y-4">
                  {contactDetails.websites.map((website, index) => (
                    <a key={index}
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium">
                      <ExternalLink className="h-5 w-5" />
                      {website.split('//')[1]}
                    </a>
                  ))}
                  <a href={cdacBangalore.contact.portal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium">
                    <ExternalLink className="h-5 w-5" />
                    StaySafeOnline Portal
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Social Media Presence</h3>
                <div className="flex gap-4">
                  <a href={contactDetails.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
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
      `}</style>
    </div>
  );
};

export default Isea;