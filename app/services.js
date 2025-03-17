"use client";
import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa';

const services = [
  { 
    title: 'Digital Marketing', 
    subcategories: [
      'SEO',
      'E-E-A-T Optimised SEO',
      'PPC',
      'Social Media',
      'Content Strategy',
      'Content Schedule'
    ],
    icon: <FaChartLine className="w-8 h-8 text-white" />,
  },
  { 
    title: 'Software Development', 
    icon: <FaCode className="w-8 h-8 text-white" />,
    description: 'Develop Robust Technology to Meet Your Business Logic.'
  },
  { 
    title: 'Website Development', 
    icon: <FaLaptopCode className="w-8 h-8 text-white" />,
    description: 'Showcase Who You Are With a Custom Designed Website Using the Latest Technology.'
  }
];

function ServicesOverview() {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-white inline-block border-b-4 border-gray-600 pb-2">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-full max-w-sm text-center"
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              
              {service.subcategories ? (
                <ul className="list-disc list-inside space-y-2 text-center mx-auto max-w-xs">
                  {service.subcategories.map((item, idx) => (
                    <li key={idx} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
