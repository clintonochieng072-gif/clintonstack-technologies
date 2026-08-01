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
  description: 'ClintonStack Technologies designs premium software, AI systems, and digital products for modern businesses.',
  applicationName: 'ClintonStack Technologies',
  authors: [{ name: 'ClintonStack Technologies' }],
  keywords: ['ClintonStack', 'software company', 'AI automation', 'SaaS', 'Kenya', 'digital transformation'],
  openGraph: {
    title: 'ClintonStack Technologies',
    description: 'Premium software, AI systems, and digital experiences for ambitious companies.',
    url: 'https://clintonstack.com',
    siteName: 'ClintonStack Technologies',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'ClintonStack team building software',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClintonStack Technologies',
    description: 'Premium software, AI systems, and digital experiences for ambitious companies.',
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
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

