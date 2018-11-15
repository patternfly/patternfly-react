import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const BreadcrumbLink = ({ children, className, 'aria-label': ariaLabel, isCurrent, ...props }) => {
  return (
    <a
      className={css(styles.breadcrumbLink, isCurrent && styles.modifiers.current, className)}
      aria-label={ariaLabel}
      aria-current={isCurrent ? 'page' : null}
      {...props}
    >
      {children}
    </a>
  );
};

BreadcrumbLink.propTypes = {
  /** Content rendered inside BreadcrumbLink */
  children: PropTypes.node.isRequired,
  /** Additional classes added to BreadcrumbLink */
  className: PropTypes.string,
  /** Adds accessible text to BreadcrumbLink */
  'aria-label': PropTypes.string,
  /** Flag to show if the BreadcrumbLink is current */
  isCurrent: PropTypes.bool
};

BreadcrumbLink.defaultProps = {
  className: '',
  'aria-label': undefined,
  isCurrent: false
};

export default BreadcrumbLink;
