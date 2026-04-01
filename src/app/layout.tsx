import type { ReactNode } from 'react';
import "./globals.css";

export const metadata = {
  title: 'RAGS Pro',
  description: 'Premium web development',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
