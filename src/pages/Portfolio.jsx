import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand Landing Page",
    desc: "Crafted for a brands to showcase features and convert users.",
    tag: "Web Design"
  },
  {
    title: "Business Website",
    desc: "Responsive, SEO-ready website for personal brands.",
    tag: "Web Development"
  },
  {
    title: "Creative Portfolio",
    desc: "Modern portfolio with animations, case studies and transitions.",
    tag: "UI/UX"
  }
];

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <h2 className="text-4xl font-bold mb-10 text-center">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <span className="text-sm text-blue-400 mb-2 inline-block">{proj.tag}</span>
            <p className="text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
