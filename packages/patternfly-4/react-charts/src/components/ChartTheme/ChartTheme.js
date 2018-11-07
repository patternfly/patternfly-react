import ThemeDarkBlue from './theme-dark-blue';
import ThemeDarkGreen from './theme-dark-green';
import ThemeDarkMulti from './theme-dark-multi';
import ThemeLightBlue from './theme-light-blue';
import ThemeLightGreen from './theme-light-green';
import ThemeLightMulti from './theme-light-multi';

export default {
  default: ThemeLightBlue,
  dark: {
    blue: ThemeDarkBlue,
    green: ThemeDarkGreen,
    multi: ThemeDarkMulti
  },
  light: {
    blue: ThemeLightBlue,
    green: ThemeLightGreen,
    multi: ThemeLightMulti
  }
};
