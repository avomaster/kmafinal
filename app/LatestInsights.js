"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function LatestInsights() {
    const posts = [
      {
        title: "5 Digital Marketing Trends in Europe for 2025",
        excerpt:
          "Stay ahead of the curve with these emerging trends shaping the European market.",
        image: "/blog/post1.jpg",
        link: "/blog/digital-marketing-trends-2025"
      },
      {
        title: "Case Study: Driving Mobile App Engagement",
        excerpt:
          "Discover how we boosted app engagement through innovative strategies.",
        image: "/blog/post2.jpg",
        link: "/blog/mobile-app-engagement"
      },
      {
        title: "Innovative Web Development Techniques for Modern Businesses",
        excerpt:
          "Explore the latest techniques in web development to create stunning digital experiences.",
        image: "/blog/post3.jpg",
        link: "/blog/web-development-techniques"
      }
    ];
    return (
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link href={post.link} className="text-white underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default LatestInsights;