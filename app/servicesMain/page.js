"use client";

import { motion } from 'framer-motion';
import { FiCode, FiMonitor, FiTrendingUp } from 'react-icons/fi';
import Navigation from '../navigation';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const services = [
  {
    name: "Enterprise Software Solutions",
    outcomes: ["38% avg. efficiency gain", "Scalable architecture", "24/7 support"],
    icon: <FiCode className="w-12 h-12" />,
  },
  {
    name: "Digital Presence Engineering",
    outcomes: ["300%+ lead increase", "98% uptime guarantee", "ADA compliant"],
    icon: <FiMonitor className="w-12 h-12" />,
  },
  {
    name: "Revenue Operations",
    outcomes: ["27% CAC reduction", "AI-driven analytics", "Boardroom reporting"],
    icon: <FiTrendingUp className="w-12 h-12" />,
  },
];

export default function OurServices() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Industrial-Grade Digital Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Quantifiable outcomes for executive leadership
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300"
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-20 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-6 text-white bg-gray-800 p-4 rounded-lg w-max mx-auto group-hover:bg-white group-hover:text-black transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    {service.name}
                  </h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span className="text-gray-100">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Executive CTA */}
        <div className="container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-black p-8 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-10 pointer-events-none" />
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
              Operational Transformation
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
              Schedule a confidential strategy session with our executive team
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all relative z-10"
            >
              Initiate Executive Briefing
            </motion.button>
          </motion.div>
        </div>

        <Testimonials />
        <Footer />
      </section>
    </>
  );
}