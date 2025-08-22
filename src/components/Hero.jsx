import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] mt-6 flex items-center justify-center bg-gradient-to-br from-black via-[#020314] to-[#071740] text-white overflow-hidden px-8 text-center">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 inline-block bg-blue-700/20 px-3 py-1 rounded-full text-xs text-blue-300 font-semibold border border-blue-400">
            NEW &nbsp;•&nbsp; Web Development Agency
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Scalable Web Solutions <br />
            <span className="text-blue-400">for businesses, startups & modern brands</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8">
            At NexaForge, we specialize in building high-performance websites,
            e-commerce platforms, and digital tools that help businesses grow,
            scale, and stay ahead of the competition. Whether you’re a startup
            or an established brand, we deliver clean, conversion-focused, and
            future-ready web experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition-all font-semibold"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="bg-blue-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-900 transition-all font-semibold"
            >
              Why NexaForge?
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
