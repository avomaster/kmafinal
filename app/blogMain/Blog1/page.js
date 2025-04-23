"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../navigation';
import Footer from '../../Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogAI2025() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Exit‑intent popup logic
  useEffect(() => {
    const handler = (e) => {
      if (e.clientY < 0 && !localStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
  }, []);

  const closePopup = () => {
    setShowExitPopup(false);
    localStorage.setItem('popupClosed', 'true');
  };

  return (
    <>
      <Navigation />

      {/* JSON‑LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Article",
          "headline":"AI‑Powered Marketing in 2025: How Generative AI is Revolutionizing Content & Ads",
          "author":{ "@type":"Person","name":"Your Name","url":"https://kochmedia.com/author/your-name" },
          "publisher":{
            "@type":"Organization","name":"Koch Media Agency",
            "logo":{ "@type":"ImageObject","url":"https://kochmedia.com/logo-black.png","width":600,"height":60 }
          },
          "datePublished":"2025-04-21",
          "image":{ "@type":"ImageObject","url":"https://kochmedia.com/headerpic.avif","width":1200,"height":630 },
          "description":"Comprehensive analysis of generative AI's impact on marketing strategies in 2025 with actionable insights from industry experts."
        })}
      </script>

      {/* Exit‑Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black p-8 rounded-lg max-w-md text-center relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Want Our AI Marketing Checklist?</h3>
            <p className="mb-6">Get our free 10‑step guide to implementing AI in your marketing strategy.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Download Now
            </Link>
          </div>
        </div>
      )}

      <main className="bg-black text-white min-h-screen pt-32 pb-16 px-6 lg:px-32">
        <article className="max-w-4xl mx-auto pb-32">

          {/* Hero Banner */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-white/10 pb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI‑Powered Marketing in 2025: How Generative AI is Revolutionizing Content & Ads
            </h1>
            <div className="flex items-center text-gray-400 space-x-4 mb-8">
              <time dateTime="2025-04-21">April 22, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <div className="relative w-full h-96 rounded-xl overflow-hidden border border-white/20">
              <Image
                src="/headerpic.avif"
                alt="AI marketing illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.header>

          {/* Table of Contents */}
          <nav aria-label="In This Article" className="mb-16">
            <div className="flex items-center mb-4">
              <span className="inline-block w-1 h-5 bg-gray-700 mr-3"></span>
              <h3 className="text-sm font-semibold text-gray-400">In This Article</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ['landscape','2025 Marketing Landscape'],
                ['content-creation','AI‑Driven Content Creation'],
                ['ads-personalization','AI‑Enhanced Advertising'],
                ['industry-use-cases','Industry Use Cases'],
                ['ethics','Ethical Considerations'],
                ['conclusion','Conclusion & CTA']
              ].map(([id, label]) => (
                <li key={id}>
                  <Link href={`#${id}`} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Section 1 */}
          <section id="landscape" className="mb-16 space-y-4">
            <h2 className="text-2xl font-semibold">
              The 2025 Marketing Landscape: Generative AI Goes Mainstream
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Generative AI has moved from novelty to necessity in marketing. A McKinsey survey shows 92% of companies plan to increase AI investment over the next three years.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From startups to enterprises, 73% of marketers now leverage tools like ChatGPT to draft copy, ideate campaigns, and personalize content at scale.
            </p>
          </section>

          {/* Section 2 */}
          <section id="content-creation" className="mb-16 space-y-4">
            <h2 className="text-2xl font-semibold">
              AI‑Driven Content Creation: Faster Production, Smarter Content
            </h2>
            <p className="text-gray-300 leading-relaxed">
              AI can generate blog posts, social updates, and product descriptions in seconds—freeing your team to focus on strategy and creative oversight.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Volume &amp; Speed:</strong> Produce dozens of content variants in minutes.</li>
              <li><strong>Personalization:</strong> Tailor tone and messaging for distinct audience segments.</li>
              <li><strong>SEO Insights:</strong> AI‑driven briefs recommend optimal keywords and headings for higher rankings.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="ads-personalization" className="mb-16 space-y-4">
            <h2 className="text-2xl font-semibold">AI‑Enhanced Advertising and Personalization</h2>
            <p className="text-gray-300 leading-relaxed">
              Platforms like Google and Meta auto‑generate ad variations with generative AI, optimizing bids and creatives in real time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over 1 million advertisers on Meta produced 15 million AI‑driven ad variants in a single month, enabling rapid A/B testing and higher ROI.
            </p>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">Case Studies</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Heinz’s “Even AI Knows Ketchup”</strong>: DALL·E outputs resembled Heinz bottles 95% of the time.</li>
                <li><strong>Coca‑Cola’s “Create Real Magic”</strong>: GPT‑4 + DALL·E generated 50K+ artworks, driving a 27% engagement spike.</li>
                <li><strong>Nike’s AI‑Driven Legacy Campaign</strong>: ML recreated Serena Williams’ playstyles into an 8‑minute viral video with 1.7M views.</li>
              </ul>
            </article>
          </section>

          {/* Section 4 */}
          <section id="industry-use-cases" className="mb-16 space-y-4">
            <h2 className="text-2xl font-semibold">Industry Spotlights: Generative AI Across Sectors</h2>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">E‑commerce &amp; Retail</h3>
              <p className="text-gray-300 leading-relaxed">
                AI‑generated descriptions and personalized recommendations boost conversions by 20% and AOV by 15%.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">HR &amp; Recruitment</h3>
              <p className="text-gray-300 leading-relaxed">
                Automated job postings and outreach increase response rates by 25% and cut time‑to‑hire by 30%.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">Sports &amp; Entertainment</h3>
              <p className="text-gray-300 leading-relaxed">
                AI automates game recaps, highlight reels, and predictive analytics, keeping fans engaged around the clock.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">Travel &amp; Hospitality</h3>
              <p className="text-gray-300 leading-relaxed">
                AI‑powered chatbots and itineraries drive over 500% traffic growth and higher booking conversions.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-xl font-medium">Manufacturing &amp; B2B</h3>
              <p className="text-gray-300 leading-relaxed">
                AI transforms technical specs into engaging collateral—driving an 18% lift in leads and halving content creation time.
              </p>
            </article>
          </section>

          {/* Section 5 */}
          <section id="ethics" className="mb-16 space-y-4">
            <h2 className="text-2xl font-semibold">Ethical Considerations & the Human Touch</h2>
            <p className="text-gray-300 leading-relaxed">
              AI delivers scale, but human oversight is crucial to preserve brand voice, prevent bias, and ensure originality.
            </p>
          </section>

          <section className="my-16 border-y border-white/10 py-12">
  <h3 className="text-center text-sm font-semibold mb-8 text-gray-400">
    Trusted By Industry Leaders
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="justify-self-start transform transition hover:-translate-y-1">
      <Image
        src="/rudy-logo.jpg"
        alt="Rudy Project Logo"
        width={150}
        height={60}
        className="h-10 w-auto"
        loading="lazy"
      />
    </div>
    <div className="justify-self-center transform transition hover:-translate-y-1">
      <Image
        src="/coca-cola-logo.svg"
        alt="Coca‑Cola Logo"
        width={150}
        height={80}
        className="h-10 w-auto"
        loading="lazy"
      />
    </div>
    <div className="justify-self-start transform transition hover:-translate-y-1">
      <Image
        src="/believe-logo.png"
        alt="Believe Resourcing Logo"
        width={150}
        height={60}
        className="h-10 w-auto"
        loading="lazy"
      />
    </div>
    <div className="justify-self-center transform transition hover:-translate-y-1">
      <Image
        src="/mercedes-benz-logo2.png"
        alt="Mercedes Benz Logo"
        width={150}
        height={60}
        className="h-10 w-auto"
        loading="lazy"
      />
    </div>
  </div>
</section>

          {/* CTA Section */}
          <motion.section
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.15)' }}
            className="mt-12 text-center p-12 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300"
            id="conclusion"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Marketing with AI?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Partner with Koch Media Agency to integrate generative AI into your strategy—faster content, smarter ads, and personalized experiences without losing your brand’s unique voice.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-bold"
            >
              Contact Us Today
            </Link>
          </motion.section>

          {/* Grey Divider (halved margin) */}
          <div className="mx-auto my-6 w-1/2 border-t border-gray-700" />

        </article>
      </main>

      <Footer />
    </>
  );
}