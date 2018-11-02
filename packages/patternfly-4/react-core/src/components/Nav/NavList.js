import React from 'react';
import PropTypes from 'prop-types';
import { NavVariants } from './NavVariants';
import styles from '@patternfly/patternfly-next/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import { PageContext } from '../../layouts/Page/Page';

const propTypes = {
  /** Indicates the list type. */
  variant: PropTypes.oneOf(Object.values(NavVariants)),
  /** Children nodes */
  children: PropTypes.node,
  /** Additional classes added to the list */
  className: PropTypes.string,
  /** nav should have tall modifier (if true, makes the nav taller) */
  isTall: PropTypes.bool
};

const defaultProps = {
  variant: 'default',
  children: null,
  className: '',
  isTall: false
};

const NavList = ({ variant, children, className, isTall, ...props }) => {
  const variantStyle = {
    [NavVariants.default]: styles.navList,
    [NavVariants.simple]: styles.navSimpleList,
    [NavVariants.horizontal]: styles.navHorizontalList,
    [NavVariants.tertiary]: styles.navTertiaryList
  };

  return (
    <PageContext.Consumer>
      {context => (
        <ul
          className={css(
            variantStyle[variant],
            ((context && context.isTall) || isTall) && styles.modifiers.tall,
            className
          )}
          {...props}
        >
          {children}
        </ul>
      )}
    </PageContext.Consumer>
  );
};

NavList.propTypes = propTypes;
NavList.defaultProps = defaultProps;
NavList.componentType = 'NavList';

export default NavList;
