import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
      <body className={inter.className}>{children}<Analytics/></body>
    </html>
  );
}