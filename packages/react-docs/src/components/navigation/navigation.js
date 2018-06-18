import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './navigation.styles';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import NavigationItemGroup from './navigationItemGroup';
import NavigationItem from './navigationItem';
import ValueToggle from '../valueToggle';

const propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired
    })
  )
};

const defaultProps = {
  components: []
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
    const { components } = this.props;
    const { searchValue } = this.state;
    const searchRE = new RegExp(searchValue, 'i');

    const filteredComponents = components.filter(c =>
      searchRE.test(c.displayName)
    );

    return (
      <div className={css(styles.navigation)}>
        <div className={css(styles.navigationContent)}>
          <div className={css(styles.logo)}>
            <Link to="/">
              <img src={logo} alt="Patternfly Logo" />
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
              <NavigationItemGroup
                isExpanded={value}
                onToggleExpand={toggle}
                title="Style"
              >
                <NavigationItem to="/styles/tokens">Tokens</NavigationItem>
              </NavigationItemGroup>
            )}
          </ValueToggle>
          <ValueToggle defaultValue>
            {({ value, toggle }) => (
              <NavigationItemGroup
                isExpanded={value}
                onToggleExpand={toggle}
                title="Components"
              >
                {filteredComponents.map(comp => (
                  <NavigationItem
                    key={comp.displayName}
                    to={`/components/${comp.displayName}`}
                  >
                    {comp.displayName}
                  </NavigationItem>
                ))}
              </NavigationItemGroup>
            )}
          </ValueToggle>
        </div>
      </div>
    );
  }
}

export default Navigation;
