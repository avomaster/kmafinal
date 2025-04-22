"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitPopup() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onMouseOut = (e) => {
      if (e.clientY < 0) setShown(true);
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  if (!shown) return null;
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-white text-black p-8 rounded-lg max-w-md text-center">
        <h3 className="text-2xl font-bold mb-4">Want Our AI Marketing Checklist?</h3>
        <p className="mb-6">
          Get our free 10‑step guide to implementing AI in your marketing strategy.
        </p>
        <Link href="/contact">
          <a className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Download Now
          </a>
        </Link>
        <button
          onClick={() => setShown(false)}
          className="mt-4 text-sm underline hover:text-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
