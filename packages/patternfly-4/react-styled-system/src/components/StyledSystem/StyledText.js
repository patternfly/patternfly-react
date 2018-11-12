import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { fontFamily, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';
import StyledBox, { StyledBoxBase } from './StyledBox';

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

/**
 * StyledText inherits all the props from the StyledBox component.
 */
const StyledText = ({ className, children, component, ...props }) => {
  const StyledTextBaseWithComponent = StyledTextBase.withComponent(component);
  return (
    <StyledTextBaseWithComponent {...props} className={css(className)}>
      {children}
    </StyledTextBaseWithComponent>
  );
};

StyledText.propTypes = {
  /** All the StyledBox props */
  ...StyledBox.propTypes,

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
  ...StyledBox.defaultProps,

  fontFamily: null,
  fontWeight: null,
  lineHeight: null,
  letterSpacing: null,
  textAlign: null
};

export default StyledText;
