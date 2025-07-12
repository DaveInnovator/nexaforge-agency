import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/nexa.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-[999] bg-black/60 backdrop-blur-md border-b border-white/10 "
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="NexaForge Logo"
            className="w-40 sm:w-52 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-base font-medium text-white">
          {links.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.to}>{link.label}</Link>
            </motion.div>
          ))}
                  <Link
  to="/contact"
  className="block w-full text-center bg-blue-700 hover:bg-blue-600 transition-colors px-5 py-3 rounded-md font-semibold"
>
  Get In Touch
</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#101010] border border-white/10 rounded-lg shadow-xl p-6 text-white space-y-5 z-40"
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="block text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
  to="/contact"
  className="block w-full text-center bg-blue-700 hover:bg-blue-600 transition-colors px-5 py-3 rounded-md font-semibold"
>
  Get In Touch
</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
