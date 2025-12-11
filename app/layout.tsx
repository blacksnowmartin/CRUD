import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '4DKenya - Higher-Dimensional Visualization Engine',
  description: 'A web-based higher-dimensional visualization and prototyping engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

