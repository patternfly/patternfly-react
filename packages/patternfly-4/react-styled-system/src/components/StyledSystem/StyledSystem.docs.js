import { PatternFlyThemeProvider, StyledBox, StyledFlex, StyledText } from '@patternfly/react-styled-system';
import SpaceStyles from './examples/SpaceStyles';
import ResponsiveStyles from './examples/ResponsiveStyles';
import FlexStyles from './examples/FlexStyles';
import WidthStyles from './examples/WidthStyles';
import FontSizeStyles from './examples/FontSizeStyles';
import ColorStyles from './examples/ColorStyles';
import TypographyStyles from './examples/TypographyStyles';
import BorderStyles from './examples/BorderStyles';
import BoxShadowStyles from './examples/BoxShadowStyles';
import PositionStyles from './examples/PositionStyles';
import OverrideTheme from './examples/OverrideTheme';

export default {
  title: 'StyledSystem',
  components: {
    PatternFlyThemeProvider,
    StyledBox,
    StyledFlex,
    StyledText
  },
  examples: [
    SpaceStyles,
    WidthStyles,
    ResponsiveStyles,
    FlexStyles,
    FontSizeStyles,
    ColorStyles,
    TypographyStyles,
    BorderStyles,
    BoxShadowStyles,
    PositionStyles,
    OverrideTheme
  ],
  description: `
    <strong>Warning, the StyledSystem components are experimental and in their own package @patternfly/react-styled-system. Use at your own risk!</strong><br />
    The PatternFlyThemeProvider component maps CSS to PatternFly global values that can be used with StyledBox, StyledFlex, and StyledText components.<br />
    The StyledFlex and StyledText components inherit all the props from StyledBox in addition to their own props.<br />
    To apply the PatternFly theme, use <PatternFlyThemeProvider> at the root of your application.`
};
