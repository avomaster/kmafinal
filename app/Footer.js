// app/Footer.js
"use client";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">Koch Media Agency</h2>
            <p className="mt-4 text-gray-500">
              A digital marketing and innovation agency focused on driving brand success through cutting-edge technology and strategic marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/homeMain", label: "Home" },
                { href: "/aboutUsMan", label: "About Us" },
                { href: "/servicesMain", label: "Services" },
                { href: "/contactMain", label: "Contact Us" },
                { href: "/workMain", label: "Work" },
                { href: "/blogMain", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#595959] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h2 className="text-xl font-semibold text-white">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a href="https://www.facebook.com/share/1CAXXzBtvJ/" className="text-gray-500 hover:text-blue-500 transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/kochmediaagency/" className="text-gray-500 hover:text-blue-600 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/kochmediaagency?igsh=ajg5c3U3OHZ3azNs" className="text-gray-500 hover:text-pink-500 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>

            <h2 className="text-xl font-semibold text-white mt-6">Subscribe to Our Newsletter</h2>
            <div className="mt-4 flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg w-full md:w-auto bg-gray-800 border border-gray-600 text-white outline-none"
              />
              <button className="mt-2 md:mt-0 md:ml-2 bg-gray-800 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Koch Media Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
