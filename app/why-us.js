"use client";

import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaGlobeAmericas, FaUserTie, FaDraftingCompass, FaMixcloud } from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUsers className="w-16 h-16 text-white" />,
      title: "Expert Team",
      description:
        "A dedicated team of professionals with over 5 years of combined experience. We bring expertise to every aspect of your project.",
      delay: 0.3,
    },
    {
      icon: <FaChartLine className="w-16 h-16 text-white" />,
      title: "Data-Driven",
      description:
        "Our strategies are rooted in data and analytics to deliver measurable, results-driven outcomes for your business.",
      delay: 0.5,
    },
    {
      icon: <FaGlobeAmericas className="w-16 h-16 text-white" />,
      title: "Proven Expertise",
      description:
        "Over 4 years of experience in digital marketing, development, and cybersecurity.",
      delay: 0.7,
    },
    {
      icon: <FaUserTie className="w-16 h-16 text-white" />,
      title: "Client-Centric Approach",
      description:
        "Tailored solutions that meet the unique needs of your business.",
      delay: 0.9,
    },
    {
      icon: <FaDraftingCompass className="w-16 h-16 text-white" />,
      title: "Innovative Solutions",
      description:
        "Leveraging the latest technologies and trends to stay ahead of the competition.",
      delay: 1.1,
    },
    {
      icon: <FaMixcloud className="w-16 h-16 text-white" />,
      title: "Transparent Communication",
      description:
        "A collaborative process with clear milestones and measurable results.",
      delay: 1.3,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-black">
      <div className="container mx-auto text-center text-white">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Why Choose Us
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Let’s cut to the chase: You don’t need another marketer recycling tired strategies. You need someone who gets your industry—because we’ve fought in the trenches.
        </motion.p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="flex flex-col items-center text-center space-y-4 px-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-600 opacity-50 w-1/2 mx-auto mt-16" />
    </section>
  );
}

export default WhyChooseUs;
