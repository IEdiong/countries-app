'use client';
import ThemeToggler from './ui/themeToggler';

const Header = () => {
  return (
    <header className="w-full">
      <div className="shadow-md w-full px-4">
        <div className="container mx-auto flex items-center justify-between py-6 ">
          <h1 className="font-extrabold text-2xl dark:text-white">
            Where in the world?
          </h1>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
