import React from 'react';
import { StyledConstants, StyledBox, StyledText } from '@patternfly/react-core';

class WidthStyles extends React.Component {
  static title = 'Width';

  render() {
    const { fonts, space, borders, ratio } = StyledConstants;
    return (
      <React.Fragment>
        <StyledText py={space.md} fontFamily={fonts.sans_serif}>
          <ul>
            <li>- Numbers from 0-1 are converted to percentage widths.</li>
            <li>- Numbers greater than 1 are converted to pixel values.</li>
            <li>- String values are passed as raw CSS values.</li>
            <li>- Array values are converted into responsive width styles.</li>
          </ul>
        </StyledText>
        <StyledBox width={1 / 2} border={borders.md}>
          width 50%
        </StyledBox>
        <StyledBox width={256} border={borders.md}>
          width 256px
        </StyledBox>
        <StyledBox width="4em" border={borders.md}>
          width 4em
        </StyledBox>
        <StyledBox width={[1, 1 / 2]} border={borders.md}>
          width `100%` when less than first breakpoint, and `50%` from the second breakpoint and up
        </StyledBox>
        <StyledBox height={100} width={100 * ratio.golden} border={borders.md}>
          golden ratio: width = height * ratio
        </StyledBox>
      </React.Fragment>
    );
  }
}

export default WidthStyles;
