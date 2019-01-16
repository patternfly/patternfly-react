import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/ChipGroup/chip-group.css';

const ChipGroupToolbarItem = ({ children, className, categoryName, ...props }) => {
  if (React.Children.count(children)) {
    return (
      <ul className={css(styles.chipGroup, styles.modifiers.toolbar)} {...props}>
        <li>
          <h4 className={css(styles.chipGroupLabel)}>{categoryName}</h4>
          <ul className={css(styles.chipGroup)}>{children}</ul>
        </li>
      </ul>
    );
  }
  return null;
};

ChipGroupToolbarItem.propTypes = {
  /**  Category name text */
  categoryName: PropTypes.string,
  /** Content rendered inside the chip text */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the chip item */
  className: PropTypes.string
};

ChipGroupToolbarItem.defaultProps = {
  categoryName: '',
  children: null,
  className: ''
};

export default ChipGroupToolbarItem;
