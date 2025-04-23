"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../navigation";
import Footer from "../Footer";

const allBlogs = [
  {
    id: 1,
    title:
      "AI-Powered Marketing in 2025: How Generative AI is Revolutionizing Content & Ads",
    path: "/blogMain/Blog1",
    description: "Cutting-edge insights into generative AI for content & ads",
    date: new Date(2025, 3, 22).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    category: "AI Marketing",
    readTime: "8 min",
  },
];

export default function BlogMain() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black pt-32 pb-16 px-6">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Market Insights
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Data-driven strategies for all markets.
          </p>
        </motion.section>

        <div className="max-w-7xl mx-auto px-6">
          <motion.article
            key={allBlogs[0].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="group relative bg-black rounded-xl p-6 border border-gray-800 hover:border-white transition-all duration-300"
          >
            <span className="text-white text-xs font-medium tracking-wide">
              {allBlogs[0].category.toUpperCase()}
            </span>

            <h2 className="text-xl font-serif text-white my-3 line-clamp-2">
              <Link
                href={allBlogs[0].path}
                className="hover:text-white transition-colors"
              >
                {allBlogs[0].title}
              </Link>
            </h2>

            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {allBlogs[0].description}
            </p>

            <div className="flex justify-between items-center text-gray-400 text-xs">
              <time>{allBlogs[0].date}</time>
              <span>{allBlogs[0].readTime}</span>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </>
  );
}
