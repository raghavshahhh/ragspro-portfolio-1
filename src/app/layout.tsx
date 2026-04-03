import type { ReactNode } from 'react';
import "./globals.css";

export const metadata = {
  title: 'RAGS | WhatsApp AI Solutions for Business Growth',
  description: 'Transform your business with intelligent WhatsApp bots and automation. AI-powered WhatsApp solutions that handle sales, support, and engagement 24/7. Delhi, India.',
  keywords: 'WhatsApp bot, WhatsApp automation, AI chatbot, business automation, WhatsApp API, Delhi, India',
  authors: [{ name: 'RAGS Pro' }],
  creator: 'RAGS Pro',
  metadataBase: new URL('https://ragspro.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ragspro.com',
    siteName: 'RAGS - WhatsApp AI Solutions',
    title: 'RAGS | WhatsApp AI Solutions for Business Growth',
    description: 'Transform your business with intelligent WhatsApp bots and automation. 24/7 sales, support, and engagement.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RAGS WhatsApp Automation Agency',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAGS | WhatsApp AI Solutions',
    description: 'Transform your business with intelligent WhatsApp bots and automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ragspro.com',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
