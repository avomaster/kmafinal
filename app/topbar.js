"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function TopBar() {
    return (
      <div className="w-full bg-black bg-opacity-95 py-2 border-b border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm text-gray-400">
          <div>
            <span className="mr-3">Email:</span>
            <a href="mailto:info@kochmediaagency.com" className="hover:text-gray-200 transition">
              info@kochmediaagency.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="mr-2">Call:</span>
            <a href="tel:+27211234567" className="hover:text-gray-200 transition">
              +27 21 123 4567
            </a>
            {/* Optional Social Icons */}
            <Link href="https://linkedin.com" className="hover:text-gray-200 transition" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.787-1.75-1.757 0-.97.784-1.757 1.75-1.757s1.75.787 1.75 1.757c0 .97-.784 1.757-1.75 1.757zm13.5 11.3h-3v-5.604c0-1.337-.027-3.061-1.868-3.061-1.869 0-2.156 1.46-2.156 2.969v5.696h-3v-10h2.882v1.367h.041c.402-.762 1.384-1.564 2.847-1.564 3.043 0 3.605 2.003 3.605 4.611v5.586z"/>
              </svg>
            </Link>
            <Link href="https://twitter.com" className="hover:text-gray-200 transition" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.762.127 1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.727-.666 1.571-.666 2.475 0 1.706.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.418-1.68 1.318-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.001-7.496 14.001-13.986 0-.21-.005-.423-.015-.633.961-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default TopBar;