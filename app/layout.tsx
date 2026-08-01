import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: {
    default: 'ClintonStack Technologies',
    template: '%s | ClintonStack Technologies',
  },
  description: 'We build software, websites, AI systems and automation tools that help businesses grow faster.',
  applicationName: 'ClintonStack Technologies',
  authors: [{ name: 'ClintonStack Technologies' }],
  keywords: [
    'ClintonStack',
    'software development',
    'AI automation',
    'SaaS',
    'Kenya',
    'digital transformation',
  ],
  openGraph: {
    title: 'ClintonStack Technologies',
    description: 'We build software, websites, AI systems and automation tools that help businesses grow faster.',
    url: 'https://clintonstack.com',
    siteName: 'ClintonStack Technologies',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Team collaborating',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClintonStack Technologies',
    description: 'Custom software, websites and AI automation for businesses.',
    images: ['https://clintonstack.com/og-image.png'],
    site: '@clintonstack',
  },
  alternates: {
    canonical: 'https://clintonstack.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

