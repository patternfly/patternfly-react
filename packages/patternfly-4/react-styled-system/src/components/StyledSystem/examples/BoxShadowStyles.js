import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class BoxShadowStyles extends React.Component {
  render() {
    const { space, borders, radii, colors, shadows } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
          <StyledBox m={space.md} boxShadow={shadows.sm}>
            small shadow
          </StyledBox>
          <StyledBox m={space.md} boxShadow={shadows.md}>
            medium shadow
          </StyledBox>
          <StyledBox m={space.md} boxShadow={shadows.lg}>
            large shadow
          </StyledBox>
          <StyledBox m={space.md} boxShadow={shadows.inset}>
            inset shadow
          </StyledBox>
          <StyledBox m={space.md} boxShadow={`${shadows.sm_right}, ${shadows.sm_bottom}`}>
            right and bottom shadow
          </StyledBox>
          <StyledBox m={space.md} border={borders.md} borderRadius={radii.lg}>
            border radius
          </StyledBox>
          <StyledBox m={space.md} border={borders.md} borderColor={colors.border_dark}>
            border color
          </StyledBox>
        </React.Fragment>
      </PatternFlyThemeProvider>
    );
  }
}

export default BoxShadowStyles;
