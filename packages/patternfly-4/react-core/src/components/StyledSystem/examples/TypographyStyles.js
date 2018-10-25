import React from 'react';
import { StyledConstants, StyledText } from '@patternfly/react-core';

class TypographyStyles extends React.Component {
  static title = 'Typography';

  render() {
    const { fonts, lineHeights, fontWeights, fontSizes } = StyledConstants;
    return (
      <React.Fragment>
        <StyledText fontFamily={fonts.monospace}>Font family: Monospace</StyledText>
        <StyledText fontFamily={fonts.sans_serif}>Font family: Sans serif</StyledText>

        <StyledText textAlign="center">Alignment: Centered text</StyledText>
        <StyledText textAlign={['center', 'center', 'center', 'left']}>
          Alignment: Centered text for smaller viewports, left aligned for wider viewports
        </StyledText>

        <StyledText lineHeight={lineHeights.sm}>Line height: small</StyledText>
        <StyledText lineHeight={lineHeights.md}>Line height: medium</StyledText>

        <StyledText fontWeight={fontWeights.light}>Font weight: light</StyledText>
        <StyledText fontWeight={fontWeights.semi_bold}>Font weight: semi bold</StyledText>
        <StyledText fontWeight={fontWeights.bold}>Font weight: bold</StyledText>

        <StyledText fontSize={fontSizes.sm}>Font size: small</StyledText>
        <StyledText fontSize={fontSizes.md}>Font size: medium</StyledText>
        <StyledText fontSize={fontSizes.lg}>Font size: large</StyledText>
      </React.Fragment>
    );
  }
}

export default TypographyStyles;
