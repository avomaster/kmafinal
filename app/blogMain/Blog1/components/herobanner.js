"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 border-b border-white/10 pb-12"
    >
      <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
        AI‑Powered Marketing in 2025: How Generative AI is Revolutionizing Content & Ads
      </h1>
      <div className="flex flex-wrap items-center text-gray-400 text-sm space-x-2">
        <time dateTime="2025-04-21">April 21, 2025</time>
        <span>•</span>
        <span>8 min read</span>
      </div>
      <figure className="relative w-full h-96 rounded-xl overflow-hidden border border-white/20">
        <Image
          src="/headerpic.avif"
          alt="AI marketing concept"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </figure>
    </motion.header>
  );
}
