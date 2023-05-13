import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface ThemeIcon {
  mode: 'light' | 'dark';
}

export const MoonIcon = function ({ mode, ...props }: ThemeIcon) {
  if (mode === 'light') {
    return <FontAwesomeIcon icon={faSun} {...props} />;
  } else {
    return <FontAwesomeIcon icon={faMoon} {...props} />;
  }
};
