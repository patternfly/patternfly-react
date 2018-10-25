import React from 'react';
import { StyledConstants, StyledBox } from '@patternfly/react-core';

class BorderStyles extends React.Component {
  static title = 'Borders';

  render() {
    const { space, borders, radii, colors } = StyledConstants;
    return (
      <React.Fragment>
        <StyledBox m={space.md} border={borders.sm}>
          small border
        </StyledBox>
        <StyledBox m={space.md} border={borders.md}>
          medium border
        </StyledBox>
        <StyledBox m={space.md} border={borders.lg}>
          large border
        </StyledBox>
        <StyledBox
          m={space.md}
          borderTop={borders.sm}
          borderBottom={borders.sm}
          borderLeft={borders.lg}
          borderRight={borders.lg}
        >
          mixed borders
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

export default BorderStyles;
