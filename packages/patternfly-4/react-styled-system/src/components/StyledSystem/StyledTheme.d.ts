import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface Space {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  neg_sm: number;
  neg_md: number;
  neg_lg: number;
  neg_xl: number;
  neg_xxl: number;
  neg_xxxl: number;
  gutter: string;
  neg_gutter: string;
}
export interface Fonts {
  sans_serif: string;
  monospace: string;
}
export interface FontWeights {
  light: string;
  normal: string;
  semi_bold: string;
  bold: string;
  link: string;
}
export interface LineHeights {
  sm: string;
  md: string;
}
export interface FontSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  xxxxl: number;
}
export interface Radii {
  sm: string;
  lg: string;
}
export interface Borders {
  sm: string;
  md: string;
  lg: string;
}
export interface Colors {
  bg_100: string;
  bg_200: string;
  bg_300: string;
  bg_light_100: string;
  bg_light_200: string;
  bg_light_300: string;
  bg_dark_100: string;
  bg_dark_200: string;
  bg_dark_transparent_100: string;
  bg_dark_transparent_200: string;
  color_100: string;
  color_200: string;
  light_100: string;
  light_200: string;
  dark_100: string;
  dark_200: string;
  active_100: string;
  active_200: string;
  active_300: string;
  disabled_100: string;
  disabled_200: string;
  primary_100: string;
  primary_200: string;
  primary_light_100: string;
  primary_dark_100: string;
  secondary_100: string;
  success_100: string;
  success_200: string;
  info_100: string;
  info_200: string;
  warning_100: string;
  warning_200: string;
  danger_100: string;
  danger_200: string;
  danger_300: string;
  link: string;
  link_hover: string;
  link_light_hover: string;
  border: string;
  border_light: string;
  border_light_200: string;
  border_dark: string;
}
export interface ZIndices {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}
export interface Ratio {
  golden: number;
}
export interface Shadows {
  sm: string;
  sm_left: string;
  sm_right: string;
  sm_bottom: string;
  sm_top: string;
  md: string;
  md_left: string;
  md_right: string;
  md_bottom: string;
  md_top: string;
  lg: string;
  lg_left: string;
  lg_right: string;
  lg_bottom: string;
  lg_top: string;
  inset: string;
}
export interface StyledConstants {
  space: {
    [key: string]: Space;
  };
  fonts: {
    [key: string]: Fonts;
  };
  fontWeights: {
    [key: string]: FontWeights;
  };
  lineHeights: {
    [key: string]: LineHeights;
  };
  fontSizes: {
    [key: string]: FontSizes;
  };
  radii: {
    [key: string]: Radii;
  };
  borders: {
    [key: string]: Borders;
  };
  colors: {
    [key: string]: Colors;
  };
  zIndex: {
    [key: string]: ZIndices;
  };
  ratio: {
    [key: string]: Ratio;
  };
  shadows: {
    [key: string]: Shadows;
  };
}

export interface PatternFlyThemeProviderProps extends HTMLProps<HTMLDivElement> {
  theme?: Object;
  children: ReactNode;
}

declare const PatternFlyThemeProvider: FunctionComponent<PatternFlyThemeProviderProps>;

export default PatternFlyThemeProvider;
