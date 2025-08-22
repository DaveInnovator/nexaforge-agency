import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website Development",
    desc: "We build responsive, scalable websites that reflect your brand and drive measurable results — from business sites to SaaS platforms.",
    icon: "💻",
  },
  {
    title: "E-Commerce Solutions",
    desc: "From product pages to checkout flows, we design and develop secure, conversion-focused online stores optimized for growth.",
    icon: "🛒",
  },
  {
    title: "Performance & Optimization",
    desc: "We fine-tune websites for speed, SEO, and scalability — ensuring your site loads fast, ranks high, and grows with your business.",
    icon: "⚡",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern, and user-friendly designs built with conversion in mind. We craft experiences your customers actually enjoy.",
    icon: "🎨",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Beyond launch, we provide continuous updates, security patches, and feature improvements to keep your site future-ready.",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Core Services</h2>
        <p className="text-gray-400 mt-4">
          Full-stack web solutions designed to help businesses grow online
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:shadow-xl transition-all"
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
