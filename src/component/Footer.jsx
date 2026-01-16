import trustlogo from "../assets/trustlogo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
 
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-r from-[#020024] via-[#0a0e2e] to-[#111633] bottom-[-100px] text-white w-screen relative left-1/2 -translate-x-1/2 pt-10 pb-5">

      {/* ================= MAIN GRID ================= */}
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO */}
        <div className="flex justify-center lg:justify-start">
          <img src={trustlogo} alt="trust" className="w-30" />
        </div>

        {/* QUICK LINKS */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Quick Links
          </h3>
          <div className="space-y-2 text-sm">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={handleLinkClick}
              className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
            >
              Events
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Contact
          </h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span>📍</span> Bengaluru, Karnataka
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span>✉️</span> contact.gmail.com
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span>📞</span> +91 98765 43210
            </p>
          </div>
        </div>

        {/* FOLLOW US */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Follow Us
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected for latest updates:
          </p>
         <div className="flex justify-center lg:justify-start flex-wrap gap-3">
  {[
    { 
      Icon: FaYoutube, 
      href: "https://m.youtube.com/channel/UCh-fxwvQbIeAxgE7sa1lByg", 
      label: "YouTube" 
    },
    { 
      Icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/cdacbengaluru", 
      label: "LinkedIn" 
    },
    { 
      Icon: FaXTwitter, 
      href: "https://twitter.com/cdacbengaluru", 
      label: "X (Twitter)" 
    },
    { 
      Icon: FaFacebookF, 
      href: "https://www.facebook.com/CDACINDIA/", 
      label: "Facebook" 
    },
    { 
      Icon: FaInstagram, 
      href: "https://www.instagram.com/CDACBengaluru/", 
      label: "Instagram" 
    }
  ].map((social, i) => (
    <a
      key={i}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg bg-white/5 hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label={`Follow us on ${social.label}`}
    >
      <social.Icon className="text-lg" />
    </a>
  ))}
</div>
        </div>
      </div>

     
      <div className="w-full max-w-none mt-8 pt-1 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <div className="flex flex-col items-center gap-4 text-sm">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a
                href="/privacy-policy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:underline text-xs sm:text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a
                href="/terms-of-service"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:underline text-xs sm:text-sm"
              >
                Terms of Service
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a
                href="/cookie-policy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:underline text-xs sm:text-sm"
              >
                Cookie Policy
              </a>
            </div>
            <p className="text-gray-500 text-center text-xs sm:text-sm mt-2">
              © 2026 TRUST. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;