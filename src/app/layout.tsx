import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrganizationSchema from '@/components/OrganizationSchema';

const siteUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.heqingcnc.com';

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
    'HQ Laser',
    'laser equipment manufacturer',
    'China laser machine',
  ],
  authors: [{ name: 'Heqing Laser' }],
  creator: 'Heqing Laser',
  publisher: 'Heqing Laser',
  openGraph: {
    title: 'Heqing Laser | Professional Laser Equipment Manufacturer',
    description:
      'Professional laser equipment manufacturer with 10+ years experience. Fiber laser cutting, welding, cleaning & marking solutions.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Heqing Laser',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Heqing Laser - Professional Laser Equipment Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heqing Laser | Professional Laser Equipment Manufacturer',
    description:
      'Professional laser equipment manufacturer with 10+ years experience. Fiber laser cutting, welding, cleaning & marking solutions.',
    images: [`${siteUrl}/images/og-image.jpg`],
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
  verification: {
    google: 'google1de4a6d04423502b.html', // Google Search Console verification
  },
  other: {
    // Google Search Console verification
    'google-site-verification': 'google1de4a6d04423502b.html',
    // 微信浏览器兼容
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'format-detection': 'telephone=no',
    // 微信特定 meta 标签
    'x5-orientation': 'portrait',
    'x5-fullscreen': 'true',
    'x5-page-mode': 'app',
    // 移动端优化
    'mobile-web-app-capable': 'yes',
    'application-name': 'Heqing Laser',
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
        <OrganizationSchema siteUrl={siteUrl} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
