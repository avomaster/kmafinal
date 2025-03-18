'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import { FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

function Hero() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col lg:flex-row items-center">
      {/* Left Side (Text and Button) */}
      <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center text-center mb-8 lg:mb-0">
        {/* Heading (small and light gray) */}
        <h1 className="text-xl text-gray-400">A Digital Design & Innovation Agency</h1>

        {/* Middle Text (dark, big, not bold) */}
        <p className="mt-6 text-5xl md:text-6xl text-white font-normal">
          <span className="block">Digital Transformation</span>
          <span className="block">That Impacts EBIT</span>
          <span className="block"> Within 180 Days.</span>
        </p>

        {/* Next Paragraph (bigger than the first but same color) */}
        <motion.p
          className={`mt-9 text-2xl text-gray-400 transition-all duration-300 ${isFocused ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          83% of Our Clients Achieve 200%+ ROI.<br />Koch Media Agency is focused on helping<br />brands towards creating success.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-6 w-full flex justify-center"
        >
          <Link href="/servicesMain">
            <button className="bg-gradient-to-r bg-[#3c3c3c] px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 text-white">
              <span>Start Your Journey</span>
              <FiChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Side (3 Vertical Rectangles for Videos) */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-6 relative z-10">
        {/* Video 1 */}
        <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-gray-800 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            src='/KMMAAA.mp4'
            muted
            loop
            playsInline
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 2 */}
        <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-gray-800 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            src='/video2.mp4'
            muted
            loop
            playsInline
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 3 */}
        <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-gray-800 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            src='/video3.mp4'
            muted
            loop
            playsInline
          >
            <source src="/videos/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


    </section>
  );
}

export default Hero;
