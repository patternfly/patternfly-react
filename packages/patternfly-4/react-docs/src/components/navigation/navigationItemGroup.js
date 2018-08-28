import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './navigationItemGroup.styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

class NavigationItemGroup extends React.Component {
  static currentId = 0;
  static propTypes = propTypes;

  id = NavigationItemGroup.currentId++;
  contentId = `nav-item-group-content-${this.id}`;

  render() {
    const { title, children } = this.props;

    return (
      <nav>
        <div
          className={css(styles.title)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {title}
        </div>
        <ul>{children}</ul>
      </nav>
    );
  }
}

export default NavigationItemGroup;
