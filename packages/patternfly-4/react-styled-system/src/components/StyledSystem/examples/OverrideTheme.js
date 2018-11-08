import React from 'react';
import { PatternFlyThemeProvider, StyledConstants, StyledBox, StyledText } from '@patternfly/react-styled-system';

class OverrideTheme extends React.Component {
  static title = 'Override Theme';
  static description = `
  <em><p>You can override the theme by supplying a theme object.</p>
  <p>If multiple PatternFlyThemeProviders are nested, the theme object of the lower provider will be merged into the ancestor theme.</p></em>`;

  render() {
    const { colors } = StyledConstants;
    const customTheme = {
      fontSizes: ['0.5rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem'],
      colors: {
        bg_dark_100: 'black',
        bg_dark_transparent_200: 'brown',
        color_100: 'red',
        light_100: 'blue',
        light_200: 'yellow'
      }
    };
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
          <StyledText fontSize={3}>Original font size</StyledText>
          <StyledBox bg={colors.bg_dark_100}>
            <StyledBox color={colors.light_100}>Light text on dark background</StyledBox>
          </StyledBox>
          <StyledBox bg={colors.bg_dark_transparent_200}>
            <StyledBox color={colors.light_200}>Light text on dark transparent background</StyledBox>
          </StyledBox>

          <PatternFlyThemeProvider theme={customTheme}>
            <React.Fragment>
              <StyledText fontSize={3}>Overridden font size</StyledText>
              <StyledBox bg={colors.bg_dark_100}>
                <StyledBox color={colors.light_100}>Blue text on black background</StyledBox>
              </StyledBox>
              <StyledBox bg={colors.bg_dark_transparent_200}>
                <StyledBox color={colors.light_200}>Yellow text on brown background</StyledBox>
              </StyledBox>
            </React.Fragment>
          </PatternFlyThemeProvider>
        </React.Fragment>
      </PatternFlyThemeProvider>
    );
  }
}

export default OverrideTheme;
