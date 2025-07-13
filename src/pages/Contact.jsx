import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen mt-5 bg-black text-white px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto  py-40"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Build Together</h2>
        <p className="text-gray-300 mb-8">
          Have a project in mind? Need a custom solution for your SaaS or business website?
          We're ready to bring it to life.
        </p>
        <a
          href="mailto:nexaforge.contact@gmail.com"
          className="inline-block bg-blue-600 px-6 py-3 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-all"
        >
          Contact Us → nexaforge.contact@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
