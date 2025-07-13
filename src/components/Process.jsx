import { motion } from "framer-motion";

const steps = [
  {
    title: "Kickoff & Discovery",
    stage: "Step 1",
    description: "We start with a strategy call to align on your product, users, and goals. No fluff — just clarity.",
    icon: "🧭",
  },
  {
    title: "Design & Prototype",
    stage: "Step 2",
    description: "From low-fidelity wireframes to final UI, we build clean, conversion-focused designs your users will love.",
    icon: "🖌️",
  },
  {
    title: "Build & Launch",
    stage: "Step 3",
    description: "We develop, test, and ship a performant, scalable product — fast. Then monitor for success.",
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
          How It Works
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          From kickoff to launch, we keep it lean, fast, and focused on outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative  backdrop-blur-lg rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300"
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
