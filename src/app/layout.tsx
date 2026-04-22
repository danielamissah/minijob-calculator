import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Minijob Calculator Germany | Net Pay & Tax Calculator 2025',
  description:
    'Calculate your exact net pay, employer costs, and social contributions for Minijob and Midijob employment in Germany. Free, accurate, updated for 2025.',
  keywords: [
    'minijob rechner',
    'minijob calculator germany',
    'minijob 2025',
    'midijob rechner',
    'mini job calculator',
    'geringfügige beschäftigung',
    'minijob netto',
  ],
  openGraph: {
    title: 'Minijob Calculator Germany 202',
    description: 'Instantly calculate net pay, employer costs and social contributions for Minijob & Midijob.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}