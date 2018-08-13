import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './navigation.styles';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import NavigationItemGroup from './navigationItemGroup';
import NavigationItem from './navigationItem';
import ValueToggle from '../valueToggle';

const routeShape = PropTypes.shape({
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});

const propTypes = {
  componentRoutes: PropTypes.arrayOf(routeShape),
  layoutRoutes: PropTypes.arrayOf(routeShape)
};

const defaultProps = {
  componentRoutes: [],
  layoutRoutes: []
};

class Navigation extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  state = {
    searchValue: ''
  };

  handleSearchChange = e => {
    const searchValue = e.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  render() {
    const { componentRoutes, layoutRoutes } = this.props;
    const { searchValue } = this.state;
    const searchRE = new RegExp(searchValue, 'i');

    const filteredComponentRoutes = componentRoutes.filter(c => searchRE.test(c.label));

    const filteredLayoutRoutes = layoutRoutes.filter(c => searchRE.test(c.label));

    return (
      <div className={css(styles.navigation)}>
        <div className={css(styles.navigationContent)}>
          <div className={css(styles.logo)}>
            <Link to="/">
              <img src={logo} alt="PatternFly Logo" />
            </Link>
          </div>
          <div className={css(styles.search)}>
            <input
              className={css(styles.input)}
              placeholder="Find components, templates,..."
              type="text"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
          </div>
          <ValueToggle defaultValue>
            {({ value, toggle }) => (
              <NavigationItemGroup isExpanded={value} onToggleExpand={toggle} title="Style">
                <NavigationItem to="/styles/tokens">Tokens</NavigationItem>
                <NavigationItem to="/styles/icons">Icons</NavigationItem>
              </NavigationItemGroup>
            )}
          </ValueToggle>
          {Boolean(filteredComponentRoutes.length) && (
            <ValueToggle defaultValue>
              {({ value, toggle }) => (
                <NavigationItemGroup isExpanded={value} onToggleExpand={toggle} title="Components">
                  {filteredComponentRoutes.map(route => (
                    <NavigationItem key={route.label} to={route.to}>
                      {route.label}
                    </NavigationItem>
                  ))}
                </NavigationItemGroup>
              )}
            </ValueToggle>
          )}
          {Boolean(filteredLayoutRoutes.length) && (
            <ValueToggle defaultValue>
              {({ value, toggle }) => (
                <NavigationItemGroup isExpanded={value} onToggleExpand={toggle} title="Layouts">
                  {filteredLayoutRoutes.map(route => (
                    <NavigationItem key={route.label} to={route.to}>
                      {route.label}
                    </NavigationItem>
                  ))}
                </NavigationItemGroup>
              )}
            </ValueToggle>
          )}
        </div>
      </div>
    );
  }
}

export default Navigation;
