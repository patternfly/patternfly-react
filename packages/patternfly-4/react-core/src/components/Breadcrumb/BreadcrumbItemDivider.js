import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly-next/components/Breadcrumb/breadcrumb.css';

const BreadcrumbItemDivider = ({ className, ...props }) => {
  return (
    <span className={css(styles.breadcrumbItemDivider, className)} {...props}>
      <AngleRightIcon />
    </span>
  );
};

BreadcrumbItemDivider.propTypes = {
  /** Additional classes added to BreadcrumbItemDivider */
  className: PropTypes.string
};

BreadcrumbItemDivider.defaultProps = {
  className: ''
};

export default BreadcrumbItemDivider;
