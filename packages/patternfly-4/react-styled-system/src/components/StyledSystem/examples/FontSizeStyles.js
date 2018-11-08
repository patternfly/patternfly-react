import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledText } from '@patternfly/react-styled-system';

class FontSizeStyles extends React.Component {
  static title = 'Font Size';
  static description = `
    <em>Use StyledConstants.fontSizes to set a size.<br />
    Array values are converted into responsive values.</em>
  `;

  render() {
    const { fontSizes } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
          <StyledText fontSize={fontSizes.lg}>Large font size</StyledText>
          <StyledText fontSize={[fontSizes.xs, fontSizes.lg, fontSizes.xxxxl]}>
            Extra small font for small viewports, large for the next breakpoint, and 4xl font from the 3rd breakpoint and up
          </StyledText>
        </React.Fragment>
      </PatternFlyThemeProvider>
    );
  }
}

export default FontSizeStyles;
