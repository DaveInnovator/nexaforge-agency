import { motion } from "framer-motion";

const features = [
  {
    title: "Revenue-Focused Builds",
    subtitle: "Designed to Convert",
    desc: "We create conversion-optimized experiences that turn visitors into paying customers.",
    icon: "💼",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Scalable Architecture",
    subtitle: "Built for Growth",
    desc: "From MVPs to full-scale apps, our solutions scale with your business goals.",
    icon: "📈",
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Zero-Code Handoff",
    subtitle: "No Dev? No Problem.",
    desc: "Easily manage and update content without touching a line of code.",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SEO + Performance",
    subtitle: "Optimized Out of the Box",
    desc: "Fast load times, accessibility, and SEO baked into every build we ship.",
    icon: "⚙️",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Rapid Delivery Cycles",
    subtitle: "Speed Without Compromise",
    desc: "Get to market faster with our efficient, battle-tested workflows.",
    icon: "⚡",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Mobile-Optimized UX",
    subtitle: "Flawless Everywhere",
    desc: "Beautiful, responsive interfaces that feel native on any device.",
    icon: "📱",
    color: "from-teal-400 to-cyan-400",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-md border border-slate-700"
          >
            <div
              className={`text-4xl mb-4 p-3 rounded-full bg-gradient-to-br ${feat.color} text-white w-fit shadow-lg`}
            >
              {feat.icon}
            </div>
            <h4 className="text-lg font-semibold mb-1">{feat.title}</h4>
            <p className="text-sm text-blue-400 mb-2">{feat.subtitle}</p>
            <p className="text-gray-300">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
