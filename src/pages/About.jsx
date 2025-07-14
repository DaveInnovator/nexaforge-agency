import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const values = [
  "Speed is non-negotiable — we deliver fast, always.",
  "Code that scales, so your growth never stalls.",
  "Design with purpose — every pixel earns its place.",
  "Your vision, our execution — no fluff, just results.",
];

const tools = [
  "HTML", "CSS", "JavaScript", "WordPress", "Framer", "React", "AI Tools"
];

export default function About() {
  return (
    <section className="pt-20 mt-15 px-6 py-24 bg-black text-white text-center space-y-24">
      {/* SEO */}
      <Helmet>
        <title>About NexaForge – Your Elite Web Launch Partner</title>
        <meta
          name="description"
          content="Discover NexaForge's mission, values, and why we’re obsessed with building fast, bold, and scalable websites for modern startups."
        />
        <meta property="og:title" content="About NexaForge – Your Elite Web Launch Partner" />
        <meta
          property="og:description"
          content="We’re a web agency built for builders — lean, modern, and obsessed with quality."
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
          NexaForge is a creative execution partner for high-growth startups and digital-first businesses. We craft lightning-fast, scalable, and conversion-optimized platforms — with pixel-perfect UI and production-grade code.
        </p>
        <p className="text-gray-400">
          Whether you're launching your first MVP or leveling up your current product, our designers, developers, and strategists turn ideas into impact — fast. We don’t just ship websites. We ship leverage.
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
          To arm ambitious startups and digital-first businesses with unfair advantages on the web — through exceptional design, code, and execution.
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
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Tools We Use</h3>
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
          We don’t just build websites — we build the infrastructure for your business to grow, scale, and dominate.
        </h2>
      </motion.div>
    </section>
  );
}
