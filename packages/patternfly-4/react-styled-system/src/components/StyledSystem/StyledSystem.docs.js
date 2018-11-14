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
    {
      component: SpaceStyles,
      title: 'Space',
      description: `
    <em>The space utility converts shorthand margin and padding props to margin and padding CSS declarations.<br />
    Use StyledConstants.space with margin and padding props<br />
    Negative values from StyledConstants.space (neg_*) can be used for negative margins.<br />
    String values are passed as raw CSS values.<br />
    Array values are converted into responsive values.</em>
    `
    },
    {
      component: WidthStyles,
      title: 'Width',
      description: `
    <em>Numbers from 0-1 are converted to percentage widths.<br />
    Numbers greater than 1 are converted to pixel values.<br />
    String values are passed as raw CSS values.<br />
    Array values are converted into responsive width styles.<br /></em>
    `
    },
    {
      component: ResponsiveStyles,
      title: 'Responsive',
      description:
        '<em>All props accept arrays as values for responsive styling. You can specify up to 4 array values for each of the breakpoints.</em>'
    },
    { component: FlexStyles, title: 'Flex' },
    {
      component: FontSizeStyles,
      title: 'Font Size',
      description: `
      <em>Use StyledConstants.fontSizes to set a size.<br />
      Array values are converted into responsive values.</em>
    `
    },
    {
      component: ColorStyles,
      title: 'Colors',
      description: `
      <em>Use color or bg (background) props with StyledConstants.colors to set a color.<br />
      Array values are converted into responsive values.</em>
    `
    },
    { component: TypographyStyles, title: 'Typography' },
    { component: BorderStyles, title: 'Borders' },
    { component: BoxShadowStyles, title: 'Box Shadow' },
    { component: PositionStyles, title: 'Position' },
    {
      component: OverrideTheme,
      title: 'Override Theme',
      description: `
    <em><p>You can override the theme by supplying a theme object.</p>
    <p>If multiple PatternFlyThemeProviders are nested, the theme object of the lower provider will be merged into the ancestor theme.</p></em>`
    }
  ],
  description: `
    <strong>Warning, the StyledSystem components are experimental and in their own package @patternfly/react-styled-system. Use at your own risk!</strong><br />
    The PatternFlyThemeProvider component maps CSS to PatternFly global values that can be used with StyledBox, StyledFlex, and StyledText components.<br />
    The StyledFlex and StyledText components inherit all the props from StyledBox in addition to their own props.<br />
    To apply the PatternFly theme, use <PatternFlyThemeProvider> at the root of your application.`
};
