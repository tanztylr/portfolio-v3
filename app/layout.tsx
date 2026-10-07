import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanza Taylor — Executive Editorial Portfolio',
  description: 'Project Manager & Operations Specialist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>{/* Navigation Bar */}</nav>
        </header>
        {children}
      </body>
    </html>
  );
}