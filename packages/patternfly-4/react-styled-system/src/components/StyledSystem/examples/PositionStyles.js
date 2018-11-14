import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox } from '@patternfly/react-styled-system';

class PositionStyles extends React.Component {
  render() {
    const { space, borders, zIndices, colors } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <StyledBox position="relative" height={200}>
          <StyledBox position="absolute" right={50} bottom={50} border={borders.sm}>
            Absolute position
          </StyledBox>
          <StyledBox
            position="absolute"
            zIndex={zIndices.md}
            width={1 / 2}
            height={30}
            border={borders.sm}
            bg={colors.primary_100}
          >
            higher zIndex
          </StyledBox>
          <StyledBox
            position="absolute"
            zIndex={zIndices.sm}
            m={space.lg}
            width={1}
            height={50}
            border={borders.sm}
            bg={colors.secondary_100}
          >
            lower zIndex
          </StyledBox>
        </StyledBox>
      </PatternFlyThemeProvider>
    );
  }
}

export default PositionStyles;
