import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';

const OptionsMenuSeparator = ({ className, ...props}) => (
  <li
    className={css(styles.optionsMenuSeparator, className)}
    role="separator"
    {...props}
  />
);

OptionsMenuSeparator.propTypes = {
  /** Classes applied to root element of Options menu separator item */
  className: PropTypes.string,
};

OptionsMenuSeparator.defaultProps = {
  className: '',
};

export default OptionsMenuSeparator;
