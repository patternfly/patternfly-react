import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../index';

const ModalCloseButton = ({ className, closeText, ...rest }) => (
  <button className={cx(`close`, className)} {...rest}>
    <Icon type="pf" name="close" aria-hidden="true" title={closeText} />
    <span className="sr-only">{closeText}</span>
  </button>
);

ModalCloseButton.defaultProps = {
  closeText: 'Close'
};

ModalCloseButton.propTypes = {
  /** additional classes */
  className: PropTypes.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};

export default ModalCloseButton;
