import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  space,
  color,
  display,
  maxWidth,
  minWidth,
  width,
  height,
  maxHeight,
  minHeight,
  verticalAlign,
  flex,
  order,
  flexBasis,
  alignSelf,
  fontSize,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  overflow,
  ratio,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  left,
  top,
  right,
  bottom,
  style
} from 'styled-system';

// Custom additions
const zIndex = style({
  prop: 'zIndex',
  key: 'zIndices'
});

export const StyledBoxBase = styled('div')(
  // theme key: space
  space,
  // theme key: maxWidths
  maxWidth,
  // theme key: minWidths
  minWidth,
  // theme key: heights
  height,
  // theme key: maxHeights
  maxHeight,
  // theme key: minHeights
  minHeight,
  // theme key: fontSizes
  fontSize,
  // theme key: colors
  color,
  // theme key: borders
  borders,
  // theme key: colors
  borderColor,
  // theme key: radii
  borderRadius,
  // theme key: shadows
  boxShadow,

  // no theme keys
  display,
  width,
  verticalAlign,
  opacity,
  overflow,
  ratio,

  // flex child props
  flex,
  flexBasis,
  order,
  alignSelf,

  // background props
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,

  // position props
  position,
  // theme key: zIndices
  zIndex,
  left,
  top,
  right,
  bottom
);

const StyledBox = ({ className, children, component, ...props }) => {
  const StyledBoxBaseWithComponent = StyledBoxBase.withComponent(component);
  return (
    <StyledBoxBaseWithComponent {...props} className={css(className)}>
      {children}
    </StyledBoxBaseWithComponent>
  );
};

StyledBox.propTypes = {
  /** Additional classes that are passed into the Styled component */
  className: PropTypes.string,
  /** Anything that can be rendered inside the Styled component */
  children: PropTypes.node,
  /** HTML element to render as */
  component: PropTypes.string,

  // ...space.propTypes
  /** margin - Maps with StyledConstants.space */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-bottom - Maps with StyledConstants.space */
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left - Maps with StyledConstants.space */
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-right - Maps with StyledConstants.space */
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top - Maps with StyledConstants.space */
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left and margin-right - Maps with StyledConstants.space */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top and margin-bottom - Maps with StyledConstants.space */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding - Maps with StyledConstants.space */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-bottom - Maps with StyledConstants.space */
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left - Maps with StyledConstants.space */
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-right - Maps with StyledConstants.space */
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top - Maps with StyledConstants.space */
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left and padding-right - Maps with StyledConstants.space */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top and padding-bottom - Maps with StyledConstants.space */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  // ...borders.propTypes
  /** border - Maps with StyledConstants.borders */
  border: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-bottom - Maps with StyledConstants.borders */
  borderBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-left - Maps with StyledConstants.borders */
  borderLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-right - Maps with StyledConstants.borders */
  borderRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-top - Maps with StyledConstants.borders */
  borderTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  // ...color.propTypes
  /** background-color - Maps with StyledConstants.colors */
  bg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** color: Maps with StyledConstants.colors */
  color: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** font-size */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** flex */
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** order */
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** align-self */
  alignSelf: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-color */
  borderColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** border-radius */
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** box-shadow */
  boxShadow: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** max-width */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** min-width */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** max-height */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** min-height */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** display */
  display: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** vertical-align */
  verticalAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** opacity */
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** overflow */
  overflow: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** ratio */
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** flex-basis */
  flexBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** background */
  background: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** background-image */
  backgroundImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** background-size */
  backgroundSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** background-position */
  backgroundPosition: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** background-repeat */
  backgroundRepeat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** position */
  position: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** z-index */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** left */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** top */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** right */
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** bottom */
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
};

StyledBox.defaultProps = {
  className: '',
  children: null,
  component: 'div',
  m: null,
  mb: null,
  ml: null,
  mr: null,
  mt: null,
  mx: null,
  my: null,
  p: null,
  pb: null,
  pl: null,
  pr: null,
  pt: null,
  px: null,
  py: null,
  height: null,
  width: null,
  fontSize: null,
  bg: null,
  color: null,
  flex: null,
  order: null,
  alignSelf: null,
  border: null,
  borderBottom: null,
  borderLeft: null,
  borderRight: null,
  borderTop: null,
  borderColor: null,
  borderRadius: null,
  boxShadow: null,
  maxWidth: null,
  minWidth: null,
  maxHeight: null,
  minHeight: null,
  display: null,
  verticalAlign: null,
  opacity: null,
  overflow: null,
  ratio: null,
  flexBasis: null,
  background: null,
  backgroundImage: null,
  backgroundSize: null,
  backgroundPosition: null,
  backgroundRepeat: null,
  position: null,
  zIndex: null,
  left: null,
  top: null,
  right: null,
  bottom: null
};

export default StyledBox;
