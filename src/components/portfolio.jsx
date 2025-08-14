import React from "react";
import Biyi from "../assets/biyi.png";
import Kelvin from "../assets/kelvin.png";
import David from "../assets/david.png";
import Skincareh from "../assets/skincareh.png";
import Brkn from "../assets/brkn.png";
const portfolio = [
  {
    title: "Portfolio Website For a Visual Designer",
    description:
      "A clean, high-conversion website for a Visual Designer. Designed and developed with Wordpress.",
    image: Biyi,
    link: "https://biyi-olufunmilayo.ct.ws/?i=1",
  },
  {
    title: "Personal Website for a Fashion Influencer",
    description:
      "Fully responsive website for a fashion influencer. Designed and developed with Framer.",
    image: David,
    link: "https://olarindedavid.vercel.app/",
  },
  {
    title: "E-commerce Store for a skincare brand",
    description:
      "A fully responsive e-commerce store for a skincare brand. Designed and developed with Wordpress.",
    image: Skincareh,
    link: "https://skincareh.great-site.net/",
  },
  {
    title: "Brkn Records",
    description:
      "A fully responsive website for a music label. Designed and developed with Wordpress.",
    image: Brkn,
    link: "https://brknrecords.ct.ws/",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Recent Works
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="bg-[#0b1220] rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                   target="_blank"
  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
