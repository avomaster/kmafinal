"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CTASection() {
  return (
    <section className="py-16 px-4 bg-black">
      <motion.div 
      
      className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s discuss your project and explore how our innovative strategies can drive your business forward.
        </p>
      </motion.div>
    </section>
  );
}
  
  export default CTASection;