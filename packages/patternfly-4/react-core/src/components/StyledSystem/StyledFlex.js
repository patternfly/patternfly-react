import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { flexWrap, flexDirection, alignItems, alignContent, justifyContent } from 'styled-system';
import { StyledTheme } from './StyledTheme';
import { StyledBoxBase } from './StyledBox';

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

const StyledFlex = ({ className, children, ...props }) => (
  <ThemeProvider theme={StyledTheme}>
    <StyledFlexBase {...props} className={css(className)}>
      {children}
    </StyledFlexBase>
  </ThemeProvider>
);

StyledFlex.propTypes = {
  /** Additional classes that are passed into the StyledFlex */
  className: PropTypes.string,
  /** Anything that can be rendered inside the StyledFlex */
  children: PropTypes.node,
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
  className: '',
  children: null,
  flexWrap: null,
  flexDirection: null,
  alignItems: null,
  alignContent: null,
  justifyContent: null
};

export default StyledFlex;
