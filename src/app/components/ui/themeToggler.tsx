'use client';
import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

const ThemeToggler: FC = () => {
  const [mount, setMount] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!mount) return null;

  if (currentTheme === 'light') {
    return (
      <button
        className="capitalize flex gap-2 items-center"
        onClick={() => setTheme('dark')}
      >
        <FontAwesomeIcon icon={faMoon} />
        <span>dark mode</span>
      </button>
    );
  } else {
    return (
      <button
        className="capitalize flex gap-2 items-center"
        onClick={() => setTheme('light')}
      >
        <FontAwesomeIcon icon={faSun} />
        <span>light mode</span>
      </button>
    );
  }
};

export default ThemeToggler;
