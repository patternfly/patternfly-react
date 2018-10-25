import React from 'react';
import { StyledConstants, StyledBox, StyledText } from '@patternfly/react-core';

class ResponsiveStyles extends React.Component {
  static title = 'Responsive';

  render() {
    const { space, colors, fontSizes, fontWeights, borders } = StyledConstants;

    return (
      <StyledBox pb={space.md}>
        <StyledText fontWeight={fontWeights.semi_bold}>
          All props accept arrays as values for responsive styling. You can specify up to 4 array values for each of the
          breakpoints.
        </StyledText>
        <StyledText py={space.md}>
          In this example, the Box widths are: 100% below the smallest breakpoint, 50% from the next breakpoint and up,
          25% from the next breakpoint and up
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
    );
  }
}

export default ResponsiveStyles;
