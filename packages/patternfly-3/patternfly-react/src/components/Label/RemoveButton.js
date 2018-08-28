import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

const RemoveButton = ({ className, title, onRemoveClick, ...props }) => {
  const classes = classNames('pficon pficon-close', className);

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onRemoveClick && onRemoveClick();
      }}
      className="pf-remove-button"
    >
      <span className={classes} {...props} aria-hidden="true" />
      <span className="sr-only">{title}</span>
    </a>
  );
};

RemoveButton.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Reader title text */
  title: PropTypes.string,
  /** Callback when remove button is clicked */
  onRemoveClick: PropTypes.func
};

RemoveButton.defaultProps = {
  className: '',
  title: 'Remove',
  onRemoveClick: noop
};

export default RemoveButton;
