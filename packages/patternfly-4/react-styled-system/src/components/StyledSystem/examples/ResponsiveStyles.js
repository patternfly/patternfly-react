import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox, StyledText } from '@patternfly/react-styled-system';

class ResponsiveStyles extends React.Component {
  render() {
    const { space, colors, fontSizes, borders } = StyledConstants;

    return (
      <PatternFlyThemeProvider>
        <StyledBox pb={space.md}>
          <StyledText py={space.md}>
            In this example, the Box widths are: 100% below the smallest breakpoint, 50% from the next breakpoint and
            up, 25% from the next breakpoint and up
          </StyledText>
          <StyledBox width={[1, 1 / 2, 1 / 4]} height={50} bg={colors.success_100} display="inline-block" />
          <StyledBox width={[1, 1 / 2, 1 / 4]} height={50} bg={colors.info_100} display="inline-block" />
          <StyledBox width={[1, 1 / 2, 1 / 4]} height={50} bg={colors.warning_100} display="inline-block" />
          <StyledBox width={[1, 1 / 2, 1 / 4]} height={50} bg={colors.danger_100} display="inline-block" />
          <StyledBox fontSize={[fontSizes.xl, fontSizes.lg, fontSizes.md, fontSizes.sm]}>
            This text changes the font size depending on the screen width
          </StyledBox>
          <StyledBox m={[space.xs, space.sm, space.md, space.lg]} height={50} border={borders.md}>
            This box has different margins depending on the screen width
          </StyledBox>
          <StyledBox p={[space.xs, space.sm, space.md, space.lg]} height={50} border={borders.md}>
            This box has different paddings depending on the screen width
          </StyledBox>
        </StyledBox>
      </PatternFlyThemeProvider>
    );
  }
}

export default ResponsiveStyles;
