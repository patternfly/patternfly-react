import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './navigationItem.styles';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  pkg: PropTypes.string,
  components: PropTypes.array,
  collapsed: PropTypes.bool
};

const defaultProps = {
  pkg: '',
  components: [],
  collapsed: true
};

const pathPrefix = 'https://github.com/patternfly/patternfly-react/tree/master/packages/';
const getPkgPrefix = pkg => (pkg === 'icons' ? 'react-icons' : `patternfly-4/react-${pkg}`);
const navItemDescriptor = pkg => `Found in patternfly ${pkg}`;
const navItemDescriptorId = children => `${children}Descriptor`;

const NavigationItem = ({ to, children, pkg, components, collapsed }) => (
  <Location>
    {({ location }) => {
      const currentPath = location.pathname;
      const isActive = currentPath.toLowerCase().indexOf(children.toLowerCase()) > -1;
      return (
        <li className={css(collapsed && styles.collapsedNavItem)}>
          <Link
            className={css(styles.navigationItem, isActive && styles.active)}
            to={to}
            state={{ shouldBeCollapsed: collapsed }}
            aria-describedby={navItemDescriptorId(children)}
          >
            {children}
          </Link>
          <a
            className={css(styles.pkgLabel)}
            target="_blank"
            rel="noopener noreferrer"
            href={`${pathPrefix}${getPkgPrefix(pkg)}`}
            id={navItemDescriptorId(children)}
            aria-label={navItemDescriptor(pkg)}
          >
            {pkg}
          </a>
          {components &&
            components.length > 0 &&
            (isActive || !collapsed) && (
              <ul className={css(styles.secondaryList)}>
                {components.map(route => (
                  <li key={route.to}>
                    <Link
                      className={css(styles.navigationItemSecondary)}
                      to={route.to}
                      state={{ shouldBeCollapsed: collapsed }}
                    >{`${route.label} Props`}</Link>
                  </li>
                ))}
              </ul>
            )}
        </li>
      );
    }}
  </Location>
);

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;
