import React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children: PropTypes.node,
  /** Additional classes added to the breadcrumb nav. */
  className: PropTypes.string,
  /** Aria-label added to the breadcrumb nav. */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <nav> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  'aria-label': 'Breadcrumb'
};

const Breadcrumb = ({ className, children, ...props }) => (
  <nav {...props} className={css(styles.breadcrumb, className)}>
    <ol className={css(styles.breadcrumbList)}>{children}</ol>
  </nav>
);

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
