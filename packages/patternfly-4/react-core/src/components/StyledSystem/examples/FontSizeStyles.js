import React from 'react';
import { StyledConstants, StyledText } from '@patternfly/react-core';

class FontSizeStyles extends React.Component {
  static title = 'Font Size';

  render() {
    const { fonts, space, fontSizes } = StyledConstants;
    return (
      <React.Fragment>
        <StyledText py={space.md} fontFamily={fonts.sans_serif}>
          <ul>
            <li>- Use StyledConstants.fontSizes to set a size</li>
            <li>- Array values are converted into responsive values.</li>
          </ul>
        </StyledText>
        <StyledText fontSize={fontSizes.lg}>Large font size</StyledText>
        <StyledText fontSize={[fontSizes.xs, fontSizes.lg, fontSizes.xxxxl]}>
          Extra small font for small viewports, large for the next breakpoint, and 4xl font from the 3rd breakpoint and up
        </StyledText>
      </React.Fragment>
    );
  }
}

export default FontSizeStyles;
