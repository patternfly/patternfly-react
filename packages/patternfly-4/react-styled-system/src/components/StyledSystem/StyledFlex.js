import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { flexWrap, flexDirection, alignItems, alignContent, justifyContent } from 'styled-system';
import StyledBox, { StyledBoxBase } from './StyledBox';

const StyledFlexBase = styled(StyledBoxBase)(
  {
    display: 'flex'
  },
  // flex parent props
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent
);

/**
 * StyledFlex inherits all the props from the StyledBox component.
 */
const StyledFlex = ({ className, children, component, ...props }) => {
  const StyledFlexBaseWithComponent = StyledFlexBase.withComponent(component);
  return (
    <StyledFlexBaseWithComponent {...props} className={css(className)}>
      {children}
    </StyledFlexBaseWithComponent>
  );
};

StyledFlex.propTypes = {
  /** All the StyledBox props */
  ...StyledBox.propTypes,

  /** flex-wrap */
  flexWrap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** flex-direction */
  flexDirection: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** align-items */
  alignItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** align-content */
  alignContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** justify-content */
  justifyContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
};

StyledFlex.defaultProps = {
  ...StyledBox.defaultProps,

  flexWrap: null,
  flexDirection: null,
  alignItems: null,
  alignContent: null,
  justifyContent: null
};

export default StyledFlex;
