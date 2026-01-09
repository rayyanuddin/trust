import React, { useState, useEffect, useRef } from 'react';

const PgDiploma = () => {
    const [scrollAnimations, setScrollAnimations] = useState({});
    const [programAnimations, setProgramAnimations] = useState({});
    const sectionRefs = useRef([]);
    const programRefs = useRef([]);

    const programs = [
        {
            id: 1,
            title: "PG Certificate Programme in Advanced Computing (PGCP-AC)",
            description: `PGCP-AC is the most popular PG Certificate Programme of C-DAC. The course is targeted towards Engineering Graduates and MCA/MSc who wish to venture into the domain of advanced computing. The course aims to groom the students to enable them to work on current technology scenarios as well as prepare them to keep pace with the changing face of technology and the requirements of the growing IT industry. The entire course syllabus, courseware, teaching methodology and the course delivery have been derived from the rich research and development background of C-DAC. Running successfully for 25 years, the PGCP-AC course has produced thousands of professionals, who are well positioned in the industry today.`,
            coreModules: "Java, Spring, WPT, React, C#, ASP.Net, C++, DBMS, Cloud",
            courseModules: [
                "Concepts of Operating System & Software Development Methodologies",
                "C++ Programming",
                "Database Technologies",
                "Object Oriented Programming with Java",
                "Algorithms and Data Structures (Using Java)",
                "Web Programming Technologies",
                "Web-based Java Programming",
                "Microsoft .Net Technologies",
                "Aptitude and Effective Communication",
                "Project"
            ],
            highlights: [
                "Well established courses with excellent placement records",
                "24-week full-time courses with 900 hours' theory + lab + project + 300 hours self study",
                "6-8 hours per day theory + lab sessions on 6 days a week in most centres",
                "Continuous lab and internal assessments during the course",
                "Centralised course-end theory exams across all centres",
                "Courses designed and developed in consultation with the domain experts in C-DAC, academia and ICT industry",
                "Expert faculty from C-DAC and ICT industry with widespread domain knowledge",
                "Tutorials, hands-on and projects relevant to the standards of the ICT industry",
                "Special training in aptitude, effective communication and interview skills",
                "Extensive placement orientation and region-wise common campus placements"
            ],
            // PDF in /public/pdfs/ folder
            downloadLink: "/pdfs/PDF_PGCP_AC_page-0001.pdf",
            color: "sky",
            icon: "💻"
        },
        {
            id: 2,
            title: "PG Certificate Programme in Embedded Systems and Design (PGCP-ESD)",
            description: `Realizing the growth of embedded systems in day-to-day life and the need for trained man power in this promising area, C-DAC launched PGCP-ESD for engineers in Computers, IT and Electronics. Embedded Systems is a unique field, where engineers need to have sound knowledge in hardware and software design. Keeping this aspect in view, C-DAC has designed this course giving equal emphasis to hardware and software, enabling engineers to face challenges in the design and development of state-of-the-art embedded systems. The course aims to groom the students to enable them to work on embedded technology scenarios as well as prepare them to keep pace with the changing face of technology and the requirements of the growing Electronics & IT industry. The course curriculum has been designed keeping in view the latest trends in embedded systems as well as contemporary and futuristic human resource requirements of the ICT industry. The curriculum includes a module on Internet of Things (IoT), specifically focusing on IoT architectures, applications, standards and protocols.`,
            coreModules: "Embedded C, RTOS, STM32, ARM, SPI, UART, CAN, Firmware",
            courseModules: [
                "Embedded C Programming",
                "Data Structures and Algorithms",
                "Microcontroller Programming and Interfacing",
                "Embedded Operating Systems",
                "Embedded Device Driver",
                "Real-time Operating Systems",
                "Internet of Things (IoT)",
                "Aptitude & Effective Communication",
                "Project"
            ],
            highlights: [
                "Well established courses with excellent placement records",
                "24-week full-time courses with 900 hours' theory + lab + project + 300 hours self study",
                "6-8 hours per day theory + lab sessions on 6 days a week in most centres",
                "Continuous lab and internal assessments during the course",
                "Centralised course-end theory exams across all centres",
                "Courses designed and developed in consultation with the domain experts in C-DAC, academia and ICT industry",
                "Expert faculty from C-DAC and ICT industry with widespread domain knowledge",
                "Tutorials, hands-on and projects relevant to the standards of the ICT industry",
                "Special training in aptitude, effective communication and interview skills",
                "Extensive placement orientation and region-wise common campus placements"
            ],
            // PDF in /public/pdfs/ folder
            downloadLink: "/pdfs/PDF_PGCP_ESD_page-0001.pdf",
            color: "blue",
            icon: "🔌"
        },
        {
            id: 3,
            title: "PG Certificate Programme in Big Data Analytics (PGCP-BDA)",
            description: `PGCP-BDA will educate the aspirants who want to make an impact in the corporate and academic world in the domain of big data analytics as data scientist and researcher, big data leads/administrators/managers, business analysts and data visualization specialists. The course is also suitable for those who are already working in analytics to enhance their theoretical and conceptual knowledge as well as those with analytical aptitude and would like to start career in big data analytics in different business sectors. The students will be able to work with big data platform, analyze various big data analysis techniques for useful business applications, design efficient algorithms for mining the data from large volumes, analyze the HADOOP and Map Reduce technologies associated with big data analytics, and explore big data applications.`,
            coreModules: "ML, R, Hadoop, PySpark, Tableau, Python, Java, Cloud, DBMS",
            courseModules: [
                "Linux Programming and Cloud Computing",
                "Data Collection and DBMS (Principles, Tools & Platforms)",
                "Python and R Programming",
                "Java Programming",
                "Big Data Technologies",
                "Advanced Analytics using Statistics",
                "Practical Machine Learning",
                "Data Visualization - Analysis and Reporting",
                "Aptitude & Effective Communication",
                "Project"
            ],
            highlights: [
                "Well established courses with excellent placement records",
                "24-week full-time courses with 900 hours' theory + lab + project + 300 hours self study",
                "6-8 hours per day theory + lab sessions on 6 days a week in most centres",
                "Continuous lab and internal assessments during the course",
                "Centralised course-end theory exams across all centres",
                "Courses designed and developed in consultation with the domain experts in C-DAC, academia and ICT industry",
                "Expert faculty from C-DAC and ICT industry with widespread domain knowledge",
                "Tutorials, hands-on and projects relevant to the standards of the ICT industry",
                "Special training in aptitude, effective communication and interview skills",
                "Extensive placement orientation and region-wise common campus placements"
            ],
            focusAreas: [
                "To explore the fundamental concepts of big data analytics with in-depth knowledge and understanding of the big data analytics domain",
                "To understand the various search methods and visualization techniques and to use various techniques for mining data stream",
                "To analyze and solve problems conceptually and practically from diverse industries, such as government manufacturing, retail, education, banking/ finance, healthcare and pharmaceutical",
                "To undertake consulting and industrial projects with significant data analysis component for better understanding of the theoretical concepts from statistics, economics and building future solutions data analytics to make an impact in the technological advancement",
                "To use advanced analytical tools/ decision-making tools/ operation research techniques to analyze the complex problems and get ready to develop such new techniques for the future",
                "To learn Cloud Computing, accessing resources and services needed to perform functions with dynamically changing needs"
            ],
        
            downloadLink: "/pdfs/PDF_PGCP_BDA_page-0001.pdf",
            color: "purple",
            icon: "📊"
        },
        {
            id: 4,
            title: "PG Certificate Programme in IT Infrastructure, Systems and Security (PGCP-ITISS)",
            description: `PGCP-ITISS is targeted towards grooming students in the arena of human-computer interaction and cyber and network security. The objective of this course is to enable the students to understand the concepts of network security and learn the techniques of detecting the attacks and securing a network from internal and external attacks. At the end of the course, the student will be able to recognise a variety of generic security threats and vulnerabilities, understand the principles and practices of cryptographic techniques, identify and analyze particular security problems for a given application and apply appropriate security techniques to solve the security issues.`,
            coreModules: "Network Administration, IT Infrastructure & Security, Python, DevOps, Cloud, OS",
            courseModules: [
                "Fundamental of Computer Networks",
                "Programming Concepts",
                "Concepts of Operating System and Administration",
                "Network Defense and Countermeasures (NDC)",
                "Compliance Audit",
                "Security Concepts",
                "Cyber Forensics",
                "Public Key Infrastructure",
                "IT Infrastructure Management & DevOps",
                "Aptitude & Effective Communication",
                "Project"
            ],
            highlights: [
                "Well established courses with excellent placement records",
                "24-week full-time courses with 900 hours' theory + lab + project + 300 hours self study",
                "6-8 hours per day theory + lab sessions on 6 days a week in most centres",
                "Continuous lab and internal assessments during the course",
                "Centralised course-end theory exams across all centres",
                "Courses designed and developed in consultation with the domain experts in C-DAC, academia and ICT industry",
                "Expert faculty from C-DAC and ICT industry with widespread domain knowledge",
                "Tutorials, hands-on and projects relevant to the standards of the ICT industry",
                "Special training in aptitude, effective communication and interview skills",
                "Extensive placement orientation and region-wise common campus placements"
            ],
            // PDF in /public/pdfs/ folder
            downloadLink: "/pdfs/PDF_PGCP_ITISS_page-0001.pdf",
            color: "green",
            icon: "🔒"
        }
    ];

    const registerUrl = "https://cdac.in/index.aspx?id=studentslogin";

    // Intersection Observer for section animations
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

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    // Intersection Observer for program cards
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const programId = entry.target.dataset.programId;
                    if (programId) {
                        setProgramAnimations(prev => ({
                            ...prev,
                            [programId]: true
                        }));
                    }
                }
            });
        }, observerOptions);

        programRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            programRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToSectionRefs = (el, index) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current[index] = el;
        }
    };

    const addToProgramRefs = (el, programId) => {
        if (el && !programRefs.current.some(ref => ref === el)) {
            programRefs.current.push(el);
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
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        PG  Certificate Programmes
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Advanced certificate programs designed to build industry-relevant skills and prepare students for successful careers in technology
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Programs List */}
                <div className="space-y-12 md:space-y-16">
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            ref={(el) => addToProgramRefs(el, program.id)}
                            data-program-id={program.id}
                            className={`transition-all duration-1000 ${programAnimations[program.id]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{
                                transitionDelay: `${index * 200}ms`
                            }}
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8">
                                        {/* Content Section */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center">
                                                    <div className={`text-3xl mr-3 transition-transform duration-300 hover:scale-110 ${programAnimations[program.id] ? 'animate-bounce-once' : ''}`}>
                                                        {program.icon}
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                                                        {program.title}
                                                    </h2>
                                                </div>
                                                <span className={`hidden lg:inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${program.color}-100 text-${program.color}-800 transition-all duration-300 hover:scale-105`}>
                                                    PG Certificate Programme
                                                </span>
                                            </div>

                                            <div className="lg:hidden mb-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${program.color}-100 text-${program.color}-800`}>
                                                    PG Certificate Programme
                                                </span>
                                            </div>

                                            {/* Core Modules */}
                                            <div className="mb-4">
                                                <div className={`inline-block px-3 py-1 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 text-sm font-semibold rounded-lg`}>
                                                    Core Modules: {program.coreModules}
                                                </div>
                                            </div>

                                            {/* Program Description */}
                                            <div className="mb-6">
                                                <p
                                                    className="text-slate-600 leading-relaxed transition-all duration-700 delay-300"
                                                    style={{
                                                        opacity: programAnimations[program.id] ? 1 : 0,
                                                        transform: programAnimations[program.id] ? 'translateX(0)' : 'translateX(-20px)',
                                                        transitionDelay: `${index * 200 + 300}ms`
                                                    }}
                                                >
                                                    {program.description}
                                                </p>
                                            </div>

                                            {/* Course Highlights - Fixed for ITISS program */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold text-slate-800 mb-3">Course Highlights:</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {program.highlights.slice(0, 6).map((highlight, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-start transition-all duration-700"
                                                            style={{
                                                                opacity: programAnimations[program.id] ? 1 : 0,
                                                                transform: programAnimations[program.id] ? 'translateX(0)' : 'translateX(-20px)',
                                                                transitionDelay: `${index * 200 + 400 + idx * 50}ms`
                                                            }}
                                                        >
                                                            <svg
                                                                className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${program.id === 1 ? "text-sky-500" :
                                                                        program.id === 2 ? "text-blue-500" :
                                                                            program.id === 3 ? "text-purple-500" :
                                                                                "text-green-500"
                                                                    }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                            <span className="text-slate-600 text-sm">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Course Modules - Fixed for ITISS program */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold text-slate-800 mb-3">Course Modules:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {program.courseModules.map((module, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${program.id === 1 ? "bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100" :
                                                                    program.id === 2 ? "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100" :
                                                                        program.id === 3 ? "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100" :
                                                                            "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                                                                }`}
                                                            style={{
                                                                opacity: programAnimations[program.id] ? 1 : 0,
                                                                transform: programAnimations[program.id] ? 'translateY(0)' : 'translateY(10px)',
                                                                transitionDelay: `${index * 200 + 500 + idx * 50}ms`
                                                            }}
                                                        >
                                                            {module}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Focus Areas for BDA Program */}
                                            {program.focusAreas && (
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Course Focus Areas:</h4>
                                                    <ul className="space-y-2">
                                                        {program.focusAreas.map((area, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start transition-all duration-700"
                                                                style={{
                                                                    opacity: programAnimations[program.id] ? 1 : 0,
                                                                    transform: programAnimations[program.id] ? 'translateX(0)' : 'translateX(-20px)',
                                                                    transitionDelay: `${index * 200 + 600 + idx * 100}ms`
                                                                }}
                                                            >
                                                                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                </svg>
                                                                <span className="text-slate-600">{area}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Button Section */}
                                        <div
                                            className="lg:w-1/3 xl:w-1/4 transition-all duration-1000 delay-300"
                                            style={{
                                                opacity: programAnimations[program.id] ? 1 : 0,
                                                transform: programAnimations[program.id] ? 'translateX(0)' : 'translateX(20px)'
                                            }}
                                        >
                                            <div className={`bg-gradient-to-br from-${program.color}-50 to-white rounded-xl p-5 border border-${program.color}-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}>
                                                <h3 className="font-semibold text-slate-800 mb-4 text-lg">Course Resources</h3>

                                                <div className="space-y-4">
                                                    {/* PDF link that opens in new tab for viewing */}
                                                    <a
                                                        href={program.downloadLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                                    >
                                                        <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                        </svg>
                                                        View Course Brochure (PDF)
                                                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                    </a>

                                                    <a
                                                        href={registerUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 group"
                                                    >
                                                        <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                                        </svg>
                                                        Register for this Course
                                                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                        </svg>
                                                    </a>

                                                    <div className="pt-4 border-t border-slate-200">
                                                        <p className="text-sm text-slate-500 text-center">
                                                            Need more details? <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Contact us</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Footer */}
                                <div
                                    className={`bg-gradient-to-r from-slate-50 to-${program.color}-50 px-6 md:px-8 py-4 border-t border-slate-200 transition-all duration-700`}
                                    style={{
                                        opacity: programAnimations[program.id] ? 1 : 0,
                                        transform: programAnimations[program.id] ? 'translateY(0)' : 'translateY(20px)',
                                        transitionDelay: `${index * 200 + 800}ms`
                                    }}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center group">
                                            <div className="bg-white p-1 rounded-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">Industry-aligned curriculum</span>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="bg-white p-1 rounded-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">24-week intensive program</span>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA - Centered */}
                <div
                    ref={(el) => addToSectionRefs(el, 4)}
                    id="cta-section"
                    className={`w-full mt-16 md:mt-20 transition-all duration-1000 ${scrollAnimations['cta-section'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl">
                            <div className="bg-white rounded-xl sm:rounded-2xl p-6 md:p-8 lg:p-10">
                                <div className="text-center mb-6 md:mb-8">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
                                        Ready to Start Your Journey?
                                    </h3>
                                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                                        Join thousands of successful professionals who have transformed their careers through C-DAC's PG Certificate Programmes.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                                    <a
                                        href={registerUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-sky-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group text-center"
                                    >
                                        <span className="text-base sm:text-lg">Apply Now</span>
                                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>

                                    <a
                                        href="/contact"
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center group text-center"
                                    >
                                        <span className="text-base sm:text-lg">Contact Us</span>
                                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                        </svg>
                                    </a>
                                </div>

                                <div className="mt-6 md:mt-8 text-center px-4">
                                    <p className="text-slate-500 text-sm sm:text-base">
                                        Have questions? <a href="/faq" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">Check our FAQ</a> or call us at <span className="font-semibold text-slate-700">+91 123 456 7890</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.5s ease-in-out;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Program card hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Staggered animation for list items */
        .stagger-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .stagger-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Text formatting */
        .text-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        
        .text-content p:last-child {
          margin-bottom: 0;
        }
      `}</style>
        </div>
    );
};

export default PgDiploma;