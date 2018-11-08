import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class SpaceStyles extends React.Component {
  static title = 'Space';
  static description = `
  <em>The space utility converts shorthand margin and padding props to margin and padding CSS declarations.<br />
  Use StyledConstants.space with margin and padding props<br />
  Negative values from StyledConstants.space (neg_*) can be used for negative margins.<br />
  String values are passed as raw CSS values.<br />
  Array values are converted into responsive values.</em>
  `;

  render() {
    const { space, borders } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
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
      </PatternFlyThemeProvider>
    );
  }
}

export default SpaceStyles;
