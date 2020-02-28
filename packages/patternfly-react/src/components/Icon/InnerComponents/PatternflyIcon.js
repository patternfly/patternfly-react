import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const PatternflyIcon = ({ name, className, ...props }) => (
  <span aria-hidden="true" className={classNames('pficon', `pficon-${name}`, className)} {...props} />
);

PatternflyIcon.propTypes = {
  /** Patternfly Icon font name */
  name: PropTypes.string.isRequired,
  /** additional classes */
  className: PropTypes.string
};

PatternflyIcon.defaultProps = {
  className: ''
};
export default PatternflyIcon;
