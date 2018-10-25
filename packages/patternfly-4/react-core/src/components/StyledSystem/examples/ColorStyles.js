import React from 'react';
import { StyledConstants, StyledBox, StyledText } from '@patternfly/react-core';

class ColorStyles extends React.Component {
  static title = 'Colors';

  render() {
    const { fonts, space, colors } = StyledConstants;
    return (
      <React.Fragment>
        <StyledText py={space.md} fontFamily={fonts.sans_serif}>
          <ul>
            <li>- Use color or bg (background) props with StyledConstants.colors to set a color</li>
            <li>- Array values are converted into responsive values.</li>
          </ul>
        </StyledText>
        <StyledBox bg={colors.bg_dark_100}>
          <StyledBox color={colors.light_100}>Light text on dark background</StyledBox>
        </StyledBox>
        <StyledBox bg={colors.bg_dark_transparent_200}>
          <StyledBox color={colors.light_200}>Light text on dark transparent background</StyledBox>
        </StyledBox>
      </React.Fragment>
    );
  }
}

export default ColorStyles;
