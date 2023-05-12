import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Where in the world? | Home',
  description: 'List of countries in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
