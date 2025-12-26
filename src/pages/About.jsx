import { useState, useEffect } from "react";
import trust4 from "../assets/trust4.png";

// Import team member images
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";

// Team members data with imported images
const teamMembers = [
  {
    name: "Dr S D Sudarsan",
    role: "Executive Director",
    organization: "C-DAC, Bengaluru",
    category: "executive",
    image: photo1 // Use imported variable directly
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
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle image loading errors
  const handleImageError = (memberName) => {
    console.error(`Failed to load image for ${memberName}`);
    setImageErrors(prev => ({ ...prev, [memberName]: true }));
  };

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full mb-20 h-[60vh] md:h-[70vh]">
        <div
          className="absolute inset-0 w-screen h-[600px] md:h-[700px] lg:h-[750px] bg-cover bg-center left-1/2 -translate-x-1/2"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.9)), url(${trust4})`,
          }}
        />

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 transition-all duration-1000
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            About TRUST
          </h1>

          <p
            className={`text-gray-200 max-w-3xl text-lg md:text-xl mb-8 transition-all duration-1000 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Pioneering technological advancement and educational excellence
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Overview Section */}
        <section className="mb-12">
          <div className={`transition-all duration-1000 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
              Bridging the skill gap by introducing real-world problem solving in advanced technologies through innovative capacity building programs.
            </p>
          </div>
        </section>

        {/* Team Members Section */}
     
        {/* Programs Section */}
        <section className="mb-16">
          <div className={`transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Our Key Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* I-LABS */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-sky-700 mb-4">I-LABS</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Vision</h4>
                    <p className="text-slate-600">
                      Bridging the skill gap through real-world problem solving in advanced technologies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Goal</h4>
                    <p className="text-slate-600">
                      Provide hands-on learning in advanced technologies through real-world problems
                    </p>
                  </div>
                </div>
                {/* Visit Link for I-LABS */}
                <div className="mt-6 pt-4 border-t border-sky-200">
                  <a
                    href="/programs/i-labs"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-all duration-300 hover:underline group/link"
                  >
                    Learn more about I-LABS
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-sky-700 mb-4">Faculty Industrial Immersion Program (FIIP)</h3>
                <div className="space-y-3">
                  <p className="text-slate-600">
                    Equipping faculty members with practical experience in advanced technologies to enhance teaching quality
                  </p>
                  <div className="text-sm text-slate-500 bg-white/50 px-3 py-1 rounded-lg inline-block">
                    4-6 week dedicated course with hands-on training
                  </div>
                </div>
              
                <div className="mt-28 pt-4 border-t border-blue-200">
                  <a
                    href="/programs/fiip"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-all duration-300 hover:underline group/link"
                  >
                    Explore FIIP Program
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Overview */}
        <section className="mb-16">
          <div className={`transition-all duration-1000 delay-900 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Capacity Building Activities
            </h2>
            
            {/* Funded Activities Subtitle */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-sky-700 mb-2">Funded Capacity Building Activities</h3>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Government and industry-supported initiatives for skill development and technological advancement
              </p>
            </div>
            
            {/* Funded Activities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {[
                "MEPZ – C-DAC Skill Development Center",
                "Outreach Activities & Events (TPO Meet, SCI Conference, Roadtrips)",
                "IDoT (Internet of Things)",
                "PKI IoT Security",
                "Experiential Center",
                "ACTS Management Systems – LMS Development",
                "ISEA Phase-III",
                "FutureSkills Prime",
                "SC-ST IoT BLP Upskilling",
                "Work-based Learning",
                "C-HUK Platform"
              ].map((activity, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
                >
                  <div className="flex items-start">
                    <div className="bg-sky-100 text-sky-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-slate-800 font-medium group-hover:text-sky-700 transition-colors">{activity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Initiatives */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Initiatives</h3>
              
              <div className="space-y-8">
                {/* Skill Development Category */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Skill Development Programs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "MEPZ Skill Center", desc: "Industry-aligned training" },
                      { name: "FutureSkills Prime", desc: "Digital skills certification" },
                      { name: "Work-based Learning", desc: "On-the-job training programs" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-medium text-slate-800">{item.name}</h5>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* IoT & Tech Category */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    IoT & Technology Initiatives
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "IDoT", desc: "Internet of Things projects" },
                      { name: "PKI IoT", desc: "Security-enabled IoT solutions" },
                      { name: "SC-ST IoT BLP", desc: "Upskilling for SC/ST communities" },
                      { name: "Experiential Center", desc: "Hands-on learning labs" },
                      { name: "C-HUK Platform", desc: "Online learning portal" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-medium text-slate-800">{item.name}</h5>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-10">
              <a 
                href="/activities" 
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                View All Funded Activities
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
           <section className="mb-16">
          <div className={`transition-all duration-1000 delay-600 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Our Team
            </h2>
            
            {/* Executive Team */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-sky-700 mb-6 pb-2 border-b border-sky-200">
                Executive Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.category === "executive")
                  .map((member, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 p-6"
                    >
                      <div className="text-center">
                        {/* Profile Image with Fallback */}
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                          {!imageErrors[member.name] ? (
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(member.name)}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-100">
                              <span className="text-3xl font-bold text-sky-600">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                        <p className="text-sky-600 font-medium mb-2">{member.role}</p>
                        <p className="text-slate-500 text-sm">{member.organization}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Project Review Committee */}
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-6 pb-2 border-b border-sky-200">
                Project Review Committee
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter(member => member.category === "committee")
                  .map((member, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 p-6"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Profile Image with Fallback */}
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center flex-shrink-0">
                          {!imageErrors[member.name] ? (
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(member.name)}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50">
                              <span className="text-xl font-bold text-sky-600">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                          <p className="text-sky-600 font-medium mb-2">{member.role}</p>
                          <p className="text-slate-500 text-sm">{member.organization}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className={`transition-all duration-1000 delay-1100 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We partner with educational institutions for engineering projects, lab establishment, and corporate trainings
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a 
                href="mailto:bd-blr@cdac.in"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Contact for Partnerships
              </a>
              <a 
                href="https://c-huk.cdacb.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-sky-600 border border-sky-300 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Visit C-HUK Website
              </a>
            </div>

            {/* Additional Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-600">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Industrial Visits</h4>
                <a href="mailto:ivblr@cdac.in" className="text-sky-600 hover:text-sky-700">ivblr@cdac.in</a>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Cyber Security Events</h4>
                <a href="mailto:isearccblr@cdac.in" className="text-sky-600 hover:text-sky-700">isearccblr@cdac.in</a>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">PG-Diploma Courses</h4>
                <a href="mailto:actsb@cdac.in" className="text-sky-600 hover:text-sky-700">actsb@cdac.in</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;