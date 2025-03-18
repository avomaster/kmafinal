import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Koch Media Agency - Full-Service Digital Solutions',
  description: 'Comprehensive digital marketing and technology solutions provider',
  keywords: 'digital marketing, web development, cybersecurity, software development, Zoho CRM',
  icons: {
    icon: "/KOCH MEDIA AGENCY LOGO CONCEPTS copy 06 Artboard 5 Copy.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}