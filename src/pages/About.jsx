import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const values = [
  "Speed is non-negotiable — we ship fast without compromising quality.",
  "Scalable solutions built with clean, future-proof code.",
  "Design with intent — every interaction has purpose and impact.",
  "Collaboration first — your vision, our expertise, one outcome: results.",
];

const tools = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "WordPress", "Framer", "Tailwind CSS", "AI Tools"
];

export default function About() {
  return (
    <section className="pt-20 mt-15 px-6 py-24 bg-black text-white text-center space-y-24">
      {/* SEO */}
      <Helmet>
        <title>About NexaForge – Modern Web Development Agency</title>
        <meta
          name="description"
          content="Learn about NexaForge's mission, values, and expertise in building fast, scalable, and conversion-driven websites for startups and businesses."
        />
        <meta property="og:title" content="About NexaForge – Modern Web Development Agency" />
        <meta
          property="og:description"
          content="We’re a web agency obsessed with speed, scalability, and flawless execution — helping startups and businesses thrive online."
        />
        <meta property="og:image" content="https://nexaforge.pxxl.click/social-preview.png" />
      </Helmet>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-300 text-lg mb-4">
          NexaForge is a modern web development agency built for ambitious startups, growing businesses, and forward-thinking enterprises. 
          We deliver lightning-fast, scalable, and conversion-optimized websites that don’t just look good — they perform.
        </p>
        <p className="text-gray-400">
          From strategy and design to full-stack development and optimization, our team transforms your ideas into 
          powerful digital platforms. We don’t just launch websites — we launch growth engines.
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-left"
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Our Core Values</h3>
        <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg font-medium">
          {values.map((val, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {val}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-semibold mb-4 text-blue-400">Our Mission</h3>
        <p className="text-gray-300 text-lg italic">
          To empower startups and businesses with high-performance websites and digital platforms that scale, convert, and dominate in competitive markets.
        </p>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Technologies We Use</h3>
        <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-200">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              className="px-4 py-2 bg-gray-800 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Final Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-extrabold text-blue-400">
          We don’t just build websites — we build the digital infrastructure that powers growth.
        </h2>
      </motion.div>
    </section>
  );
}
