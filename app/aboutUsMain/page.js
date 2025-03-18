"use client";

import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Navigation from '../navigation';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const teamMembers = [
  {
    name: "Chayton Koch",
    occupation: "Head of Marketing",
    image: "/chay.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/chayton_koch",
      facebook: "https://www.facebook.com/ChaytonKoch",
      linkedin: "https://www.linkedin.com/in/chaytonkoch/",
    },
  },
  {
    name: "Jonathan Koch",
    occupation: "Head of Development",
    image: "/johnny.jpg",
    socialMedia: {
      facebook: "https://www.facebook.com/johnny.koch.169",
      linkedin: "https://www.linkedin.com/in/jonathan-koch-150556258/",
    },
  },
];

const timeline = [
  { year: "2023", event: "Founded with 2 clients in a home office" },
  { year: "2024", event: "Secured R400k in client revenue" },
  { year: "2025", event: "Expanded to European markets" },
];

export default function AboutUSMain() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-black relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/patterns/matrix-grid.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Core Content */}
        <div className="container mx-auto py-20 relative z-10">
          {/* Hero Heading */}
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 text-6xl font-bold text-white text-center mb-16"
          >
            Precision-Driven Marketing
          </motion.h2>

          {/* Centered Timeline */}
<div className="flex pb-10 mb-20 hide-scrollbar justify-center">
  <div className="flex flex-col md:flex-row mt-6 gap-6 px-4">
    {timeline.map((item, idx) => (
      <motion.div 
        key={item.year}
        whileHover={{ scale: 1.05 }}
        className="flex-shrink-0 w-80 h-48 bg-black rounded-xl p-6 cursor-pointer border border-gray-800 hover:border-white"
      >
        <div className="text-white text-2xl font-bold mb-2">{item.year}</div>
        <div className="text-gray-400 text-lg">{item.event}</div>
        <div className="text-gray-600 text-4xl mt-4">0{idx + 1}</div>
      </motion.div>
    ))}
  </div>
</div>

          {/* Content Grid with Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {/* Left Column - Content Sections */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-white transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-white rounded-full mr-3"></span>
                  Our Origin
                </h3>
                <p className="text-gray-400">
                  I started this agency after watching too many smart businesses get fed generic marketing material by agencies who couldn’t tell a triathlete from a toddler. (True story: One “expert” tried to sell Hezekiah Creations on an influencer campaign targeting extreme sports moms. For couch cushions.)
                </p>
              </div>

              <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-white transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-4 h-4 bg-gray-600 rounded-full mr-3"></span>
                  Non-Negotiables
                </h3>
                <ul className="space-y-4 text-gray-400">
                  {[
                    'Financial stewardship as priority',
                    'Behavioral science-driven strategies',
                    'Boardroom-focused metrics'
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-white">→</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Team Members */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.name}
                  whileHover={{ y: -5 }}
                  className="group bg-black rounded-2xl border border-gray-800 hover:border-white p-6 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border border-gray-800"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-gray-400 mt-1">{member.occupation}</p>
                      <div className="flex gap-3 mt-3">
                        {Object.entries(member.socialMedia).map(([platform, url]) => {
                          const Icon = 
                            platform === 'linkedin' ? FaLinkedin :
                            platform === 'instagram' ? FaInstagram : FaFacebook;
                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Testimonials Section */}
          <div className="py-24 border-t border-gray-800">
            <div className="container mx-auto">
              <Testimonials />
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-600 opacity-50 w-3/4 mx-auto mb-32" />

        <Footer />
      </section>
    </>
  );
}
