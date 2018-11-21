import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox, StyledFlex, StyledText } from '@patternfly/react-styled-system';

class FlexStyles extends React.Component {
  render() {
    const { fonts, space, colors, fontSizes } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <StyledText fontFamily={fonts.monospace}>
          <StyledBox px={space.md} py={space.xl} color={colors.color_100} bg={colors.bg_100}>
            <StyledBox component="h1" fontSize={[fontSizes.md, fontSizes.lg, fontSizes.xl, fontSizes.xxl]}>
              Hello World
            </StyledBox>
          </StyledBox>
          <StyledFlex px={space.md} py={space.xl} alignItems="center">
            <StyledBox color={colors.color_200}>Left Text</StyledBox>
            <StyledBox mx="auto" />
            <StyledBox color={colors.dark_200}>Right Text</StyledBox>
          </StyledFlex>
        </StyledText>
      </PatternFlyThemeProvider>
    );
  }
}

export default FlexStyles;
