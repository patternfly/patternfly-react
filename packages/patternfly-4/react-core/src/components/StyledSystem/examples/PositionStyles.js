import React from 'react';
import { StyledConstants, StyledBox } from '@patternfly/react-core';

class PositionStyles extends React.Component {
  static title = 'Position';

  render() {
    const { space, borders, zIndex, colors } = StyledConstants;
    return (
      <StyledBox position="relative" height={200}>
        <StyledBox position="absolute" right={50} bottom={50} border={borders.sm}>
          Absolute position
        </StyledBox>
        <StyledBox
          position="absolute"
          zIndex={zIndex.md}
          width={1 / 2}
          height={30}
          border={borders.sm}
          bg={colors.primary_100}
        >
          higher zIndex
        </StyledBox>
        <StyledBox
          position="absolute"
          zIndex={zIndex.sm}
          m={space.lg}
          width={1}
          height={50}
          border={borders.sm}
          bg={colors.secondary_100}
        >
          lower zIndex
        </StyledBox>
      </StyledBox>
    );
  }
}

export default PositionStyles;
