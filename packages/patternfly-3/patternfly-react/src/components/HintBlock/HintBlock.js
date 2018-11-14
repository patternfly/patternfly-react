import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

const HintBlock = ({ className, onClose, title, body, buttonContent, onButtonClick, ...props }) => {
  const classes = classNames('hint-block-pf', className);

  return (
    <div className={classes} {...props}>
      {onClose && (
        <button type="button" className="close" aria-hidden="true" aria-label="Close" onClick={onClose}>
          <span className="pficon pficon-close" />
        </button>
      )}
      <div className="hint-block-pf-title">{title}</div>
      <div className="hint-block-pf-body">{body}</div>
      {buttonContent && (
        <button className="btn btn-primary" type="button" onClick={onButtonClick}>
          {buttonContent}
        </button>
      )}
    </div>
  );
};

HintBlock.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Close callback, if not provided the block will not be closable */
  onClose: PropTypes.func,
  /** Title for the hint block */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Body of the hint block */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Optional button contents for the hint block */
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Callback for the button if buttonContent is provided */
  onButtonClick: PropTypes.func
};

HintBlock.defaultProps = {
  className: '',
  onClose: null,
  buttonContent: null,
  onButtonClick: noop
};

export default HintBlock;
