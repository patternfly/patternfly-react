import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const PatternflyIcon = ({ name, className, ...props }) => {
  return (
    <span
      aria-hidden="true"
      className={cx('pficon', `pficon-${name}`, className)}
      {...props}
    />
  );
};

PatternflyIcon.propTypes = {
  /** Patternfly Icon font name */
  name: PropTypes.string.isRequired,
  /** additional classes */
  className: PropTypes.string,
};
export default PatternflyIcon;
