import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Heqing Laser | Professional Laser Equipment Manufacturer',
    template: '%s | Heqing Laser',
  },
  description:
    'Heqing Laser - Leading manufacturer of fiber laser cutting, welding, cleaning and marking machines. 10+ years experience, global service, fast delivery.',
  keywords: [
    'laser cutting machine',
    'laser welding machine',
    'laser cleaning machine',
    'laser marking machine',
    'fiber laser',
    'CNC laser',
    'industrial laser',
    'Heqing Laser',
  ],
  openGraph: {
    title: 'Heqing Laser | Professional Laser Equipment Manufacturer',
    description:
      'Professional laser equipment manufacturer with 10+ years experience. Fiber laser cutting, welding, cleaning & marking solutions.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className="antialiased">
        {isDev && <Inspector />}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
