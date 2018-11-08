import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class ColorStyles extends React.Component {
  static title = 'Colors';
  static description = `
    <em>Use color or bg (background) props with StyledConstants.colors to set a color.<br />
    Array values are converted into responsive values.</em>
  `;

  render() {
    const { colors } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
          <StyledBox bg={colors.bg_dark_100}>
            <StyledBox color={colors.light_100}>Light text on dark background</StyledBox>
          </StyledBox>
          <StyledBox bg={colors.bg_dark_transparent_200}>
            <StyledBox color={colors.light_200}>Light text on dark transparent background</StyledBox>
          </StyledBox>
        </React.Fragment>
      </PatternFlyThemeProvider>
    );
  }
}

export default ColorStyles;
