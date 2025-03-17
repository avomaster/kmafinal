"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import Navigation from "../navigation";
import Footer from "../Footer";

export default function Contact() {
    return (
        <>
            <Navigation />
            <section className="min-h-screen bg-black text-gray-300 py-20 px-6">
                <div className="container mx-auto text-center">
                    {/* Hero Section */}
                    <motion.h2
                        className="text-4xl mt-7 md:text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Need help with your brand? Drop us a message and let&apos;s talk!
                    </p>

                    {/* Contact Form & Details Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Contact Form - WHITE CARD */}
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-2xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold text-black">Send Us a Message</h3>
                            <form className="mt-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-black focus:outline-none focus:border-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-black focus:outline-none focus:border-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-black focus:outline-none focus:border-black"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-black focus:outline-none focus:border-black"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-black p-3 rounded-lg text-white font-semibold hover:bg-gray-900 transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Details - WHITE CARDS */}
                        <motion.div
                            className="flex flex-col items-center space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Phone Number */}
                            <motion.a
                                href="tel:+27611670311"
                                className="group flex items-center space-x-4 p-4 rounded-xl bg-white hover:bg-gray-50 w-full max-w-md transition-all shadow-lg"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="p-3 bg-black rounded-lg">
                                    <FiPhone className="text-2xl text-white" />
                                </div>
                                <span className="text-lg text-gray-800 group-hover:text-black">
                                    +27 61 167 0311
                                </span>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                href="mailto:Info@kochmediaagency.com"
                                className="group flex items-center space-x-4 p-4 rounded-xl bg-white hover:bg-gray-50 w-full max-w-md transition-all shadow-lg"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="p-3 bg-black rounded-lg">
                                    <FiMail className="text-2xl text-white" />
                                </div>
                                <span className="text-lg text-gray-800 group-hover:text-black">
                                    Info@kochmediaagency.com
                                </span>
                            </motion.a>

                            {/* Address */}
                            <motion.a
                                href="https://maps.google.com/?q=Melkbosstrand,Cape+Town,South+Africa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-4 p-4 rounded-xl bg-white hover:bg-gray-50 w-full max-w-md transition-all shadow-lg"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="p-3 bg-black rounded-lg">
                                    <FiMapPin className="text-2xl text-white" />
                                </div>
                                <span className="text-lg text-gray-800 group-hover:text-black">
                                    Melkbosstrand, Cape Town, South Africa
                                </span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}