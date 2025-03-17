'use client';

import { motion } from "framer-motion";
import { FiCheckCircle, FiTarget, FiLayers } from "react-icons/fi";
import { GiTeamIdea, GiExtraTime, GiPawn } from "react-icons/gi";

function FooterCTA() {
  return (
    <section className="min-h-screen py-16 px-4 bg-black">
                <hr className="border-t border-gray-600 opacity-50 w-3/4 mx-auto mt-16" />
      <div className="container mx-auto mt-6 text-center">
        {/* Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Ready to Accelerate Your Growth?
        </motion.h2>

        {/* Paragraph with animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Let’s discuss your project and explore how our innovative strategies can drive your business forward.
        </motion.p>

        {/* Process Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <FiCheckCircle className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Strategise</h3>
              <p className="text-gray-600 mt-2">
                We begin by understanding your business, setting goals, and creating a tailored strategy.
              </p>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <FiTarget className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Execute</h3>
              <p className="text-gray-600 mt-2">
                We execute the strategy, focusing on marketing, development, and scaling your business.
              </p>
            </motion.div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <FiLayers className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Optimise</h3>
              <p className="text-gray-600 mt-2">
                We continuously monitor and optimize to ensure maximum efficiency and growth.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <GiTeamIdea className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Collaboration</h3>
              <p className="text-gray-600 mt-2">
                We foster seamless collaboration, ensuring your team and ours work together towards a unified vision, delivering exceptional results.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <GiExtraTime className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Deliverability</h3>
              <p className="text-gray-600 mt-2">
                Our focus is on timely, high-quality delivery, ensuring that all project milestones are met with precision and consistency.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center mb-4"
            >
              <GiPawn className="text-4xl text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Competitive Edge</h3>
              <p className="text-gray-600 mt-2">
                We equip your business with strategies that provide a competitive advantage, positioning you ahead in your industry with innovative solutions.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
      <hr className="border-t border-gray-600 opacity-50 w-3/4 mx-auto mt-16" />
    </section>
  );
}

export default FooterCTA;
