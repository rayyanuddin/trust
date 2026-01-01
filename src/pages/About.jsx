import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import trust4 from "../assets/trust4.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import { Link } from "react-router-dom";
const teamMembers = [
  {
    name: "Dr S D Sudarsan",
    role: "Executive Director",
    organization: "C-DAC, Bengaluru",
    category: "executive",
    image: photo1
  },
  {
    name: "Shri S A Kumar",
    role: "Advisor",
    organization: "C-DAC, Bengaluru",
    category: "executive",
    image: photo2
  },
  {
    name: "Dr Mohammed Misbahuddin",
    role: "Scientist 'F'",
    organization: "C-DAC, Bengaluru",
    category: "executive",
    image: photo3
  },
  {
    name: "Dr Sanjay Adiwal",
    role: "Scientist 'E'",
    organization: "C-DAC, Bengaluru",
    category: "executive",
    image: photo4
  },
  {
    name: "Dr. Amudha J",
    role: "Professor",
    organization: "Amrita Vishwa Vidyapeetham, Bengaluru",
    category: "committee",
    image: photo5
  },
  {
    name: "Shri Ashish Kuvelkar",
    role: "Scientist 'G'",
    organization: "C-DAC Pune",
    category: "committee",
    image: photo6
  },
  {
    name: "Shri Naveen Kumar",
    role: "Scientist E/Additional Director",
    organization: "MeitY",
    category: "committee",
    image: photo7
  },
  {
    name: "Dr Divya Vetriveeran",
    role: "Assistant Professor",
    organization: "CHRIST University, Bengaluru",
    category: "committee",
    image: photo8
  },
  {
    name: "Dr. Rajesh Kondareddy",
    role: "Assistant Professor",
    organization: "Central Institute of Technology Kokrajhar, Assam",
    category: "committee",
    image: photo9
  }
];

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-900/90 z-10" />

        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${trust4})`,
            animation: 'parallax 20s linear infinite'
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 7}s infinite ease-in-out`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >


            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                About TRUST
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-white/90 font-light">
                Technological Research & Upskilling Society
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-200 max-w-3xl text-xl md:text-2xl mb-8 font-light leading-relaxed"
            >
              Pioneering technological advancement and shaping the future of education through innovation
            </motion.p>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

        {/* Overview Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Our Vision & Mission
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become a global leader in technological education and skill development, creating a future-ready workforce equipped with cutting-edge capabilities.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-sky-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Bridging the skill gap by introducing real-world problem solving in advanced technologies through innovative capacity building programs and industry partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Key Programs Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full mb-6">
              <span className="text-sky-600 font-semibold">Core Initiatives</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Flagship Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transforming education through innovative, hands-on learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* I-LABS Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-4">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      <span className="text-sky-600 font-semibold">Innovation Lab</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">I-LABS</h3>
                  </div>
                  <div className="text-5xl">🔬</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-sky-100">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Vision
                    </h4>
                    <p className="text-slate-600">
                      Bridging the skill gap through real-world problem solving in advanced technologies
                    </p>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-sky-100">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Goal
                    </h4>
                    <p className="text-slate-600">
                      Provide hands-on learning in advanced technologies through real-world problems
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-sky-100">
                  <Link
                    to="/labs"
                    onClick={() => {
                      // Smooth scroll to top after navigation
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group/link"
                  >
                    Discover I-LABS
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* FIIP Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 -translate-x-16" />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-blue-600 font-semibold">Faculty Development</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Faculty Industrial Immersion Program</h3>
                  </div>
                  <div className="text-5xl">👨‍🏫</div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Equipping faculty members with practical experience in advanced technologies to enhance teaching quality and bridge industry-academia gaps.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <span className="mr-2">📚</span>
                      4-6 Week Intensive
                    </span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                      <span className="mr-2">🛠️</span>
                      Hands-on Training
                    </span>
                    <span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                      <span className="mr-2">🏢</span>
                      Industry Exposure
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-100">
                  <Link
                    to="/fiip"
                    onClick={() => {
                      // Smooth scroll to top after navigation
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 group/link"
                  >
                    Explore FIIP
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activities Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          >
            {[
              { name: "MEPZ – C-DAC Skill Development Center", category: "funded", icon: "🏭" },
              { name: "Outreach Activities & Events", category: "funded", icon: "🎪" },
              { name: "IDoT (Internet of Things)", category: "iot", icon: "📱" },
              { name: "PKI IoT Security", category: "iot", icon: "🔒" },
              { name: "Experiential Center", category: "skill", icon: "🔬" },
              { name: "ACTS Management Systems", category: "skill", icon: "💻" },
              { name: "ISEA Phase-III", category: "funded", icon: "🛡️" },
              { name: "FutureSkills Prime", category: "skill", icon: "🚀" },
              { name: "SC-ST IoT BLP Upskilling", category: "iot", icon: "🌐" },
              { name: "Work-based Learning", category: "skill", icon: "💼" },
              { name: "C-HUK Platform", category: "skill", icon: "🎓" }
            ]
              .filter(item => activeTab === "all" || item.category === activeTab)
              .map((activity, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${hoveredCard === index
                    ? "bg-gradient-to-br from-sky-50 to-blue-50 shadow-2xl"
                    : "bg-white shadow-lg hover:shadow-xl"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl p-3 rounded-xl transition-all duration-500 ${hoveredCard === index
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                      }`}>
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold mb-2 transition-colors duration-300 ${hoveredCard === index ? "text-sky-700" : "text-slate-800"
                        }`}>
                        {activity.name}
                      </h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${activity.category === "funded"
                        ? "bg-blue-100 text-blue-700"
                        : activity.category === "iot"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                        }`}>
                        {activity.category === "funded" ? "Funded" :
                          activity.category === "iot" ? "IoT & Tech" : "Skill Development"}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-500 ${hoveredCard === index ? "translate-y-0" : "translate-y-full"
                    }`} />
                </motion.div>
              ))}
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full mb-6">
              <span className="text-sky-600 font-semibold">Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experts and visionaries driving innovation in technology education
            </p>
          </div>

          {/* Executive Team */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Executive Leadership</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers
                .filter(member => member.category === "executive")
                .map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100"
                  >
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 to-blue-600" />

                    <div className="p-6">
                      <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                          {member.name}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full mb-3">
                          <span className="text-sky-600 font-semibold">{member.role}</span>
                        </div>
                        <p className="text-slate-500 text-sm">{member.organization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Committee Team */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Project Review Committee</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers
                .filter(member => member.category === "committee")
                .map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100"
                  >
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {member.name}
                      </h4>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-3">
                        <span className="text-blue-600 font-medium text-sm">{member.role}</span>
                      </div>
                      <p className="text-slate-500 text-sm">{member.organization}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 md:p-12 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full translate-y-32 -translate-x-32" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build the Future Together
              </h2>
              <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
                Partner with us to revolutionize technology education and create impactful learning experiences
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
               
                <a
                  href="https://c-huk.cdacb.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit C-HUK Platform
                </a>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Industrial Visits",
                    email: "ivblr@cdac.in",
                    icon: "🏭",
                    color: "from-sky-500 to-blue-600"
                  },
                  {
                    title: "Cyber Security Events",
                    email: "isearccblr@cdac.in",
                    icon: "🛡️",
                    color: "from-blue-500 to-indigo-600"
                  },
                  {
                    title: "PG Certificate Programme",
                    email: "actsb@cdac.in",
                    icon: "🎓",
                    color: "from-indigo-500 to-purple-600"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{contact.icon}</div>
                    <h4 className="font-semibold text-white mb-2">{contact.title}</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${contact.color} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {contact.email}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes parallax {
          0%, 100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-20px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;