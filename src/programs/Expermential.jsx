import { useState, useEffect } from "react";
import { Cpu, Cloud, Users, Calendar, Target, Award, BookOpen, Globe, Zap, Clock, MapPin, GraduationCap } from "lucide-react";

const Expermential = () => {
  const [animate, setAnimate] = useState(false);
  const [activeBatch, setActiveBatch] = useState("batch1");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const programBatches = [
    {
      id: "batch1",
      title: "Batch 1",
      date: "October 27-30, 2025",
      duration: "4 Days",
      students: "190 Students",
      focus: "Parallel Programming & HPC",
      color: "from-blue-500 to-sky-500"
    },
    {
      id: "batch2",
      title: "Batch 2",
      date: "November 3-7, 2025",
      duration: "5 Days",
      students: "190 Students",
      focus: "Cloud & Grid Computing",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const technologies = [
    { name: "High Performance Computing", icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-blue-100 text-blue-600" },
    { name: "Cloud Computing", icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-sky-100 text-sky-600" },
    { name: "Grid Computing", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-green-100 text-green-600" },
    { name: "Parallel Programming", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-amber-100 text-amber-600" },
    { name: "Quantum Technology", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-purple-100 text-purple-600" },
    { name: "Embedded Systems", icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-red-100 text-red-600" },
    { name: "Internet of Things", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-emerald-100 text-emerald-600" },
  ];

  const programSchedule = [
    {
      day: "Day 1",
      title: "Foundations & Introduction",
      activities: [
        "Welcome & Program Orientation",
        "Overview of Emerging Technologies",
        "Interactive Session with Subject Experts",
        "Hands-on Lab Setup"
      ]
    },
    {
      day: "Day 2",
      title: "Supercomputer Facility Visit",
      activities: [
        "Visit to KP Office",
        "Supercomputer Demonstration",
        "HPC Infrastructure Overview",
        "Practical Applications Session"
      ]
    },
    {
      day: "Day 3",
      title: "Advanced Workshops",
      activities: [
        "Parallel Programming Workshop",
        "Cloud Computing Hands-on",
        "Project Problem Identification",
        "Team Formation"
      ]
    },
    {
      day: "Day 4",
      title: "Competition & Evaluation",
      activities: [
        "Technical Competitions",
        "Project Presentation",
        "Expert Feedback Session",
        "Certificate Distribution"
      ]
    }
  ];

  return (
    <div className="w-full mt-5 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-300 mr-3 sm:mr-4" />
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Experiential Learning
              </h1>
            </div>
            <p className="text-base xs:text-lg sm:text-xl text-blue-200 text-center max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
              Since 2022 | C-DAC Bangalore & VIT Bhopal Collaboration
            </p>
            <p className="text-center text-blue-300 mt-1 sm:mt-2 text-xs xs:text-sm sm:text-base px-2">
              Hands-on training in HPC, Embedded Systems, IoT, Quantum Technology & Cloud Computing
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Program Highlights */}
        <div className={`transition-all duration-1000 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Program Overview
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Program</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  ACTS C-DAC Bangalore has been conducting Experiential Learning programmes since 2022. 
                  This initiative strengthens project skills through expert interactions, hands-on training, 
                  and competitions that provide valuable insights for selecting suitable project problems.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-4 md:mt-0">
                <div className="flex items-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">380 Students</p>
                    <p className="text-slate-600 text-xs sm:text-sm">From VIT Bhopal across 7 days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">7 Days Total</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Two intensive batches</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">Project Focus</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Real-world problem solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Batches */}
        <div className={`transition-all duration-1000 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Program Batches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {programBatches.map((batch, index) => (
              <div 
                key={batch.id}
                className={`bg-gradient-to-br ${batch.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl ${
                  activeBatch === batch.id ? 'ring-2 sm:ring-4 ring-white/30' : ''
                }`}
                onClick={() => setActiveBatch(batch.id)}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <span className="text-sm sm:text-base font-semibold bg-white/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                      {batch.title}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm opacity-90">Duration</p>
                    <p className="font-bold text-sm sm:text-base">{batch.duration}</p>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{batch.date}</h3>
                <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm">{batch.focus}</p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                    <p className="text-xs sm:text-sm opacity-90">Students</p>
                    <p className="font-bold text-base sm:text-lg">{batch.students}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                    <p className="text-xs sm:text-sm opacity-90">Focus Area</p>
                    <p className="font-bold text-xs sm:text-sm">{batch.focus.split('&')[0].trim()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Covered */}
        <div className={`transition-all duration-1000 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Technologies Covered
          </h2>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${tech.color} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                  {tech.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-900 leading-tight line-clamp-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Schedule */}
        <div className={`transition-all duration-1000 delay-600 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Program Schedule
          </h2>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {programSchedule.map((day, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md border border-slate-100"
                >
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold rounded-full">
                      {day.day}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{day.title}</h3>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1 sm:mt-1.5 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="flex-1">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Special Highlight - Supercomputer Visit */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl p-4 sm:p-6 text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 sm:mr-4" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Supercomputer Facility Visit</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">Day 2 Highlight</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm sm:text-base">
                Students visit the KP office to receive a live demonstration of the Supercomputer Facility, 
                gaining valuable insights into high-performance computing infrastructure and applications.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className={`transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Program Benefits */}
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Learning Outcomes
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Expert Interaction",
                    description: "Direct interaction with subject matter experts and industry professionals",
                    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  },
                  {
                    title: "Hands-on Training",
                    description: "Practical experience with cutting-edge technologies and tools",
                    icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  },
                  {
                    title: "Project Identification",
                    description: "Guidance in selecting and formulating relevant project problems",
                    icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  },
                  {
                    title: "Competition Experience",
                    description: "Participation in technical competitions to showcase skills",
                    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-slate-100"
                  >
                    <div className="bg-blue-100 text-blue-600 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA & Information */}
            <div className="mt-6 lg:mt-0">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Program Details</h3>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">Program Dates</p>
                      <p className="text-slate-600 text-xs sm:text-sm">October 27-30 & November 3-7, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">Participants</p>
                      <p className="text-slate-600 text-xs sm:text-sm">380 VIT Bhopal Students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">Location</p>
                      <p className="text-slate-600 text-xs sm:text-sm">C-DAC Bangalore & KP Office</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">For Institutions</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    Interested in organizing similar Experiential Learning programs for your students? 
                    Contact us to discuss customized programs.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a 
                      href="mailto:bd-blr@cdac.in"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm"
                    >
                      Contact Program Team
                    </a>
                    <a 
                      href="/programs/experiential-learning"
                      className="bg-white text-indigo-600 border border-indigo-300 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition-all duration-300 hover:bg-indigo-50 text-xs sm:text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Highlight */}
        <div className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-800 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              C-DAC Bangalore & VIT Bhopal Partnership
            </h3>
            <p className="text-blue-200 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
              This collaboration bridges academic learning with industry expertise, providing students 
              with unparalleled exposure to emerging technologies and practical applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base md:text-lg font-bold">C-DAC Bangalore</p>
                  <p className="text-xs sm:text-sm text-blue-300">Technology Expertise Since 2022</p>
                </div>
              </div>
              <div className="text-xl sm:text-2xl text-blue-300 my-2 sm:my-0">×</div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base md:text-lg font-bold">VIT Bhopal</p>
                  <p className="text-xs sm:text-sm text-blue-300">380 Engaged Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expermential;