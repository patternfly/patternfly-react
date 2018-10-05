import React from 'react';
import styles from '@patternfly/patternfly-next/components/Content/content.css';
import { StyleSheet, css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered within the TextContent */
  children: PropTypes.node,
  /** Additional classes added to the TextContent */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const TextContent = ({ children, className, ...props }) => {
  // Get the stylesheet and make it more specific by appending .is-content class to selectors
  // This way even if other components are nested within the TextContent, their text styling will not be affected
  const moreSpecificStyles = styles.raw.replace(/(.pf-c-content\s[a-zA-Z0-9]+)/g, '$1.is-content');
  const updatedStyles = StyleSheet.parse(moreSpecificStyles);

  return (
    <div {...props} className={css(updatedStyles.content, className)}>
      {children}
    </div>
  )
};

TextContent.propTypes = propTypes;
TextContent.defaultProps = defaultProps;

export default TextContent;
