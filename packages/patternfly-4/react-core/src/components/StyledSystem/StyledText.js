import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { fontFamily, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';
import { StyledTheme } from './StyledTheme';
import { StyledBoxBase } from './StyledBox';

const StyledTextBase = styled(StyledBoxBase)(
  // theme key: fonts
  fontFamily,
  // theme key: fontWeights
  fontWeight,
  // theme key: lineHeights
  lineHeight,
  // theme key: letterSpacings
  letterSpacing,

  // no theme keys
  textAlign
);

const StyledText = ({ className, children, ...props }) => (
  <ThemeProvider theme={StyledTheme}>
    <StyledTextBase {...props} className={css(className)}>
      {children}
    </StyledTextBase>
  </ThemeProvider>
);

StyledText.propTypes = {
  /** Additional classes that are passed into the StyledText */
  className: PropTypes.string,
  /** Anything that can be rendered inside the StyledText */
  children: PropTypes.node,
  /** font-family - Maps with Maps with StyledConstants.fonts */
  fontFamily: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** font-weight - Maps with Maps with StyledConstants.fontWeights */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** line-height - Maps with Maps with StyledConstants.lineHeights */
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** letter-spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** text-align */
  textAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
};

StyledText.defaultProps = {
  className: '',
  children: null,
  fontFamily: null,
  fontWeight: null,
  lineHeight: null,
  letterSpacing: null,
  textAlign: null
};

export default StyledText;
