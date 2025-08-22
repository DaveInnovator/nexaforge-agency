import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Strategy",
    stage: "Step 1",
    description:
      "We kick things off with a deep dive into your goals, audience, and brand. Together, we define the roadmap for a high-impact website.",
    icon: "🧭",
  },
  {
    title: "Design & Prototyping",
    stage: "Step 2",
    description:
      "Our team crafts wireframes and sleek UI designs that balance creativity with usability, ensuring a frictionless user journey.",
    icon: "🎨",
  },
  {
    title: "Development & Integration",
    stage: "Step 3",
    description:
      "We bring designs to life with clean, scalable code — building responsive websites, e-commerce stores, or custom web apps tailored to you.",
    icon: "💻",
  },
  {
    title: "Testing & Optimization",
    stage: "Step 4",
    description:
      "Before launch, we run performance checks, QA testing, and SEO optimizations so your website is fast, secure, and ready to rank.",
    icon: "⚡",
  },
  {
    title: "Launch & Ongoing Support",
    stage: "Step 5",
    description:
      "We deploy your site with confidence and provide continuous support, updates, and growth strategies to keep you ahead.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Our Process
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          A proven, step-by-step approach to delivering high-performance websites and web apps.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative backdrop-blur-lg rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-1">{step.title}</h3>
            <span className="text-sm text-blue-400 font-medium mb-3 inline-block">
              {step.stage}
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
