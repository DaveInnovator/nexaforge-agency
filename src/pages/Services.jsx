import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development for creators",
    desc: "Scalable, high-performing platforms tailored for creators with clean, modular architecture.",
    icon: "🧠"
  },
  {
    title: "Web Design for Brands",
    desc: "Conversion-driven websites that build trust, generate leads and help your brand stand out.",
    icon: "💼"
  },
  {
    title: "Full-Stack Product Launch",
    desc: "From frontend design to backend logic — we bring full web apps to life with speed and polish.",
    icon: "🚀"
  }
];

export default function Services() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-400 mt-4">Tailored for startups, businesses, and creators</p>
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
