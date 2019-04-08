import React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import PropTypes from 'prop-types';
import { AngleRightIcon } from '@patternfly/react-icons';
import { css, getModifier } from '@patternfly/react-styles';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** Content rendered inside the breadcrumb item. */
  children: PropTypes.node,
  /** Additional classes added to the breadcrumb item. */
  className: PropTypes.string,
  /** HREF for breadcrumb link. */
  to: PropTypes.string,
  /** Flag indicating whether the item is active. */
  isActive: PropTypes.bool,
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
  isActive: false,
  target: null,
  component: 'a'
};

const BreadcrumbItem = ({ className, children, to, isActive, target, component: Component, ...props }) => (
  <li {...props} className={css(styles.breadcrumbItem, className)}>
    {to && (
      <Component
        href={to}
        target={target}
        className={css(styles.breadcrumbLink, getModifier(styles, isActive && 'current'))}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Component>
    )}
    {!to && <React.Fragment>{children}</React.Fragment>}
    {!isActive && (
      <span className={css(styles.breadcrumbItemDivider)}>
        <AngleRightIcon />
      </span>
    )}
  </li>
);

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
