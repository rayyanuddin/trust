import { useState, useEffect } from "react";

const Events = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const eventsData = {
    conferences: [
      {
        id: 1,
        title: "SCI Conference",
        description: "Annual conference focusing on emerging technologies and industry-academia collaboration.",
        date: "Coming Soon",
        location: "Bangalore",
        type: "Conference",
        contact: "isearccblr@cdac.in"
      },
      {
        id: 2,
        title: "TPO Meet",
        description: "Training & Placement Officers meet to discuss industry requirements and skill development.",
        date: "Quarterly",
        location: "Bangalore",
        type: "Workshop",
        contact: "bd-blr@cdac.in"
      }
    ],
    
    roadshows: [
      {
        id: 1,
        title: "Technology Roadtrips",
        description: "Outreach programs visiting educational institutions across regions.",
        date: "Ongoing",
        location: "Multiple Cities",
        type: "Roadshow",
        contact: "bd-blr@cdac.in"
      }
    ],
    
    cybersecurityEvents: [
      {
        id: 1,
        title: "Cybersecurity Workshops",
        description: "Hands-on workshops focusing on cybersecurity challenges and solutions.",
        date: "Monthly",
        location: "C-DAC Bangalore",
        type: "Workshop",
        contact: "isearccblr@cdac.in"
      },
      {
        id: 2,
        title: "ISEA-RCC Events",
        description: "Information Security Education & Awareness - Regional Coordination Centre events.",
        date: "Regularly Scheduled",
        location: "Bangalore",
        type: "Training",
        contact: "isearccblr@cdac.in"
      }
    ],
    
    capacityBuilding: [
      {
        id: 1,
        title: "I-LABS Program Launch",
        description: "Launch events for I-LABS program at partner institutions.",
        date: "As per Institution Schedule",
        location: "Partner Colleges",
        type: "Launch Event",
        contact: "bd-blr@cdac.in"
      },
      {
        id: 2,
        title: "FIIP (Faculty Industrial Immersion Program)",
        description: "4-6 week dedicated courses for faculty members in advanced technologies.",
        date: "Quarterly Batches",
        location: "C-DAC Bangalore",
        type: "Training Program",
        contact: "bd-blr@cdac.in"
      }
    ]
  };

  return (
    <div className="w-full mt-10 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              TRUST Events & Activities
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Connecting academia with industry through conferences, workshops, and outreach programs
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`transition-all duration-1000 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Featured Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SCI Conference 2025",
                description: "Annual conference on emerging technologies and industry collaboration",
                date: "TBA",
                type: "Conference",
                color: "bg-gradient-to-r from-blue-500 to-sky-500"
              },
              {
                title: "TPO Meet",
                description: "Training & Placement Officers networking and discussion forum",
                date: "Quarterly",
                type: "Workshop",
                color: "bg-gradient-to-r from-indigo-500 to-purple-500"
              },
              {
                title: "Cybersecurity Workshop",
                description: "Hands-on training on latest cybersecurity threats and solutions",
                date: "Monthly",
                type: "Training",
                color: "bg-gradient-to-r from-green-500 to-teal-500"
              }
            ].map((event, index) => (
              <div 
                key={index} 
                className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                  ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className={`h-3 ${event.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-slate-700 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                  <p className="text-slate-600 mb-4">{event.description}</p>
                    <a
            href="/programs/i-labs"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-all duration-300 hover:underline group/link"
          >
            Learn more 
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
            ))}
          </div>
        </div>
      </div>

      {/* Event Categories */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Event Categories
            </h2>
            
            <div className="space-y-8">
              {/* Conferences */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Conferences</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">SCI Conference</h4>
                    <p className="text-slate-600">Annual gathering of industry experts, academicians, and researchers</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">TPO Meet</h4>
                    <p className="text-slate-600">Regular meetings with Training & Placement Officers</p>
                  </div>
                </div>
              </div>

              {/* Outreach Activities */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🚌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Outreach Activities</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">Technology Roadtrips</h4>
                    <p className="text-slate-600">Visiting educational institutions for awareness and engagement</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">Institution Visits</h4>
                    <p className="text-slate-600">On-campus events and workshops</p>
                  </div>
                </div>
              </div>

              {/* Cybersecurity Events */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Cybersecurity Events</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">Workshops</h4>
                    <p className="text-slate-600">Hands-on training sessions on cybersecurity</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">ISEA-RCC Programs</h4>
                    <p className="text-slate-600">Information security education and awareness initiatives</p>
                  </div>
                </div>
              </div>

              {/* Capacity Building */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Capacity Building Programs</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">I-LABS Program Events</h4>
                    <p className="text-slate-600">Launch and implementation events at partner colleges</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4 py-2">
                    <h4 className="font-bold text-lg text-slate-800">FIIP (Faculty Industrial Immersion)</h4>
                    <p className="text-slate-600">4-6 week faculty training programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Event Participation & Queries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">General Events</h4>
              <a href="mailto:bd-blr@cdac.in" className="text-blue-600 hover:text-blue-700">bd-blr@cdac.in</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Cybersecurity Events</h4>
              <a href="mailto:isearccblr@cdac.in" className="text-blue-600 hover:text-blue-700">isearccblr@cdac.in</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Academic Programs</h4>
              <a href="mailto:actsb@cdac.in" className="text-blue-600 hover:text-blue-700">actsb@cdac.in</a>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://c-huk.cdacb.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit C-HUK Portal
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;