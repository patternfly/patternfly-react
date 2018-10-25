import React from 'react';
import { StyledConstants, StyledBox } from '@patternfly/react-core';

class BoxShadowStyles extends React.Component {
  static title = 'Box Shadow';

  render() {
    const { space, borders, radii, colors, shadows } = StyledConstants;
    return (
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
    );
  }
}

export default BoxShadowStyles;
