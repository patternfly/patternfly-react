import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const Breadcrumb = ({ children, className, 'aria-label': ariaLabel, ...props }) => {
  return (
    <nav className={css(styles.breadcrumb, className)} aria-label={ariaLabel} {...props}>
      {children}
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Content rendered inside Breadcrumb */
  children: PropTypes.node.isRequired,
  /** Additional classes added to Breadcrumb */
  className: PropTypes.string,
  /** Adds accessible text to Breadcrumb */
  'aria-label': PropTypes.string
}

Breadcrumb.defaultProps = {
  className: '',
  'aria-label': undefined
}

export default Breadcrumb;
