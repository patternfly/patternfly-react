import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const ModalCloseButton = ({ className, closeText, ...props }) => (
  <button className={classNames(`close`, className)} {...props}>
    <Icon type="pf" name="close" aria-hidden="true" title={closeText} />
    <span className="sr-only">{closeText}</span>
  </button>
);

ModalCloseButton.defaultProps = {
  className: '',
  closeText: 'Close'
};

ModalCloseButton.propTypes = {
  /** additional classes */
  className: PropTypes.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};

export default ModalCloseButton;
