import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/header';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from './components/themeProvider';
config.autoAddCss = false;

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} font-sans text-v-dark-blue dark:text-white bg-v-light-gray dark:bg-v-dark-blue-bg`}
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

// ! Next Fonts Optimazition not working on storybook
// https://github.com/storybookjs/storybook/blob/next/code/frameworks/nextjs/README.md#nextjs-font-optimization
