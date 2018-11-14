import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class WidthStyles extends React.Component {
  render() {
    const { borders, ratio } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
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
      </PatternFlyThemeProvider>
    );
  }
}

export default WidthStyles;
