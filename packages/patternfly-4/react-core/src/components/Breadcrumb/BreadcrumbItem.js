import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const BreadcrumbItem = ({ children, className, isCurrent, ...props }) => {
  return (
    <li className={css(styles.breadcrumbItem, className)} aria-current={isCurrent ? 'page' : null} {...props}>
      {children}
    </li>
  );
};

BreadcrumbItem.propTypes = {
  /** Content rendered inside BreadcrumbList */
  children: PropTypes.node.isRequired,
  /** Additional classes added to BreadcrumbList */
  className: PropTypes.string,
  /** Flag to show if the BreadcrumbItem is current */
  isCurrent: PropTypes.bool
};

BreadcrumbItem.defaultProps = {
  className: '',
  isCurrent: false
};

export default BreadcrumbItem;
