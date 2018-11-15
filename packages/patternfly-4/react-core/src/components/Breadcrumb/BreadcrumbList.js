import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const BreadcrumbList = ({ children, className, 'aria-current': ariaCurrent, ...props }) => {
  return (
    <ol className={css(styles.breadcrumbList, className)} aria-current={ariaCurrent} {...props}>
      {children}
    </ol>
  );
};

BreadcrumbList.propTypes = {
  /** Content rendered inside BreadcrumbList */
  children: PropTypes.node.isRequired,
  /** Additional classes added to BreadcrumbList */
  className: PropTypes.string,
  /** Adds accessible text to BreadcrumbList */
  'aria-current': PropTypes.string
}

BreadcrumbList.defaultProps = {
  className: '',
  'aria-current': undefined
}

export default BreadcrumbList;
