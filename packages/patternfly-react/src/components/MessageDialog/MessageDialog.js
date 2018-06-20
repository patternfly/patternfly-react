import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../common/helpers';
import { Modal, Button } from '../../index';

const MessageDialog = ({
  show,
  onHide,
  primaryAction,
  secondaryAction,
  title,
  icon,
  primaryText,
  secondaryText,
  primaryActionButtonBsStyle,
  secondaryActionButtonBsStyle,
  primaryActionButtonContent,
  secondaryActionButtonContent,
  className,
  footer,
  ...props
}) => (
  <Modal
    className={classNames('message-dialog-pf', className)}
    show={show}
    onHide={onHide}
    {...props}
  >
    <Modal.Header>
      <Modal.CloseButton onClick={onHide} />
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {icon && icon}
      <div>
        {primaryText && primaryText}
        {secondaryText && secondaryText}
      </div>
    </Modal.Body>
    <Modal.Footer>
      {!footer ? (
        <React.Fragment>
          {secondaryActionButtonContent && (
            <Button
              bsStyle={secondaryActionButtonBsStyle}
              onClick={secondaryAction}
            >
              {secondaryActionButtonContent}
            </Button>
          )}
          <Button
            autoFocus
            bsStyle={primaryActionButtonBsStyle}
            onClick={primaryAction}
          >
            {primaryActionButtonContent}
          </Button>
        </React.Fragment>
      ) : (
        footer
      )}
    </Modal.Footer>
  </Modal>
);

MessageDialog.propTypes = {
  /** additional class(es) */
  className: PropTypes.string,
  /** When true, the modal will show itself */
  show: PropTypes.bool.isRequired,
  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer primary action button */
  primaryAction: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: PropTypes.func,
  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: PropTypes.string,
  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: PropTypes.string,
  /** content for default footer primary action button */
  primaryActionButtonContent: PropTypes.node.isRequired,
  /** content for default footer secondary action button */
  secondaryActionButtonContent: PropTypes.node,
  /** modal title */
  title: PropTypes.string,
  /** modal body icon */
  icon: PropTypes.node,
  /** primary message text */
  primaryText: PropTypes.node,
  /** secondary message text */
  secondaryText: PropTypes.node,
  /** custom footer */
  footer: PropTypes.node
};

MessageDialog.defaultProps = {
  className: '',
  secondaryAction: noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryText: null,
  secondaryText: null,
  footer: null
};

export default MessageDialog;
