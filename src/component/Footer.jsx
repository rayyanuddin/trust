import trustlogo from "../assets/trustlogo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
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
            {["About", "Contact"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="block text-gray-400 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Contact
          </h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>📍 Bengaluru, Karnataka</p>
            <p>✉️ contact.gmail.com</p>
            <p>📞 +91 98765 43210</p>
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
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg bg-white/5 hover:bg-blue-600 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
<div className="w-full max-w-none mt-8 pt-1 border-t border-white/10">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
    <div className="flex flex-col items-center gap-4 text-sm">
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline text-xs sm:text-sm"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline text-xs sm:text-sm"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline text-xs sm:text-sm"
        >
          Cookie Policy
        </a>
      </div>
      <p className="text-gray-500 text-center text-xs sm:text-sm">
        © 2025 SCI. All rights reserved.
      </p>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
