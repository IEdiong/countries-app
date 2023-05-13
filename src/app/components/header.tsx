// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from './ui/themeToggler';
// import { MoonIcon } from './ui/icon';

const Header = () => {
  return (
    <header className="w-full">
      <div className="shadow-md w-full px-4">
        <div className="container mx-auto flex items-center justify-between py-6 ">
          <h1 className="font-extrabold text-2xl">Where in the world?</h1>
          <ThemeToggler />

          {/* <button className="capitalize flex gap-2 items-center">
            <FontAwesomeIcon icon={faMoon} />
            <span>dark mode</span>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
