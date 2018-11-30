import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './navigationItem.styles';
import Link from 'gatsby-link';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  pkg: PropTypes.string,
  components: PropTypes.array
};

const defaultProps = {
  pkg: '',
  components: []
};

const pathPrefix = 'https://github.com/patternfly/patternfly-react/tree/master/packages/';
const getPkgPrefix = pkg => (pkg === 'icons' ? 'react-icons' : `patternfly-4/react-${pkg}`);
const navItemDescriptor = pkg => `Found in patternfly ${pkg}`;
const navItemDescriptorId = children => `${children}Descriptor`;

const NavigationItem = ({ to, children, pkg, components }) => (
  <li>
    <Link
      className={css(styles.navigationItem)}
      activeClassName={css(styles.active)}
      to={to}
      aria-describedby={navItemDescriptorId(children)}>
      {children}
    </Link>
    <a
      className={css(styles.pkgLabel)}
      target="_blank"
      href={`${pathPrefix}${getPkgPrefix(pkg)}`}
      id={navItemDescriptorId(children)}
      aria-label={navItemDescriptor(pkg)}>
      {pkg}
    </a>
    {components &&
      components.length > 0 && (
        <ul className={css(styles.secondaryList)}>
          {components.map(route => (
            <li key={route.to}>
              <Link className={css(styles.navigationItemSecondary)} to={route.to}>{`${route.label} Props`}</Link>
            </li>
          ))}
        </ul>
      )}
  </li>
);

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;
