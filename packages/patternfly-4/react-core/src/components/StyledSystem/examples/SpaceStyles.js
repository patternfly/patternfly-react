import React from 'react';
import { StyledConstants, StyledBox, StyledText } from '@patternfly/react-core';

class SpaceStyles extends React.Component {
  static title = 'Space';

  render() {
    const { fonts, space, fontWeights, borders } = StyledConstants;
    return (
      <React.Fragment>
        <StyledText fontWeight={fontWeights.semi_bold}>
          The space utility converts shorthand margin and padding props to margin and padding CSS declarations.
        </StyledText>
        <StyledText py={space.md} fontFamily={fonts.sans_serif}>
          <ul>
            <li>- Use StyledConstants.space with margin and padding props</li>
            <li>- Negative values from StyledConstants.space (neg_*) can be used for negative margins.</li>
            <li>- String values are passed as raw CSS values.</li>
            <li>- Array values are converted into responsive values.</li>
          </ul>
        </StyledText>
        <StyledBox m={space.md} border={borders.md}>
          sets medium margin value
        </StyledBox>
        <StyledBox m={space.neg_sm} border={borders.md}>
          sets negative medium margin value
        </StyledBox>
        <StyledBox m="auto" border={borders.md}>
          sets margin auto
        </StyledBox>
      </React.Fragment>
    );
  }
}

export default SpaceStyles;
