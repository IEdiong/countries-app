import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/components/header';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { ThemeProvider } from './components/themeProvider';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

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
      <body
        className={`${nunito.variable} font-sans text-v-dark-blue bg-v-light-gray dark:bg-v-dark-blue-bg dark:text-white`}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
      <Script src="https://kit.fontawesome.com/ac47983efe.js" />
    </html>
  );
}
