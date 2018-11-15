import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const BreadcrumbTitle = ({ children, className, ...props }) => {
  return (
    <h1 className={css(styles.breadcrumbTitle, className)} {...props}>
      {children}
    </h1>
  );
};

BreadcrumbTitle.propTypes = {
  /** Content rendered inside BreadcrumbTitle */
  children: PropTypes.node.isRequired,
  /** Additional classes added to BreadcrumbTitle */
  className: PropTypes.string,
};

BreadcrumbTitle.defaultProps = {
  className: '',
};

export default BreadcrumbTitle;
