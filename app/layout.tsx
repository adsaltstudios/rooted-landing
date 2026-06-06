import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rooted-landing-five.vercel.app'),
  title: 'Rooted: Postpartum, held together.',
  description:
    'Rooted is the calm command center for new parents. Track Mom\'s recovery and Baby\'s care, side by side, so neither of you has to hold it all in your head.',
  openGraph: {
    title: 'Rooted: Postpartum, held together.',
    description: 'The calm command center for new parents.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
