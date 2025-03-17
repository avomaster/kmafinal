"use client";

import { motion } from 'framer-motion';
import Navigation from '../navigation'; // Import your navigation component
import Footer from '../Footer'; // Import your footer component

export default function ComingSoon() {
  return (
    <>
      <Navigation />
      {/* Main Content */}
      <main className=" bg-black flex flex-col">
        {/* Coming Soon Container */}
        <section className="min-h-screen flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Coming Soon Text */}
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-6xl md:text-8xl font-extrabold text-white mb-6"
            >
              Coming Soon
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We're working hard to bring you something amazing. Stay tuned!
            </motion.p>

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex justify-center space-x-2"
            >
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.3,
                  }}
                  className="w-3 h-3 bg-purple-600 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}