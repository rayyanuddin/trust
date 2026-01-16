// Industries.jsx
import React, { useEffect, useState, useRef } from 'react';
import { 
  FaEye, 
  FaBullseye, 
  FaRoad, 
  FaIndustry, 
  FaCalendarDay,
  FaUniversity,
  FaHandshake,
  FaChartLine,
  FaSync,
  FaRocket
} from 'react-icons/fa';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  useEffect(() => {
    
    if (isInitialLoad) {
      handleAutoRefresh();
      setIsInitialLoad(false);
    }
  }, []);

  const scheduleDays = [
    { day: 'Tuesday', icon: <FaCalendarDay />, description: 'Industrial Visits', note: 'Based on request' },
    { day: 'Thursday', icon: <FaCalendarDay />, description: 'Industrial Visits', note: 'Based on request' },
    { day: 'Saturday', icon: <FaCalendarDay />, description: 'Industrial Visits', note: 'Based on request' },
  ];

  const benefits = [
    { icon: <FaUniversity />, title: 'Industry Exposure', desc: 'Direct interaction with industry professionals' },
    { icon: <FaHandshake />, title: 'Networking', desc: 'Build connections with potential employers' },
    { icon: <FaChartLine />, title: 'Trend Awareness', desc: 'Stay updated with latest industry trends' },
  ];

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
      
      // Restore scroll position instead of scrolling to top
      window.scrollTo(0, scrollPosition);
    }, 700);
  };

  

  // Fixed SVG pattern - properly encoded
  const svgPattern = encodeURIComponent(`<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#ffffff" fill-opacity="0.4"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>`);

  return (
    <div className="min-h-screen mt-17 bg-gradient-to-br from-blue-50 to-gray-50 p-4 md:p-8 relative">
      <div className="absolute top-0 left-0 w-1 h-1 opacity-0"></div>
      
  
    
      <div className="max-w-6xl mx-auto">
     
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Industrial Visits Program
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-blue-700 font-semibold mt-8">
            C-DAC Bangalore - Centre for Development of Advanced Computing
          </p>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

       
        <div className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
          
        
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-6 md:p-8 relative overflow-hidden">
         
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,${svgPattern}")`,
                  backgroundSize: '60px 60px'
                }}
              ></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
              <div className={`p-4 bg-white/20 rounded-xl backdrop-blur-sm ${isVisible ? 'animate-[bounce_2s_ease-in-out]' : ''}`}>
                <FaIndustry className="text-4xl md:text-5xl" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Industry-Academia Collaboration Initiative</h2>
                <p className="text-blue-100 opacity-90">Bridging the gap between academia and industry</p>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 md:p-8 relative">
            {/* Vision Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-blue-100 text-blue-700 rounded-xl ${isVisible ? 'animate-[pulse_2s_ease-in-out]' : ''}`}>
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <div className="pl-2 md:pl-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-6 py-2">
                  Promoting Industry-Academia Collaboration and Networking Opportunities through Introduction to Trending Technologies & Solutions
                </p>
              </div>
            </div>

            {/* Goal Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-green-100 text-green-700 rounded-xl ${isVisible ? 'animate-[pulse_2s_ease-in-out_0.5s]' : ''}`}>
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Goal</h3>
              </div>
              <div className="pl-2 md:pl-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-green-500 pl-6 py-2">
                  Enhancing Practical Knowledge and introducing the Technology Domains and Industry Trends to Participants
                </p>
              </div>
            </div>

            {/* Roadmap Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-purple-100 text-purple-700 rounded-xl ${isVisible ? 'animate-[pulse_2s_ease-in-out_1s]' : ''}`}>
                  <FaRoad className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Roadmap</h3>
              </div>
              
              <div className="pl-2 md:pl-12">
                {/* Highlight Box with animation */}
                <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-600 rounded-r-lg p-6 mb-8 shadow-md ${isVisible ? 'animate-[slideIn_0.8s_ease-out]' : ''}`}>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    Plan to host Industrial Visit every Tuesday, Thursday and Saturday based on requests
                  </p>
                </div>

                {/* Schedule Grid */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-700 mb-6">Schedule</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {scheduleDays.map((item, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-[cardAppear_0.6s_ease-out] opacity-100' : 'opacity-0'}`}
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                            {item.icon}
                          </div>
                          <h5 className="text-xl font-bold text-gray-800 mb-2">{item.day}</h5>
                          <p className="text-gray-700 font-semibold mb-2">{item.description}</p>
                          <p className="text-sm text-gray-500">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 italic">
                    <span className="font-semibold">Note:</span> The industrial visits are organized based on participant requests and availability of industry partners. This flexible approach ensures maximum relevance and learning opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Program Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
                  >
                    <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-10 md:mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">C-DAC Bangalore</h3>
            <p className="text-blue-200 opacity-90">Centre for Development of Advanced Computing</p>
          </div>
          <div className="text-lg font-light mb-6">
            <p>Promoting Industry-Academia Synergy in Technology Education</p>
          </div>
          <div className="text-sm text-blue-300">
            <p>© C-DAC Bangalore • All rights reserved</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '3', label: 'Days/Week' },
            { value: 'Flexible', label: 'Scheduling' },
            { value: 'Industry', label: 'Partnership' },
            { value: 'Practical', label: 'Learning Focus' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;