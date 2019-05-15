import React from 'react';
import PropTypes from 'prop-types';
import { NavVariants } from './NavVariants';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Indicates the list type. */
  variant: PropTypes.oneOf(Object.values(NavVariants)),
  /** Children nodes */
  children: PropTypes.node,
  /** Additional classes added to the list */
  className: PropTypes.string,
  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};

const defaultProps = {
  variant: 'default',
  children: null,
  className: ''
};

const NavList = ({ variant, children, className, ...props }) => {
  const variantStyle = {
    [NavVariants.default]: styles.navList,
    [NavVariants.simple]: styles.navSimpleList,
    [NavVariants.horizontal]: styles.navHorizontalList,
    [NavVariants.tertiary]: styles.navTertiaryList
  };

  return (
    <ul className={css(variantStyle[variant], className)} {...props}>
      {children}
    </ul>
  );
};

NavList.propTypes = propTypes;
NavList.defaultProps = defaultProps;
NavList.componentType = 'NavList';

export default NavList;
