import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://kochmediaagency.com'),
  alternates: {
    canonical: '/blog/ai-marketing-2025'
  },
  title: 'Koch Media Agency - Full-Service Digital Solutions',
  description: 'Comprehensive digital marketing and technology solutions provider',
  keywords: 'digital marketing, web development, cybersecurity, software development, Zoho CRM',
  icons: {
    icon: "/KMAFavicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
