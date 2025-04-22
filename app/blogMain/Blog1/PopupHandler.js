"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PopupHandler() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY < 0 && !localStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  const handleClosePopup = () => {
    setShowExitPopup(false);
    localStorage.setItem('popupClosed', 'true');
  };

  return (
    showExitPopup && (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="bg-white text-black p-8 rounded-lg max-w-md text-center relative">
          <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-2xl font-bold mb-4">Want Our AI Marketing Checklist?</h3>
          <p className="mb-6">Get our free 10‑step guide to implementing AI in your marketing strategy</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Download Now
          </Link>
        </div>
      </div>
    )
  );
}