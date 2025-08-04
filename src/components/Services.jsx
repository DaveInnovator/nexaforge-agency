import { motion } from "framer-motion";

const services = [
 {
  title: "Creator-Focused Platforms",
  desc: "We build scalable digital products and personal brand sites for creators ready to launch courses, communities, and more — no tech headaches.",
  icon: "🧠",
},
{
  title: "Design That Converts",
  desc: "We blend bold design with buyer psychology to turn clicks into clients — whether it's a funnel, sales page, or full brand site.",
  icon: "💼",
},
{
  title: "Launch-Ready from Day One",
  desc: "Need to drop a course, product, or membership fast? We handle everything from design to dev so you're ready to sell on day one.",
  icon: "🚀",
}

];

export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Core Services</h2>
        <p className="text-gray-400 mt-4">
          Purpose-built solutions for brands and creators
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
