"use client";

import { motion } from 'framer-motion';
import { useState }  from 'react';
import Link          from 'next/link';
import Navigation    from '../navigation';
import Footer        from '../Footer';

const generateBlogs = () => {
  const blogs = [];
  for (let i = 1; i <= 30; i++) {
    blogs.push({
      id: i,
      title: `AI-Powered Marketing in 2025: How Generative AI is Revolutionizing Content & Ads`,
      slug: `blog${i}`,
      path: `/blogMain/Blog1`,
      description: `Cutting-edge insights into generative AI for content & ads (Part ${i})`,
      date: new Date(2025, 3, 21 + i).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      category: ["AI Marketing", "SEO", "Social Media", "CX"][i % 4],
      readTime: `${5 + (i % 3)} min`
    });
  }
  return blogs;
};

const allBlogs      = generateBlogs();
const POSTS_PER_PAGE = 6;

export default function BlogMain() {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, allBlogs.length));
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Market Insights
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              Data-driven strategies for all markets.
            </p>
          </div>
        </motion.section>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 pb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogs.slice(0, visiblePosts).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-black rounded-xl p-6 border border-gray-800 hover:border-white transition-all duration-300"
              >
                <span className="text-white text-xs font-medium tracking-wide">
                  {post.category.toUpperCase()}
                </span>
                <h2 className="text-xl font-serif text-white mb-3 line-clamp-2">
                  <Link
                    href={post.path}
                    className="block hover:text-white transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {visiblePosts < allBlogs.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center"
            >
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Load More Insights
              </button>
            </motion.div>
          )}
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
