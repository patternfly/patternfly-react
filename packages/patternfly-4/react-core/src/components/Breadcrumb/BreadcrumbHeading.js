import React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** Content rendered inside the breadcrumb title. */
  children: PropTypes.node,
  /** Additional classes added to the breadcrumb item. */
  className: PropTypes.string,
  /** HREF for breadcrumb link. */
  to: PropTypes.string,
  /** Target for breadcrumb link. */
  target: PropTypes.string,
  /** Sets the base component to render. Defaults to <a> */
  component: componentShape,
  /** Additional props are spread to the container <li> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  to: null,
  target: null,
  component: 'a'
};

const BreadcrumbHeading = ({ className, children, to, target, component: Component, ...props }) => (
  <li {...props} className={css(styles.breadcrumbItem, className)}>
    <h1 className={css(styles.breadcrumbHeading)}>
      {to && (
        <Component
          href={to}
          target={target}
          className={css(styles.breadcrumbLink, styles.modifiers.current)}
          aria-current="page"
        >
          {children}
        </Component>
      )}
      {!to && <React.Fragment>{children}</React.Fragment>}
    </h1>
  </li>
);

BreadcrumbHeading.propTypes = propTypes;
BreadcrumbHeading.defaultProps = defaultProps;

export default BreadcrumbHeading;
