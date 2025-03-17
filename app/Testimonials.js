"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Testimonials() {
  const testimonials = [
    {
      quote: "Koch Media Agency transformed our digital presence. Their data-driven approach delivered amazing results in the European market.",
      client: "Ingenuity Africa",
      image: "/ingTest.png",
    },
    {
      quote: "The innovative strategies from Koch Media Agency boosted our growth and exceeded our expectations.",
      client: "Hezekiah Creations",
      image: "/hezekiahTest.jpg",
    },
    {
      quote: "Chayton went above and beyond for our brand and we truely appericiated it.",
      client: "Rudy Project",
      image: "/rudyTest.jpg",
    },
    {
      quote: "Chayton spear headed all of our marketing for over 2 years, which included all our subsiduries under The Believe Resourcing Group.",
      client: "The Believe Resourcing Group",
      image: "/believeTest.jpg",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-6 rounded-lg bg-black bg-opacity-50 hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300"
            >
              {/* Card Content */}
              <p className="text-xl text-gray-300 mb-4">“{t.quote}”</p>
              <div className="flex items-center">
                <Image
                  src={t.image}
                  alt={t.client}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <span className="text-gray-400 text-sm">{t.client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mt-12">
          <Link href="/contactMain">
            <button className="bg-gradient-to-r bg-[#353535] px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
}

export default Testimonials;