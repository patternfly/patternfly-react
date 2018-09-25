import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/BackgroundImage/background-image.css';

export const propTypes = {
  /** Content rendered inside the background */
  children: PropTypes.node,
  /** Additional classes added to the background. */
  className: PropTypes.string
};

export const defaultProps = {
  children: '',
  className: ''
};

const BackgroundImage = ({ className, children, ...props }) => (
  <div {...props} className={css(styles.backgroundImage, className)}>
    {children}
  </div>
);

BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;
export default BackgroundImage;
