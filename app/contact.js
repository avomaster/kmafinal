'use client';
import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa';

const services = [
  { 
    title: 'Digital Marketing', 
    description: 'SEO, PPC, Social Media, Content Strategy',
    icon: <FaChartLine className="w-8 h-8 text-white" /> // Digital Marketing icon
  },
  { 
    title: 'Software Development', 
    description: 'Develop Robust Technology to Meet Your Business Logic',
    icon: <FaCode className="w-8 h-8 text-white" /> // Software Development icon
  },
  { 
    title: 'Website Development', 
    description: 'Showcase Who You Are With a Custom Designed Website Using the Latest Technology',
    icon: <FaLaptopCode className="w-8 h-8 text-white" /> // Website Development icon
  },
];

function ContactUs() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image on the left */}
        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <img
            src="/about.svg" // Replace with your image path
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on the right */}
        <div className="md:w-2/3 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h2>
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Founded on the principles of <strong>innovation</strong> and <strong>excellence</strong>, Koch Media Agency was created to bridge the gap between advanced technology and effective marketing. We understand that in today’s digital landscape, success requires a unified approach. That's why we integrate digital marketing with <strong>cybersecurity</strong>, <strong>web development</strong>, and <strong>software solutions</strong> under one roof.
              <br />
              <span className="mt-4 block">Our team of experts is dedicated to delivering tailored strategies that drive growth, enhance brand visibility, and ensure long-term success. By combining cutting-edge tools with creative thinking, we empower businesses to thrive in an ever-evolving digital world. Whether you're a startup or an established enterprise, we provide the expertise and resources to help you achieve your goals.</span>
            </p>
          </div>

        </div>
      </div>

      <div className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors"
            >
              {/* Directly render the icon here */}
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default ContactUs;