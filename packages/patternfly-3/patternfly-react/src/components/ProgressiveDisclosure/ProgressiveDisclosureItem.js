import React from 'react';
import PropTypes from 'prop-types';

export const ProgressiveDisclosureItem = ({ children, show, controlButton, ...otherProps }) => (
  <div {...otherProps}>
    {controlButton}
    <div className={`progressive-disclosure-item-children ${show ? 'show' : 'hidden'}`}>{children}</div>
  </div>
);

ProgressiveDisclosureItem.propTypes = {
  /** progressive disclosure item control button: see more at ProgressiveDisclosure */
  controlButton: PropTypes.node,
  /** progressive disclosure item displayed */
  show: PropTypes.bool,
  /** progressive disclosure children: fields/textareas/etc */
  children: PropTypes.node
};

ProgressiveDisclosureItem.defaultProps = {
  show: false,
  controlButton: null,
  children: null
};
