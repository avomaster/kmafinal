"use client";

import { motion } from "framer-motion";
import Navigation from "../navigation";
import Footer from "../Footer";

function getCardClasses(item) {
  if (item.iframeUrl) {
    // 2 columns wide, 2 rows tall, taller height
    return "md:col-span-2 md:row-span-2 h-[500px]";
  } else if (item.video) {
    // 2 columns wide, shorter height
    return "md:col-span-2 h-[400px]";
  }
  // Default height for normal items
  return "h-64";
}

// Our portfolio array (unchanged except for the added iframeUrl).
const portfolioItems = [
  {
    title: "Believe Resourcing Group",
    description:
      "A leading industry organisation in the RPO and BPO sector.",
    image: "/believeGroup.png",
    link: "https://www.believeresourcinggroup.com",
  },
  {
    title: "Hezekiah Creations",
    description:
      "A cushion manufacturing company.",
    image: "/hezekiahTest.jpg",
    link: "https://www.hezekiahcreations.com",
  },
  {
    title: "Ingenuity Africa",
    description:
      "A website and software devlopment company.",
    image: "/IA.png",
    link: "https://www.ingenuityafrica.co.za/",
  },
  {
    title: "Ingenuity Africa",
    description:
      "A website and software devlopment company.",
    iframeUrl: "https://www.ingenuityafrica.co.za/", // This item is now an iframe=
  },
  {
    title: "Moved",
    description:
      "A leading fitness and dietitian specialist organisation.",
    image: "/moved.png",
    link: "https://www.facebook.com/movedfit",
  },
  {
    title: "PhotoTrav",
    description:
      "A photography and travel agency based in Cape Town.",
    image: "/photoTrav.jpg",
    link: "https://www.facebook.com/PhotoTravSA/",
  },
  {
    title: "Believe Hub",
    description: "The Believe Hub drives career success through innovative workshops, expert guidance, and insights.",
    video: "/believeVideo.mp4",
    link: "https://thebelievehub.com/",
  },
];

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <section id="portfolio" className="min-h-screen py-12 bg-black">
        {/* Portfolio Header */}
        <div className="container mx-auto text-center py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore some of the projects we’ve worked on. From web development
            to Marketing, we deliver innovative and impactful results.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        {/* Notice we added 'auto-rows-fr' so that row-spanning items look nice */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {portfolioItems.map((item, index) => {
              const cardClasses = getCardClasses(item);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  // We inject the special classes here:
                  className={`relative group overflow-hidden rounded-2xl shadow-lg bg-opacity-50 hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 ${cardClasses}`}
                >
                  {/* Project Media (iframe, video, or image) */}
                  <div className="w-full h-full relative">
                    {item.iframeUrl ? (
                      <iframe
                        src={item.iframeUrl}
                        className="w-full h-full"
                        // optional security or features:
                        // sandbox="allow-same-origin allow-scripts"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Only show overlay if NO iframe */}
                    {!item.iframeUrl && (
                      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-center mb-6">{item.description}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
                          >
                            Visit Website
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-black text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let’s collaborate to bring your ideas to life. Contact us today to
            get started!
          </motion.p>
        </div>
        <Footer />
      </section>
    </>
  );
}