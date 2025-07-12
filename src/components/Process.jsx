import { motion } from "framer-motion";

const steps = [
  {
    title: "Kickoff",
    stage: "Stage 1",
    description: "We align with you to understand your goals, vision, and expectations.",
    icon: "🚀",
  },
  {
    title: "Design",
    stage: "Stage 2",
    description: "Our design team brings the vision to life with visuals, wireframes, and UI concepts.",
    icon: "🎨",
  },
  {
    title: "Launch",
    stage: "Stage 3",
    description: "We develop, test, and launch your site ensuring performance and polish.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 shadow-lg"
          >
            <div className="text-3xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <span className="text-sm text-blue-400 font-medium mb-2 inline-block">
              {step.stage}
            </span>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
