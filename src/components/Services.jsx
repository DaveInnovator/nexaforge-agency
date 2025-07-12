import { motion } from "framer-motion";

const services = [
  {
    title: "SaaS Platform Development",
    desc: "We engineer scalable, modular platforms built for SaaS growth — from MVP to enterprise-ready products.",
    icon: "🧠",
  },
  {
    title: "Conversion-First Web Design",
    desc: "Strategic UI/UX and visual design tailored to generate leads, build trust, and drive business revenue.",
    icon: "💼",
  },
  {
    title: "End-to-End Product Launch",
    desc: "From frontend polish to backend power — we deliver full-stack, launch-ready products fast.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Core Services</h2>
        <p className="text-gray-400 mt-4">
          Purpose-built solutions for SaaS startups and fast-moving businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700"
          >
            <div className="text-4xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
            <p className="text-gray-300">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
