import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Chuk = () => {
  const [scrollAnimations, setScrollAnimations] = useState({});
  const [sectionAnimations, setSectionAnimations] = useState({});
  const sectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const sections = [

    {
      id: 'fdp',
      title: '5-Day Faculty Development Programme (FDP)',
      content: [
        "High Performance Computing (HPC) plays an important role in both scientific advancement and economic competitiveness of a nation - making production of scientific and industrial solutions faster, less expensive, and of higher quality. HPC is a key component in many applications including designing of vehicles, aeroplanes, discovery of drugs, discovery and extraction of new energy sources like oil and natural gas, weather forecasting and many more. The supercomputing systems and facilities of C-DAC are used to solve computationally challenging problems in several areas of practical significance.",
        "C-DAC Bengaluru, under the aegis of Ministry of Electronics & Information Technology (MeitY), Govt. of India has established a Centre for HPC Upskilling and Knowledge-sharing (C-HUK) to enable the candidates belonging to SC-ST and Women categories with the knowledge and proficiency in the areas of HPC, AI, Embedded and Cyber Security as part of the National Supercomputing Mission (NSM).",
        "The Centre is committed to create the capabilities through 6-months Capacity Building programmes (CBP) and 5-days Faculty Development Programmes (FDPs) for candidates belonging to SC, ST, and Women category from various universities and institutions across the country. The CBP and FDP shall be conducted in Bengaluru and North East in offline mode.",
        "The objective of the FDP is to enhance and upgrade the knowledge and skills of the faculty members by creating awareness about HPC and related technologies and provide induction training. The selected members will gain the knowledge in the areas of HPC with applications in AI, Embedded and Cyber Security."
      ],
      features: [
        "A total of 300 faculty members in a maximum 15 FDPs will be trained in a duration of 24 months.",
        "Faculty members must be from SC, ST and Women Category.",
        "Women faculty members can be from any category.",
        "Each FDP will have a minimum of 20 faculty members.",
        "Hands-on based training with C-DAC's PARAM Supercomputing Facility.",
        "Registration kit and study material will be provided.",
        "No registration or training fee is charged.",
        "Boarding, Lodging and Travel expenses is provided."
      ],
      eligibility: [
        "Faculty members belonging to SC, ST and Women categories who are working in Graduate, Post Graduate, Degree, Diploma and Engineering colleges with a qualified degree in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation from various universities /colleges / institutions across the country."
      ],
      icon: '👨‍🏫'
    },
    {
      id: 'blp',
      title: 'Blended Learning Programme (BLP)',
      content: [
        "BLP provides highly immersive learning combined with hands-on experience through eLabs. The program supports both B2C and B2B model. Many educational institutions have BLP as part of their learning/training resources. Blended Learning model plays a pivotal role in 'student-centric' learning journey, where learners could seamlessly steer the 'what', 'when' and 'where' of learning.",
        "Blended Learning Program uses a unique pedagogical approach that takes the learner through various levels of learning in an industry-like environment using self-driven learning, practice with eLabs, and assessment. BLP provides culmination of eLearning, eLabs and practice sessions with simulations and case studies for an immersive learning. Blended learning program is designed to reinforce concepts at each stage to enhance retention, ability to apply concepts and hence skills.",
        "The BLP objective is to help young people to enhance and upgrade their knowledge and abilities so they may become competitive. The programme helps spread awareness of HPC and parallel programming. With in-depth knowledge of big data analytics, cyber security threats, Build an understanding of embedded programming."
      ],
      features: [
        "Immersive learning – online modules accessible anytime, anywhere.",
        "Regular assessment to track your progress.",
        "Hands on Labs – eLabs for hands on Lab experience.",
        "Certificate Program – on completion of course."
      ],
      eligibility: [
        "New employees going through on-board training in HPC",
        "Second and third year engineering students studying electronics/computer science engineering or related fields.",
        "Software engineers, working professionals who are keen to work on HPC for application development / system administration.",
        "Hobbyists who would want to understand Parallel programming for HPC application"
      ],
      icon: '💻'
    },
    {
      id: 'mtp',
      title: 'AICTE Master Trainer Programme',
      content: [
        "The National Supercomputing Mission (NSM) is Government of India's initiative for building capacity and capability in the area of High Performance Computing (HPC) in the country and is being implemented by Centre for Development of Advanced Computing (C-DAC). Generation of HPC aware manpower has been one of the key deliverables of NSM-HRD mission. Various training initiatives related to HPC involving short-term, medium-term and formal education programs have been conducted, since the mission was started.",
        "All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education, under Department of Higher Education, Ministry of Education, and Government of India. AICTE is involved in planning and coordinated development of a technical education system throughout India and promotion of qualitative improvements of such education and its planned quantitative growth.",
        "Considering the need for knowledge of HPC for faculties, Centre for Development of Advanced Computing (C-DAC) proposes a master trainer program providing a unique opportunity to train faculties, and contribute to the advancement of education in alignment with global advancement. This initiative aims to enhance the outreach of HPC education to the grassroots level, ensuring broader accessibility and engagement with a diverse audience."
      ],
      objectives: [
        "In-depth Understanding of HPC Concepts: Ensure participants have a comprehensive understanding of the fundamental concepts, principles, and theories behind high-performance computing.",
        "Technical Proficiency: Develop participants' technical skills in designing, implementing, and optimizing high-performance computing systems and applications.",
        "Advanced Programming and Parallel Computing: Provide advanced training in parallel programming techniques and tools essential for exploiting the full potential of HPC systems.",
        "Optimization Techniques: Teach optimization strategies and methodologies to enhance the efficiency and performance of algorithms and applications on HPC platforms.",
        "Performance Monitoring and Analysis: Provide expertise in tools and techniques for monitoring and analyzing the performance of HPC applications and systems.",
        "Scalability and Efficiency: Focus on strategies for designing scalable algorithms and architectures that can efficiently utilize the resources of large-scale HPC systems.",
        "Best Practices and Case Studies: Share best practices and real-world case studies to illustrate successful implementations of HPC in various domains, fostering a practical understanding.",
        "Communication and Teaching Skills: Develop effective communication and teaching skills so that participants can transfer their knowledge to diverse audiences, including researchers, developers, and students.",
        "Awareness of Emerging Trends: Keep participants updated on the latest trends, technologies, and innovations in the field of high-performance computing."
      ],
      icon: '👨‍🔬'
    },
    {
      id: 'experiential',
      title: 'Experiential Learning Programme',
      content: [
        "High Performance Computing (HPC) plays a critical role in driving scientific discovery, innovation, and industrial competitiveness. From designing next-generation vehicles and predicting weather patterns to accelerating drug discovery and energy exploration, HPC enables faster, more cost-effective, and higher-quality solutions.",
        "The Centre for Development of Advanced Computing (C-DAC), India's premier R&D organization for advanced computing, invites faculty members to participate in an intensive Experiential Learning on HPC, Artificial Intelligence (AI), and Quantum Computing. The program aims to create a cadre of certified master trainers who can lead and disseminate cutting-edge knowledge across academic institutions in India.",
        "C-DAC Bengaluru, under the aegis of Ministry of Electronics & Information Technology (MeitY), Govt. of India has established a Centre for HPC Upskilling and Knowledge-sharing (C-HUK) to enable the candidates belonging to SC-ST and Women categories with the knowledge and proficiency in the areas of HPC, AI, Quantum and Cyber Security as part of the National Supercomputing Mission (NSM). The Centre is committed to create the capabilities through 6-months Advanced Certification course (ACC), 5-days Faculty Development Programmes (FDPs), 4 months Practicum – Gain practical HPC experience and 4 month On Job Training – Industry based work experience for candidates belonging to SC, ST, EWS, Women category from various AICTE universities and institutions across the country."
      ],
      objectives: [
        "Develop a deep understanding of HPC concepts, architectures, and principles.",
        "Enhance technical proficiency in designing, implementing, and optimizing HPC systems and applications.",
        "Provide advanced training in parallel programming, performance optimization, and scalability techniques.",
        "Foster expertise in performance monitoring, analysis, and troubleshooting of HPC workloads.",
        "Share best practices and real-world case studies to bridge theory with practical applications.",
        "Keep participants informed on emerging trends and innovations within HPC, AI, and Quantum Computing domains."
      ],
      features: [
        "Duration - 4 weeks (Online: 1 week, Offline: 3 weeks)",
        "Offline Residential Program",
        "No registration or Training fees",
        "Personalized mentorship and feedback throughout the course.",
        "Certification through Exam",
        "Access to Param Cluster for Hands-On"
      ],
      courseFormat: [
        "Pre-requisite Phase (Online): Refresher course covering essential foundations: Basic Computer Architecture, Linux Fundamentals, C Programming. Includes assignments and interactive discussions",
        "HPC Offline Course (2 Weeks): Intensive 10-day program featuring: In-depth parallel programming topics, Hands-on assignments, Regular evaluations, Practical sessions",
        "Capstone Project (1 Week): Apply learned concepts to real-world HPC challenges through a comprehensive project",
        "Certification: Final evaluation and assessment"
      ],
      syllabus: [
        "Advanced Computer Architectures",
        "Parallel Program: Design and Paradigms",
        "Open MP and MPI",
        "GPU Programming",
        "AI and ML",
        "Emerging trends in Parallel Computing",
        "Intro to Quantum Computing",
        "Theory + Lab Sessions + HPC Visit"
      ],
      eligibility: [
        "Faculty members belonging to SC, ST, EWS and Women categories who are working in Graduate, Post Graduate, Degree and Engineering colleges with a qualified degree in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation from various AICTE approved universities /colleges / institutions across the country.",
        "MTech and PhD scholar / pursuing"
      ],
      dates: [
        { label: "Course Commencement", value: "June 30, 2025" },
        { label: "Last Date of Nominations", value: "June 16, 2025" },
        { label: "Confirmation & Intimation", value: "June 20, 2025" },
        { label: "Training Period", value: "June 30 – July 25, 2025" },
        { label: "Venue", value: "C-DAC Electronic City, Bangalore" }
      ],
      benefits: [
        "Comprehensive Learning Experience: Enrolling in the Experiential Learning Program offers faculty a unique opportunity to gain cutting-edge knowledge and hands-on experience in high-performance computing, AI, and quantum technologies. Participants will develop advanced skills in parallel programming, system optimization, and performance analysis, empowering them to lead training and research initiatives at their institutions.",
        "Enhanced Teaching Capabilities: The program enhances teaching capabilities with expert guidance, enabling effective knowledge transfer to students and peers. Certified trainers gain recognition from C-DAC and AICTE, opening doors for collaboration and career advancement.",
        "National Impact: Ultimately, it equips educators to contribute significantly to India's technological growth and innovation ecosystem."
      ],
      icon: '🧪'
    }
  ];

  // Intersection Observer for animations
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

          const sectionId = entry.target.dataset.sectionId;
          if (sectionId) {
            setSectionAnimations(prev => ({
              ...prev,
              [sectionId]: true
            }));
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      contentRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToSectionRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  const addToContentRefs = (el, sectionId) => {
    if (el && !contentRefs.current.some(ref => ref === el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          ref={(el) => addToSectionRefs(el, 0)}
          id="header-section"
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${scrollAnimations['header-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <span className="text-4xl">⚡</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            C-HUK: Centre for HPC Upskilling & Knowledge-sharing
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering underrepresented groups with High Performance Computing skills through inclusive training programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* C-HUK Overview - Need to add this */}
        <div
          ref={(el) => addToSectionRefs(el, 1)}
          id="overview-section"
          className={`mb-16 transition-all duration-1000 ${scrollAnimations['overview-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-3">🏛️</div>
              <h2 className="text-3xl font-bold text-slate-800">Centre for HPC Upskilling & Knowledge-sharing (C-HUK)</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                C-HUK, established by C-DAC Bengaluru under the Human Resource Development (HRD) initiative of the National Supercomputing Mission (NSM) and the Ministry of Electronics & Information Technology (MeitY), Government of India, focuses on inclusive skill development in High Performance Computing (HPC) and allied emerging technologies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Targeting candidates from SC, ST, Women, and EWS categories, C-HUK offers expert-led training in HPC, Artificial Intelligence (AI), Embedded Systems, and Cyber Security. These initiatives aim to build a skilled, diverse, and inclusive tech workforce.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The Centre offers a 6-month Advanced Certificate Course in HPC and 5-day Faculty Development Programmes (FDPs) to strengthen capabilities. These programs are conducted in Bengaluru and the North Eastern region in collaboration with C-DAC's Centre in North East (CINE).
              </p>
              <p className="text-slate-600 leading-relaxed">
                To maximize reach and flexibility, C-HUK delivers a Blended Learning Programme (BLP) via the IEEE BLP Platform, enabling learners worldwide to access high-quality content in HPC and related domains.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By enhancing awareness and providing tailored opportunities, the project empowers candidates from underrepresented groups with vital technical skills in HPC and emerging areas. Most programs are conducted at C-DAC Bengaluru, with select sessions in the North East.
              </p>
              <p className="text-slate-600 leading-relaxed">
                C-HUK is instrumental in nurturing an inclusive, future-ready HPC ecosystem, contributing to India's broader vision of digital empowerment, technological innovation, and national growth.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Navigation */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-2xl mb-2">{section.icon}</div>
                <h4 className="font-semibold text-slate-800">{section.title}</h4>
              </a>
            ))}
          </div>
        </div>

        {/* Programs Sections */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div
              key={section.id}
              ref={(el) => addToContentRefs(el, section.id)}
              data-section-id={section.id}
              id={section.id}
              className={`scroll-mt-24 transition-all duration-1000 ${sectionAnimations[section.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${sectionIndex * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 md:px-8 py-6 border-b border-slate-200">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{section.icon}</div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{section.title}</h2>
                      {section.subtitle && (
                        <p className="text-blue-600 font-medium mt-1">{section.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Content */}
                  <div className="space-y-4 mb-8">
                    {section.content.map((para, idx) => (
                      <p key={idx} className="text-slate-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Objectives */}
                  {section.objectives && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        Objectives
                      </h3>
                      <ul className="space-y-3">
                        {section.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-slate-600">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Salient Features */}
                  {(section.features || section.topics) && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {section.features ? 'Salient Features' : 'Major Topics Covered'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(section.features || section.topics).map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mr-3 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Eligibility Criteria */}
                  {section.eligibility && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-2">
                        {section.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Important Notes */}
                  {section.note && (
                    <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Note:</h4>
                      <p className="text-yellow-700">{section.note}</p>
                      {section.importantNote && (
                        <div className="mt-3 pt-3 border-t border-yellow-300">
                          <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                          <p className="text-yellow-700">{section.importantNote}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Course Format */}
                  {section.courseFormat && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Course Format</h3>
                      <div className="space-y-3">
                        {section.courseFormat.map((format, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-sm font-bold mr-3 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-slate-600">{format}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Syllabus */}
                  {section.syllabus && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Syllabus</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.syllabus.map((topic, idx) => (
                          <div key={idx} className="bg-slate-50 p-3 rounded-lg">
                            <span className="text-slate-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dates */}
                  {section.dates && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Important Dates</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.dates.map((date, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                            <div className="text-sm text-blue-600 font-medium">{date.label}</div>
                            <div className="text-lg font-semibold text-slate-800">{date.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  {section.benefits && (
                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Benefits of Course</h3>
                      <div className="space-y-4">
                        {section.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span className="text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://c-huk.cdacb.in/#hero"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                      >
                        learn more
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          ref={(el) => addToSectionRefs(el, sections.length + 1)}
          id="cta-section"
          className={`mt-16 transition-all duration-1000 ${scrollAnimations['cta-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join C-HUK Programs?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Transform your career with cutting-edge HPC skills. Join thousands of professionals trained by C-DAC's experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                        href="https://c-huk.cdacb.in/index.html"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                      >
                        Contact 
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Animation for section headers */
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Print styles */
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Chuk;