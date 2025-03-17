"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CaseStudy() {
    return (
      <section id="case-studies" className="py-20 px-4 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/case-study.jpg"
              alt="Featured Case Study"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Scaling E-Commerce Revenue by 150%
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Achieved 3X ROI in 6 months for [Client Name] by implementing a comprehensive digital strategy.
            </p>
            <Link
              href="/case-studies/featured"
              className="bg-white text-black py-3 px-6 rounded-full font-semibold shadow hover:bg-gray-200 transition"
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  
  export default CaseStudy;