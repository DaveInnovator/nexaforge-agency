import { motion } from "framer-motion";

const stats = [
  { label: "Projects Launched", value: "75+" },
  { label: "Avg. Load Time", value: "1.2s" },
  { label: "SaaS Products Deployed", value: "30+" },
  { label: "Industries Served", value: "12+" },
];

const values = [
  "Speed is non-negotiable — we deliver fast, always.",
  "Code that scales, so your growth never stalls.",
  "Design with purpose — every pixel earns its place.",
  "Your vision, our execution — no fluff, just results.",
];

export default function About() {
  return (
    <section className="pt-16 bg-black mt-15 text-white px-6 py-24 text-center space-y-20">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-300 text-lg mb-4">
          NexaForge is a web development partner for high-growth startups and digital-first businesses. We specialize in building fast, scalable, and conversion-optimized platforms — with pixel-perfect UI and production-ready code.
        </p>
        <p className="text-gray-400">
          Whether you're launching your first MVP or rebuilding your product to scale, our team of designers, engineers, and strategists help bring your vision to life — fast. We don’t just ship websites. We ship outcomes.
        </p>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-left"
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Our Core Values</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg font-medium">
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

      {/* Mission Section */}
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

      {/* Stats Section */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl font-bold text-blue-400">{item.value}</div>
            <div className="text-gray-400 text-sm">{item.label}</div>
          </motion.div>
        ))}
      </div> */}

      {/* Bold Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-20"
      >
        <h2 className="text-2xl font-extrabold text-blue-400">
          We don’t just build websites — we build the backbone of your business’s growth.
        </h2>
      </motion.div>
    </section>
  );
}
