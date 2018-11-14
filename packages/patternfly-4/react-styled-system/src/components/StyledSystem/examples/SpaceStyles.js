import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class SpaceStyles extends React.Component {
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
