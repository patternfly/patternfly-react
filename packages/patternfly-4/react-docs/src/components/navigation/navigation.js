import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './navigation.styles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import NavigationItemGroup from './navigationItemGroup';
import NavigationItem from './navigationItem';
import { Button, Form, FormGroup, TextInput } from '@patternfly/react-core';
import { GoFold, GoUnfold } from 'react-icons/go';

const routeShape = PropTypes.shape({
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  pkg: PropTypes.string,
  components: PropTypes.array
});

const propTypes = {
  componentRoutes: PropTypes.arrayOf(routeShape),
  layoutRoutes: PropTypes.arrayOf(routeShape),
  demoRoutes: PropTypes.arrayOf(routeShape),
  collapsed: PropTypes.bool,
  handleCollapseExpandClick: PropTypes.func,
  location: PropTypes.any
};

const defaultProps = {
  componentRoutes: [],
  layoutRoutes: [],
  demoRoutes: [],
  collapsed: true,
  handleCollapseExpandClick: null,
  location: null
};

class Navigation extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  state = {
    searchValue: ''
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  expand = () => {
    this.props.handleCollapseExpandClick(false);
  };

  collapse = () => {
    this.props.handleCollapseExpandClick(true);
  };

  render() {
    const { componentRoutes, layoutRoutes, demoRoutes, collapsed, location } = this.props;
    const computedCollapsed =
      location && location.state && location.state.shouldBeCollapsed !== null
        ? location.state.shouldBeCollapsed
        : collapsed;
    const { searchValue } = this.state;
    const searchRE = new RegExp(searchValue, 'i');

    const filteredComponentRoutes = componentRoutes.filter(c => {
      c.filteredComponents = c.components.filter(component => searchRE.test(component.label));
      return searchRE.test(c.label) || c.filteredComponents.length > 0;
    });

    const filteredLayoutRoutes = layoutRoutes.filter(c => {
      c.filteredComponents = c.components.filter(component => searchRE.test(component.label));
      return searchRE.test(c.label) || c.filteredComponents.length > 0;
    });

    const filteredDemoRoutes = demoRoutes.filter(c => searchRE.test(c.label));

    return (
      <div className={css(styles.navigation)}>
        <div className={css(styles.navigationContent)}>
          <div className={css(styles.logo)}>
            <Link to="/">
              <img src={logo} alt="PatternFly Logo" />
            </Link>
          </div>
          <Form
            className={css(styles.search)}
            onSubmit={event => {
              event.preventDefault();
              return false;
            }}
          >
            <FormGroup label="Search Components" fieldId="primaryComponentSearch">
              <TextInput
                type="text"
                id="primaryComponentSearch"
                name="primaryComponentSearch"
                placeholder="For example, &quot;button&quot;"
                value={searchValue}
                onChange={this.handleSearchChange}
              />
            </FormGroup>
          </Form>
          <div className={css(styles.collapseExpandButtons)}>
            {computedCollapsed ? (
              <Button variant="plain" onClick={this.expand}>
                <span className={css(styles.collapseExpandButton)}>Expand All</span>
                <GoUnfold className={css(styles.collapseExpandIcon)} />
              </Button>
            ) : (
                <Button variant="plain" onClick={this.collapse}>
                  <span className={css(styles.collapseExpandButton)}>Collapse All</span>
                  <GoFold className={css(styles.collapseExpandIcon)} />
                </Button>
              )}
          </div>
          <NavigationItemGroup title="Style">
            <NavigationItem to="/styles/tokens" pkg="tokens" collapsed={computedCollapsed}>
              Global Variables
            </NavigationItem>
            <NavigationItem to="/styles/icons" pkg="icons" collapsed={computedCollapsed}>
              Icons
            </NavigationItem>
          </NavigationItemGroup>
          {Boolean(filteredComponentRoutes.length) && (
            <NavigationItemGroup title="Components">
              {filteredComponentRoutes.map(route => (
                <NavigationItem
                  key={route.label}
                  to={route.to}
                  pkg={route.pkg}
                  components={route.filteredComponents || route.components}
                  collapsed={computedCollapsed}
                >
                  {route.label}
                </NavigationItem>
              ))}
            </NavigationItemGroup>
          )}
          {Boolean(filteredLayoutRoutes.length) && (
            <NavigationItemGroup title="Layouts">
              {filteredLayoutRoutes.map(route => (
                <NavigationItem
                  key={route.label}
                  to={route.to}
                  pkg={route.pkg}
                  components={route.filteredComponents || route.components}
                  collapsed={computedCollapsed}
                >
                  {route.label}
                </NavigationItem>
              ))}
            </NavigationItemGroup>
          )}
          {Boolean(filteredDemoRoutes.length) && (
            <NavigationItemGroup title="Demos">
              {filteredDemoRoutes.map(route => (
                <NavigationItem key={route.label} to={route.to} collapsed={computedCollapsed}>
                  {route.label}
                </NavigationItem>
              ))}
            </NavigationItemGroup>
          )}
        </div>
      </div>
    );
  }
}

export default Navigation;
