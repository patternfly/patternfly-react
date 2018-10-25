import { StyledBox, StyledFlex, StyledText } from '@patternfly/react-core';
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

export default {
  title: 'StyledSystem',
  components: {
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
    PositionStyles
  ],
  description: `
    Maps CSS to PF-Core global values where possible with StyledBox, StyledFlex, and StyledText. 
    StyledFlex and StyledText inherit all the props from StyledBox in addition to the props outlined below.`
};
