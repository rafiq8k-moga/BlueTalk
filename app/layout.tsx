import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BlueTalk — AI Character Messaging Experience',
  description:
    'BlueTalk is a fan-made AI character messaging simulator featuring immersive chat, manual dialogue creation, and story-based interactions.',
  openGraph: {
    title: 'BlueTalk — AI Character Messaging Experience',
    description:
      'BlueTalk is a fan-made AI character messaging simulator featuring immersive chat, manual dialogue creation, and story-based interactions.',
    images: ['/media/icon.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueTalk — AI Character Messaging Experience',
    description:
      'BlueTalk is a fan-made AI character messaging simulator featuring immersive chat, manual dialogue creation, and story-based interactions.',
    images: ['/media/icon.jpg']
  },
  icons: {
    icon: '/media/icon.jpg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
