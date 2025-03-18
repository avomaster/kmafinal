"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navItems = [
    { name: "Home", path: "/homeMain" },
    { name: "About", path: "/aboutUsMain" },
    { name: "Solutions", path: "/servicesMain" },
    { name: "Portfolio", path: "/workMain" },
    { name: "Insights", path: "/blogMain" },
    { name: "Contact", path: "/contactMain" },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-20px" },
  };

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-sm z-50 border-b border-gray-200/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="/KMA2-01.png"
              alt="Koch Media Agency"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation - Minimalist Style */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -1 }} className="relative">
              <Link
                href={item.path}
                className={`px-3 py-2 text-white text-lg font-medium transition-colors ${
                  currentPath === item.path 
                    ? "text-white font-semibold" 
                    : "hover:text-white"
                }`}
              >
                {item.name}
                {currentPath === item.path && (
                  <motion.div
                    className="absolute left-1/2 -bottom-1 h-[2px] w-4 bg-white -translate-x-1/2"
                    layoutId="activeNav"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle - Clean Design */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-white rounded-lg hover:bg-gray-100 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu - Transparent Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute w-full bg-black backdrop-blur-lg border-b border-white/80"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ x: 5 }} className="border-l-2 border-transparent pl-4">
                  <Link
                    href={item.path}
                    className={`block py-2 text-white text-lg font-medium transition-colors ${
                      currentPath === item.path
                        ? "text-white font-semibold"
                        : "hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
